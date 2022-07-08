import React, { useCallback, useState } from "react";

export default function Counter () {
  const [ count, setCount ] = useState<number>(0);

  const onClick = useCallback(() => {
    setCount(count + 1);
  }, [ count, setCount ]);

  return (
    <div>
      <span>times: {count}</span>
      <button onClick={onClick}>count up</button>
    </div>
  );
}
