import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small'
export const Memorize = () => {
    const { state: counter, increment } = useCounter();
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorize</h1>
            <h3>Counter: <Small value={counter} /></h3>

            <button onClick={() => increment(1)}>+1</button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={e => { setShow(!show) }}
            >show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
