import { Link } from "react-router-dom";
import styles from '../styles/Nav.module.css'

const Nav = () =>  {
    return (
        <nav className={styles.nav}>
            <Link to="/topics" className={styles.links}>Topics</Link>

            <Link to="/articles" className={styles.links}>Articles</Link>

            <Link to="/login" className={styles.links}>Users</Link>
        </nav>
    )
}

export default Nav;