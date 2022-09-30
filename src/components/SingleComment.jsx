import styles from '../styles/SingleComment.module.css'

const SingleComment = ({comment}) => {
   return (
      <li className={styles.li} >
         <p className={styles.body}>{comment.body}</p>
         <p className={styles.author}>{comment.author}</p>
         <p className={styles.date}>Posted on {comment.created_at}</p>
         <p className={styles.votes}>{comment.votes} votes</p>
         <div className={styles.voteCommentDiv}>
            <p>Vote</p>
             <div className={styles.btnDiv}>
                 <button className={styles.leftBtn}>+</button>
                 <button className={styles.rightBtn}>-</button>
             </div>
         </div>
      </li>
   );
};

export default SingleComment;
