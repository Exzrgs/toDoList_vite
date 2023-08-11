/* eslint-disable */

import '../App.css'
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Paper from "@mui/material/Paper"
import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'

export default function AvatarListItem(props) {
    const moveUncompleteTask = (index) => {
        console.log("インデックス:",index)
        console.log("未完了:",props.uncompletedTasks[index])
        props.setCompletedTasks(prevState => {
            const newArray = [...prevState, props.uncompletedTasks[index]]
            return newArray
        })
        props.setUncompletedTasks(prevState => {
            const newArray = [...prevState]
            newArray.splice(index,1)
            return newArray
        })
    }

    const deleteCompletedTask = (index) => {
        props.setCompletedTasks(prevState => {
            const newArray = [...prevState]
            newArray.splice(index, 1)
            return newArray
        })
    }

    return(
        <List>
            {props.items.map((value, index) => (
                <Paper elevation={3} className="task">
                    <ListItem>
                        {/*
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        */}
                        <ListItemText
                        primary={value}
                        />
                    </ListItem>
                    {props.isCompleted
                    ? <IconButton
                    onClick={() => deleteCompletedTask(index)}
                    >
                    <DeleteIcon />
                    </IconButton>
                    : <IconButton
                    onClick={() => moveUncompleteTask(index)}
                    >
                    <CheckIcon color="success" />
                    </IconButton>
                    }
                </Paper>
            ))}
        </List>
    )
}