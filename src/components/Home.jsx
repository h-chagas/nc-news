import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/Users';
import styles from '../styles/Home.module.css'

import Articles from "./Articles";

const Home = () => {

    const { setLoggedInUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

const handleLogOut = () => {
    setLoggedInUser(null)
    setIsLoggedIn(false)
}

    return (
        <main>
            <p>Welcome!</p>
            <p>Check below out latest news</p>
            <div className={styles.login_logout_Div}>

                <Link to={`/login`}>
                    <button className={styles.loginBtn}>
                        Log in
                    </button>
                </Link>

                <Link to={`/`}>
                    <button
                    className={styles.logoutBtn}
                    onClick={handleLogOut}
                    >
                        Log out
                    </button>
                </Link>

            </div>
            <Articles />
        </main>
    )
}

export default Home;