import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Form.css';
import List from './List';
import { useLocalStorage } from './hooks/useLocalStorage';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function Form(props) {
    const [list, setList] = useState(false);
    const [inputData, setInputData] = useState('');
    const [storageData, setStorageData] = useLocalStorage();
    const classes = useStyles();

    const handleInput = (e) => {
       setInputData(e.target.value);
    }

    const handleSubmit = () => {
        setList(true);
        setStorageData(inputData);
    }

    return (
        <div className='form-table'>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Input some text" variant="outlined" value={inputData} onChange={handleInput} />
                <Button className='add-button' variant="contained" onClick={handleSubmit}>Add to list</Button>
            </form>
            {
                list &&
                <List />
            }
        </div>
    );
}

export default Form;