import { useEffect, useRef } from "react";

const App = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} />
    </>
  );
};

export default App;
