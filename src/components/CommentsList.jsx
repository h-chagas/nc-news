import styles from '../styles/CommentsList.module.css'

const CommentsList = () => {

    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                Comment
                <span>Vote</span>
            </li>
            <li className={styles.li}>
                Comment
                <span>Vote</span>
            </li>
            <li className={styles.li}>
                Comment
                <span>Vote</span>
            </li>
        </ul>
    )

}

export default CommentsList;