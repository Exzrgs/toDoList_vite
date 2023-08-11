import './App.css'
import { useState } from "react";
import { RegistTask, Title, ToDoList } from "./components/index";

function App() {
  // const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [uncompletedTasks, setUncompletedTasks] = useState([])

  return (
    <>
    <div className="contents">
    <Title></Title>
    <br/>
    <RegistTask
    // tasks = {tasks}
    // setTasks = {setTasks}
    uncompletedTasks = {uncompletedTasks}
    setUncompletedTasks = {setUncompletedTasks}
    ></RegistTask>
    <ToDoList
    uncompletedTasks = {uncompletedTasks}
    completedTasks = {completedTasks}
    setCompletedTasks = {setCompletedTasks}
    setUncompletedTasks = {setUncompletedTasks}
    // tasks = {tasks}
    ></ToDoList>
    </div>
    </>
  );
}

export default App;
