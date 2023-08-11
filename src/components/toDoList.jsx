import '../App.css'
import AvatarListItem from "./AvatarListItem"

const ToDoList = (props) => {
    return(
        <>
        {/*
        <ul>
            {props.tasks.map((value, index) => (
                <li key={index}>
                {value}
                </li>
            ))}
        </ul>
        */}
        <p
        className="title"
        >完了したタスク</p>
        <AvatarListItem
        isCompleted = {true}
        items = {props.completedTasks}
        setCompletedTasks = {props.setCompletedTasks}
        ></AvatarListItem>
        <p
        className="title"
        >未完了のタスク</p>
        <AvatarListItem
        isCompleted = {false}
        completedTasks = {props.completedTasks}
        uncompletedTasks = {props.uncompletedTasks}
        setCompletedTasks = {props.setCompletedTasks}
        setUncompletedTasks = {props.setUncompletedTasks}
        items = {props.uncompletedTasks}
        ></AvatarListItem>
        </>
    )
}

export default ToDoList
