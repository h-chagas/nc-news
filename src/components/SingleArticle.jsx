import { Link } from "react-router-dom";
import styles from "../styles/SingleArticle.module.css";

const SingleArticle = ({ article, articles }) => {
   return (
      <article className={styles.article}>
         <Link to={`/articles/${article.article_id}`}>
            <h2 className={styles.article_title}>{article.title}</h2>
         </Link>
         <p className={styles.article_author}>Article by {article.author}</p>
         <p className={styles.article_date}>Created at {article.created_at}</p>
         <p className={styles.article_topic}>Topic: {article.topic}</p>
         <p className={styles.article_body}>{article.body}</p>
         <p className={styles.article_comment}>Comments: {article.comment_count}</p>
         <p className={styles.article_votes}>Votes: {article.votes}</p>
      </article>
      
   );
};

export default SingleArticle;
