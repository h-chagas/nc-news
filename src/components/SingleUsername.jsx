import { useContext } from 'react';
import { UserContext } from '../context/Users';
import styles from '../styles/SingleUsername.module.css'

const SingleUsername = ({user}) => {

    const { setLoggedInUser, setIsLoggedIn  } = useContext(UserContext);


    const  handleLogIn = () => {
        setLoggedInUser(user);
        setIsLoggedIn(true);
    
    }


    return (
        <li 
        className={styles.li}
        key={user.username}
        onClick={handleLogIn}
        >
            <p>{user.username}</p>
            <p>{user.name}</p>
            <img 
            src={user.avatar_url} 
            alt="avatar" 
            className={styles.avatar}
            />
        </li>
    )
}

export default SingleUsername;