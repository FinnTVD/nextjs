"use client";
import useStore from "@/app/(store)/store";
import { useState } from "react";

export default function Section1({ data }) {
  const [value, setValue] = useState(0);
  const { count, setCount } = useStore((state) => state);
  console.log(data);
  return (
    <div>
      <div>{count}</div>
      <button className="size-[2rem]" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="size-[2rem]" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
