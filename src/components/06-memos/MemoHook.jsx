import { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';
export const MemoHook = () => {
    const { state: counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>Memo hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            
            <p>{memoHeavyProcess}</p>
            {/* <p>{ heavyProcess(counter) }</p> */}
            
            <button onClick={() => increment(1)}>+1</button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={e => { setShow(!show) }}
            >show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
