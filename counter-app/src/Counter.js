import React, {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter === 0) {
            alert("Contador no puede ser negativo.");
        } else {
            setCounter(counter - 1);
        }
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div className="Counter">
            <h2>Counter</h2>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;