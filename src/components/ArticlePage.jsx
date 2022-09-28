import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import styles from "../styles/SingleArticle.module.css";
import CommentBox from "./CommentBox";
import CommentsList from "./CommentsList";



const ArticlePage = () => {

    const [article, setArticle] = useState({});
    const { article_id } = useParams();

    console.log(article_id, '<<< article_id');
    

    useEffect(() => {
        getArticle(article_id)
        .then(( data ) => {
            setArticle(data.article)
            
        })
        .catch(err => {})
    }, [article_id])

    return (
        <main>
            <article className={styles.article}>
                <h3 className={styles.article_title}>{article.title}</h3>
                <p className={styles.article_author}>Article by {article.author}</p>
                <p className={styles.article_date}>Created at {article.created_at}</p>
                <p className={styles.article_topic}>Topic: {article.topic}</p>
                <p className={styles.article_body}>{article.body}</p>
                <p className={styles.article_comment}>Comments: {article.comment_count}</p>
                <p className={styles.article_votes}>Votes: {article.votes}</p>
            </article>
            
            <CommentBox />
            <CommentsList />

        </main>
    )

}

export default ArticlePage