import { useState } from "react"
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const RegistTask = (props) => {
    const [taskName, setTaskName] = useState('')

    const putTaskName = (text) => {
        setTaskName(text)
    }

    const addUncompletedTask = (text) => {
        if (text !== "") {
            props.setUncompletedTasks(props.uncompletedTasks.concat([text]))
            putTaskName("")
        }
    }

    return(
        <>
        <Paper className="registTask">
        <TextField
        variant='outlined'
        size="small"
        value={taskName}
        onChange={(event) => putTaskName(event.target.value)}
        ></TextField>
        <Button
        onClick={() => addUncompletedTask(taskName)}
        >
        登録
        </Button>
        </Paper>
        </>
    )
}

export default RegistTask