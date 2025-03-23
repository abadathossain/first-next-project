"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            Counter: {count}
            <div>
                <button className="bg-slate-700 mb-2 rounded-md p-3" onClick={() => setCount(count + 1)}>Increment</button>
                <br />
                <button className="bg-slate-700 mb-2 rounded-md p-3" onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
