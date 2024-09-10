import { JSX, useState } from "react";

export const App = (): JSX.Element => {
  const [text1, setText1] = useState<string[]>([]);
  const [text2, setText2] = useState([""]);

  type TaskType = {
    id: number;
    title: string;
    isompleted: boolean;
  };

  const [task, setTask] = useState<TaskType | null>(null);

  return <>dsfdsfds</>;
};

export default App;
