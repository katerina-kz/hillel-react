import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Form.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { useOnlineStatus } from "./hooks/useOnlineStatus";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function Form(props) {
    const [name, setName] = useLocalStorage('name', '');
    const [occupation, setOccupation] = useLocalStorage('occupation', '');

    const classes = useStyles();
    useDocumentTitle('Занятия | Hillel LMS');


    const online = useOnlineStatus()
    console.log(`user is online: ${online}`)

    return (
        <>
            <div className='form-table'>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Input your name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField id="outlined-basic-1" label="Input your occupation" variant="outlined" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                </form>
            </div>
        </>
    );
}

export default Form;