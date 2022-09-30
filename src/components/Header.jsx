import styles from '../styles/Header.module.css'
import { UserContext } from '../context/Users';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const {loggedInUser, isLoggedIn} = useContext(UserContext)

    return (
        <>
        <header className={styles.header}>
            <Link to='/'>
                <h1 className={styles.h1}>NC News</h1>
            </Link>
        </header>
        {
        isLoggedIn ? 
        <section>
            <img
            src={loggedInUser.avatar_url}
            alt={loggedInUser.username} />
            <p>{loggedInUser.username}</p>
        </section>
        :
        <p>Please Log in</p>
        }
        
        </>
    )
}

export default Header;