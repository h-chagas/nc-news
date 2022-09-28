import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import styles from '../styles/Articles.module.css'
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const Articles = () => {

    const [articles, setArticles] = useState([]);

    const { topic_slug } = useParams();

    useEffect(() => {

        getArticles(topic_slug)
        .then(( {articles} ) => {
            setArticles(articles)


        })
        .catch(err => {})
    }, [topic_slug])

    
    return (
        <>
        <h2> - Articles - {topic_slug}</h2>
        <main className={styles.main}>
            {
                articles.map((article) => {
                    return (
                       <SingleArticle 
                       key={article.article_id}
                       article={article}
                       articles={articles} 
                       />
                    )
                })
            }
        </main>
    </>
    )
}

export default Articles;