import React, { FC, JSX } from "react";

export const ReactApp: React.FC = () => {
  return <div>Redev</div>;
};

export const ReactFC: FC = () => {
  return <div>Redev</div>;
};

export const ReactJSX = (): JSX.Element => {
  return <div>Redev</div>;
};

//////////////////////////////////////////////////////
//React.FC and Props
//////////////////////////////////////////////////////

export const ParentComponent: React.FC = () => {
  return <ChildComponent name="Kostya" age={24} isMan={true} />;
};

type PropsType = {
  name: string;
  age: number;
  isMan: boolean;
};

export const ChildComponent: React.FC<PropsType> = ({ name, age, isMan }) => {
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMan}</p>
    </>
  );
};

//////////////////////////////////////////////////////
// Object type
//////////////////////////////////////////////////////

export type FormValuesType = {
  email: string;
  password: number;
  remeberMe: boolean;
};

export const Parents: React.FC = () => {
  const formValues: FormValuesType = {
    email: "tugay-k@mail.ru",
    password: 123241234,
    remeberMe: true,
  };

  return <Childs formData={formValues} />;
};

type PropsTypes = {
  formData: FormValuesType;
};

export const Childs: React.FC<PropsTypes> = ({ formData }) => {
  return (
    <>
      <p>{formData.email}</p>
      <p>{formData.password}</p>
      <p>{formData.remeberMe}</p>
    </>
  );
};

//////////////////////////////////////////////////////
// Array type
//////////////////////////////////////////////////////

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isMan: boolean;
};

export const ParentsComponents: React.FC = () => {
  const students: StudentType[] = [
    { id: 1, name: "Vasya", age: 18, isMan: true },
    { id: 2, name: "Petya", age: 38, isMan: true },
    { id: 3, name: "Masha", age: 25, isMan: false },
    { id: 4, name: "Valentina", age: 30, isMan: false },
  ];

  return (
    <>
      <ChildsComponents students={students} />
    </>
  );
};

type PropsTyp = {
  students: StudentType[];
};

export const ChildsComponents: React.FC<PropsTyp> = ({ students }) => {
  return (
    <>
      {students.map((student) => {
        return (
          <div key={crypto.randomUUID()}>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.isMan}</p>
          </div>
        );
      })}
    </>
  );
};
