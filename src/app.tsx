import { useState } from "preact/hooks";
import "./app.css";
import { Grid } from "./component/Grid";

export function App() {
  const [count, setCount] = useState<number>(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div class="card">
        <Grid updateCount={updateCount} />
        <button>Attempts :- {count}</button>
      </div>
    </>
  );
}
