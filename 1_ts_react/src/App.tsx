// import React, { FC, JSX } from "react";

// export const ReactApp: React.FC = () => {
//   return <div>Redev</div>;
// };

// export const ReactFC: FC = () => {
//   return <div>Redev</div>;
// };

// export const ReactJSX = (): JSX.Element => {
//   return <div>Redev</div>;
// };

//////////////////////////////////////////////////////
//React.FC and Props
//////////////////////////////////////////////////////

// export const ParentComponent: React.FC = () => {
//   return <ChildComponent name="Kostya" age={24} isMan={true} />;
// };

// type PropsType = {
//   name: string;
//   age: number;
//   isMan: boolean;
// };

// export const ChildComponent: React.FC<PropsType> = ({ name, age, isMan }) => {
//   return (
//     <>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{isMan}</p>
//     </>
//   );
// };

//////////////////////////////////////////////////////
// Object type
//////////////////////////////////////////////////////

// export type FormValuesType = {
//   email: string;
//   password: number;
//   remeberMe: boolean;
// };

// export const Parents: React.FC = () => {
//   const formValues: FormValuesType = {
//     email: "tugay-k@mail.ru",
//     password: 123241234,
//     remeberMe: true,
//   };

//   return <Childs formData={formValues} />;
// };

// type PropsTypes = {
//   formData: FormValuesType;
// };

// export const Childs: React.FC<PropsTypes> = ({ formData }) => {
//   return (
//     <>
//       <p>{formData.email}</p>
//       <p>{formData.password}</p>
//       <p>{formData.remeberMe}</p>
//     </>
//   );
// };

//////////////////////////////////////////////////////
// Array type
//////////////////////////////////////////////////////

// export type StudentType = {
//   id: number;
//   name: string;
//   age: number;
//   isMan: boolean;
// };

// export const ParentsComponents: React.FC = () => {
//   const students: StudentType[] = [
//     { id: 1, name: "Vasya", age: 18, isMan: true },
//     { id: 2, name: "Petya", age: 38, isMan: true },
//     { id: 3, name: "Masha", age: 25, isMan: false },
//     { id: 4, name: "Valentina", age: 30, isMan: false },
//   ];

//   return (
//     <>
//       <ChildsComponents students={students} />
//     </>
//   );
// };

// type PropsTyp = {
//   students: StudentType[];
// };

// export const ChildsComponents: React.FC<PropsTyp> = ({ students }) => {
//   return (
//     <>
//       {students.map((student) => {
//         return (
//           <div key={crypto.randomUUID()}>
//             <p>{student.name}</p>
//             <p>{student.age}</p>
//             <p>{student.isMan}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

//////////////////////////////////////////////////////
// callback type
//////////////////////////////////////////////////////

// export type Students = {
//   id: number;
//   name: string;
//   age: number;
//   isMan: boolean;
// };

// export const ParentComponent1: React.FC = () => {
//   const students: Students[] = [
//     { id: 1, name: "Vasya", age: 18, isMan: true },
//     { id: 2, name: "Petya", age: 38, isMan: true },
//     { id: 3, name: "Masha", age: 25, isMan: false },
//     { id: 4, name: "Valentina", age: 30, isMan: false },
//   ];

//   const showStudentName = (name: string): void => console.log(name);

//   return (
//     <ChildComponent1 students={students} showStudentName={showStudentName} />
//   );
// };

// type PropsType1 = {
//   students: Students[];
//   showStudentName: (name: string) => void;
// };

// export const ChildComponent1: React.FC<PropsType1> = ({
//   students,
//   showStudentName,
// }) => {
//   const onClickHandler = (studentName: string) => showStudentName(studentName);

//   return (
//     <>
//       {students.map((student) => {
//         return (
//           <div key={student.id} onClick={() => onClickHandler(student.name)}>
//             <p>{student.name}</p>
//             <p>{student.age}</p>
//             <p>{student.isMan}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

//////////////////////////////////////////////////////
// last example with JSX.Element
//////////////////////////////////////////////////////

// export type Students1 = {
//   id: number;
//   name: string;
//   age: number;
//   isMan: boolean;
// };

// export const ParentComponent2 = (): JSX.Element => {
//   const students: Students1[] = [
//     { id: 1, name: "Vasya", age: 18, isMan: true },
//     { id: 2, name: "Petya", age: 38, isMan: true },
//     { id: 3, name: "Masha", age: 25, isMan: false },
//     { id: 4, name: "Valentina", age: 30, isMan: false },
//   ];

//   const showStudentName = (name: string): void => console.log(name);

//   return (
//     <ChildComponent2 students={students} showStudentName={showStudentName} />
//   );
// };

// type PropsType2 = {
//   students: Students[];
//   showStudentName: (name: string) => void;
// };

// export const ChildComponent2 = ({
//   students,
//   showStudentName,
// }: PropsType2): JSX.Element => {
//   const onClickHandler = (studentName: string) => showStudentName(studentName);

//   return (
//     <>
//       {students.map((student) => {
//         return (
//           <div key={student.id} onClick={() => onClickHandler(student.name)}>
//             <p>{student.name}</p>
//             <p>{student.age}</p>
//             <p>{student.isMan}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

//////////////////////////////////////////////////////
// children type
//////////////////////////////////////////////////////

// import React, { JSX } from "react";

// export const App = (): JSX.Element => {
//   return <ChildComponent>Some children text</ChildComponent>;
// };

// import { ReactNode } from "react";

// type PropsType = {
//   children: ReactNode;
// };

// export const ChildComponent = ({ children }: PropsType): JSX.Element => {
//   console.log(children);

//   return <>{children}</>;
// };

//////////////////////////////////////////////////////
// 1. TASK
//////////////////////////////////////////////////////

// import { JSX } from "react";

// export const ParentComponent = (): JSX.Element => {
//   const name: string = "Kostya";

//   return <SimpleComponent name={name} />;
// };

// // import {ParentComponent} from "App.tsx"

// type Simple = {
//   name: string;
// };

// export const SimpleComponent = ({ name }: Simple): JSX.Element => {
//   return <>{name}</>;
// };

//////////////////////////////////////////////////////
// 2. TASK
//////////////////////////////////////////////////////

// import { JSX } from "react";

// export type Info = {
//   id: number;
//   title: string;
//   count: number;
// };

// export const ParentComponent = (): JSX.Element => {
//   const name: string = "Kostya";
//   const items: string[] = ["dsfd", "gdfsfrtwe3"];
//   const info: Info = {
//     id: +crypto.randomUUID(),
//     title: "descr",
//     count: 11,
//   };

//   return <SimpleComponent name={name} items={items} info={info} />;
// };

// // import {Info} from "App.tsx"

// type Simple = {
//   name: string;
//   items: string[];
//   info: Info;
// };

// export const SimpleComponent = ({ name, items, info }: Simple): JSX.Element => {
//   return (
//     <div>
//       <p>{name}</p>
//       {items.map((item) => {
//         return (
//           <div>
//             <p>{item}</p>
//           </div>
//         );
//       })}
//       <p>{info.count}</p>
//       <p>{info.title}</p>
//     </div>
//   );
// };

//////////////////////////////////////////////////////
// 3. TASK
//////////////////////////////////////////////////////

// import { JSX } from "react";

// export type Info = {
//   id: number;
//   title: string;
//   count: number;
// };

// export const ParentComponent = (): JSX.Element => {
//   const onClick = (text: string): void => console.log(text);
//   const onDataReceived = (text: string): void => console.log(text);

//   const name: string = "Kostya";
//   const items: string[] = ["first", "second", "third"];
//   const info: Info = {
//     id: +crypto.randomUUID(),
//     title: "Кликни на меня и посмотри в консоль",
//     count: 11,
//   };

//   return (
//     <SimpleComponent
//       name={name}
//       items={items}
//       info={info}
//       onClick={onClick}
//       onDataReceived={onDataReceived}
//     />
//   );
// };

// // import {Info} from "App.tsx"

// type Simple = {
//   name: string;
//   items: string[];
//   info: Info;
//   onClick: (text: string) => void;
//   onDataReceived: (text: string) => void;
// };

// export const SimpleComponent = ({
//   name,
//   items,
//   info,
//   onClick,
//   onDataReceived,
// }: Simple): JSX.Element => {
//   const chlickHandler = () => onClick(`Привет React`);
//   const clickReceived = (index: number) => {
//     const item = items.filter((_, ind: number) => ind === index);
//     onDataReceived(item[0]);
//   };

//   return (
//     <div>
//       <p>{name}</p>
//       <p>{info.count}</p>
//       <p onClick={() => chlickHandler()}>{info.title}</p>
//       <p>----------------------</p>
//       {items.map((item, index) => {
//         return (
//           <div
//             key={crypto.randomUUID()}
//             onClick={() => {
//               clickReceived(index);
//             }}
//           >
//             <p>{item}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

//////////////////////////////////////////////////////
// 4. TASK
//////////////////////////////////////////////////////

// export const ParentCmpnt = (): JSX.Element => {
//   return (
//     <SimpleCmpnt>
//       <p>Text1</p>
//       <p>Text2</p>
//       <p>Text3</p>
//       <div>
//         <p>Text4</p>
//         <p>Text5</p>
//         <p>Text6</p>
//       </div>
//     </SimpleCmpnt>
//   );
// };

// import { ReactNode } from "react";

// type PropsTP = {
//   children: ReactNode;
// };

// export const SimpleCmpnt = ({ children }: PropsTP): JSX.Element => {
//   return <>{children}</>;
// };
