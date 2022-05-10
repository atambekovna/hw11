import { useState } from 'react';
import styles from './AddUser.module.css';
import Button from './UI/Button';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';


const AddUser = props => {

    const [enteredUsername,setEnteredname] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState(false)
   
    const addUserHandler = (event) => {
       event.preventDefault()
       if(enteredUsername.trim().length   === 0 || enteredAge.trim().length === 0){

       setError({

        title:'invalid input',
        message:'Plase enter a valiid name an age (non-empty values)'

        });
        return;
       }

       if(+enteredAge < 1){
           setError({
               title:'invalid age ',
               message:'Plase enter a valid age (>0).'
           })
           return;
       }
        props.onAddUser(enteredUsername,enteredAge)
       setEnteredname('')
       setEnteredAge('')

    }

    const usernameChangeHandler = (event) => {
        setEnteredname(event.target.value)
       
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
        
    }

    const ErrorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler} />}

            <Card className={styles.input}>

                <form onSubmit={addUserHandler}>

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>

                </form>

            </Card>


        </>
     
    
    )
}
export default AddUser