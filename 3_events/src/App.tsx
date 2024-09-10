///////////////////////////////////////////////////////////////////////
// onChange type
///////////////////////////////////////////////////////////////////////

// import { JSX, ChangeEvent } from "react";

// const App = (): JSX.Element => {
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.value);
//   };

//   return (
//     <>
//       <input type="text" onChange={handleChange} />
//     </>
//   );
// };

// export default App;

///////////////////////////////////////////////////////////////////////
// onSubmit type
///////////////////////////////////////////////////////////////////////

import { JSX, FormEvent } from "react";

const App = (): JSX.Element => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("!!!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Отправить</button>
      </form>
    </>
  );
};

export default App;
