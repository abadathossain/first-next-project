"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            Counter: {count}
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
