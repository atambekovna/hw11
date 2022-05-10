import { useState } from 'react';
import Card from './UI/Card';
import styles from './UserList.module.css';
import Button from './UI/Button';
import DeleteModal from './UI/DeleteModal';

const UserList = props => {
  
    const [isDelete, setIsDelete] = useState(false)
    const [id, setId] = useState('')

    const showModalHandler = (id) => {
        
        setIsDelete({
            title: 'Deleting a user',
            message: 'Are you sure you want to delete?',
        })
        setId(id);
        console.log(id)
        return;
    }

    const deleteUserHandler = () => {
        props.onGetData(id)
        setIsDelete(null)
    }


    const closeModal = () => {
        setIsDelete(null)
    }

   return (
    <>
       {isDelete && (
            <DeleteModal 
            
                title={isDelete.title} 
                message={isDelete.message} 
                onConfirm={closeModal} 
                onClick={deleteUserHandler}/>)}

        <Card className={styles.users}>
        <ul>
            {props.users.map( user => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                    <Button onClick={()=>showModalHandler(user.id)}>Delete</Button>
                </li>
            ))}
        </ul>
    </Card>
    </>
    
   )

}
export default UserList