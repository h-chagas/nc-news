import axios from "axios";
import { useEffect } from "react";
import SingleArticle from "./SingleArticle";
import styles from '../styles/Articles.module.css'

const Articles = ( {articles, setArticles} ) => {

    

    useEffect(() => {
        axios
        .get('https://be-nc-news-api-example.herokuapp.com/api/articles')
        .then(( {data} ) => {
            setArticles(data.articles)

        })
        .catch(err => {})
    })

    
    return (
        <main className={styles.main}>
            {
                articles.map((article) => {
                    return (
                       <SingleArticle key={article.article_id}
                       article={article}
                       articles={articles} 
                       />
                    )
                })
            }

            
        </main>
    )
}

export default Articles;