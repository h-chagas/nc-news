import { Link } from "react-router-dom";
import styles from '../styles/SingleTopic.module.css'

const SingleTopic = ( {topic} ) => {
     
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link
                className={styles.links}
                to={`/topics/${topic.slug}`}
                >
                    <li className={styles.li_s}>{topic.slug}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default SingleTopic;