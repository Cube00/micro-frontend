import { useState } from "react";

export default () => {
  const [state, setState] = useState(0);

  return (
    <>
      <div>count: {state}</div>
      <button onClick={() => setState(state + 1)}>increase</button>
    </>
  );
};
