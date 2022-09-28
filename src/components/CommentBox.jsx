import styles from '../styles/CommentBox.module.css'

const CommentBox = () => {

    return (
        <div className={styles.div}>
            <textarea placeholder="Write here your comment..." className={styles.textarea}>
            </textarea>
            <button className={styles.button}>Sumbit</button>
        </div>
    )
}

export default CommentBox