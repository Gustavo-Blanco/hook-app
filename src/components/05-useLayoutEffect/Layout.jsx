import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
import { API_BASE } from "../../env";
import { useCounter } from "../../hooks/useCounter";
import "./layout.css";
import { useLayoutEffect, useRef, useState } from "react";
export const Layout = () => {
    const { state: counter, increment, decrement, reset } = useCounter(1);
    const url = `${API_BASE}quotes/${counter}`;
    const { data } = useFetch(url);
    const { quote } = !!data && data[0];

    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef();
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effects</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={pTag}>
                    {quote}
                </p>
                <div className='py-2'></div>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <hr />
            <div>
                <button
                    className='btn btn-primary'
                    onClick={(e) => counter > 1 && decrement()}
                >
                    Back
                </button>
                <button className='btn btn-primary' onClick={reset}>
                    Reset
                </button>
                <button className='btn btn-primary' onClick={(e) => increment()}>
                    Next
                </button>
            </div>
        </div>
    );
};
