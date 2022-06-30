import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
import { API_BASE } from "../../env";
import { useCounter } from "../../hooks/useCounter";
export const MultipleCustomHooks = () => {
    const { state:counter, increment, decrement, reset } = useCounter(1);
    const url = `${API_BASE}quotes/${counter}`;
    const { loading, data } = useFetch(url);
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />
            {loading ? (
                <div className='alert alert-info text-center'>Loading...</div>
            ) : (
                <div className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <div className='py-2'></div>
                    <footer className='blockquote-footer'>{author}</footer>
                </div>
            )}
            <hr />
            <div>
                <button className='btn btn-primary' onClick={e => counter > 1 && decrement()}>Back</button>
                <button className='btn btn-primary' onClick={reset}>Reset</button>
                <button className='btn btn-primary' onClick={e => increment() }>Next</button>
            </div>
        </div>
    );
};
