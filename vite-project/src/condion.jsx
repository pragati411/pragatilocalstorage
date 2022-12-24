import { useState } from "react";

const ConditionalRendering = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <p>{counter % 4 === 0 ? "It's even" : "It's odd"}</p>
      <button onClick={() => setCounter(counter + 5)}>Increment</button>
    </div>
  );
};

export default ConditionalRendering;
