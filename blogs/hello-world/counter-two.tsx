"use client";
import { useState } from "react";

export function CounterTwo() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount((count + 1) * 2);
      }}>
      Count: {count}
    </button>
  );
}
