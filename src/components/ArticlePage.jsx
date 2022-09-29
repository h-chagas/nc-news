import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import styles from "../styles/ArticlePage.module.css";
import CommentBox from "./CommentBox";
import CommentsList from "./CommentsList";
import Error404 from "./Error404";
import axios from "axios";

const ArticlePage = () => {
   const [article, setArticle] = useState({});
   const [error, setError] = useState(null);
   const { article_id } = useParams();

   useEffect(() => {
      getArticle(article_id)
         .then((data) => {
            setArticle(data.article);
         })
         .catch((err) => {
            setError(err);
         });
   }, [article_id]);

   if (error) {
      return <Error404 />;
   }

   const addVoteOnArticle = (article_id) => {
    setArticle((currentArticle) => {
        return { ...currentArticle, votes: currentArticle.votes + 1 };
     });
    const reqBody = {
        inc_votes: 1
    }

      axios
         .patch(
            `https://be-nc-news-api-example.herokuapp.com/api/articles/${article_id}`, reqBody)
         .then(({ data }) => {})
         .catch((err) => {
            setArticle((currentArticle) => {
                return { ...currentArticle, votes: currentArticle.votes - 1 };
             });
         })
   };

   const removeVoteOnArticle = (article_id) => {
    setArticle((currentArticle) => {
        return { ...currentArticle, votes: currentArticle.votes - 1 };
     });
    const reqBody = {
        inc_votes: -1
    }

      axios
         .patch(
            `https://be-nc-news-api-example.herokuapp.com/api/articles/${article_id}`, reqBody)
         .then(({ data }) => {})
         .catch((err) => {
            setArticle((currentArticle) => {
                return { ...currentArticle, votes: currentArticle.votes + 1 };
             });
         })
   };

   return (
      <main>
         <article className={styles.article}>
            <h3 className={styles.article_title}>{article.title}</h3>
            <p className={styles.article_author}>Article by {article.author}</p>
            <p className={styles.article_date}>
               Created at {article.created_at}
            </p>
            <p className={styles.article_topic}>Topic: {article.topic}</p>
            <p className={styles.article_body}>{article.body}</p>
            <p className={styles.article_comment}>
               Comments: {article.comment_count}
            </p>
         </article>

         <div className={styles.article_votes_div}>
            <h4>Vote</h4>
            <div className={styles.article_votes_icons}>
               <button
                  className={styles.button}
                  onClick={() => addVoteOnArticle(article.article_id)}
               >
                  <FaRegThumbsUp className={styles.thumbsUpIcon} />
                  {article.votes}
               </button>
               <button
                  className={styles.button}
                  onClick={() => removeVoteOnArticle(article.article_id)}
               >
                  <FaRegThumbsDown className={styles.thumbsDownIcon} />
               </button>
            </div>
         </div>

         <CommentBox />
         <CommentsList />
      </main>
   );
};

export default ArticlePage;
