import { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
    
    const inputRef = useRef();



    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
         <div>
            <h1>Focus screen</h1>
            <hr />
            <input
                type='text'
                ref={inputRef}
                className='form-control'
                placeholder='Your name'
            />

            <br />

            <button
                className='btn btn-outline-primary'
                onClick={handleClick}
            >Focus
            </button>
        </div>
    );
};
