import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/CommentsList.module.css'
import { showCommentsByArticle } from '../utils/api';
import Error404 from './Error404';
import SingleComment from './SingleComment';


const CommentsList = () => {

    const [comments, setComments] = useState([])
    const [error, setError] = useState(null);

   const { article_id } = useParams();


    useEffect(() => {
        showCommentsByArticle(article_id)
        .then((data) => {
            setComments(data.comments)
        })
        .catch((err) => {
            setError(err);
         });
    }, [article_id])

    if (error) {
        return <Error404 />;
     }

    return (
        <>
        <h3>Comments</h3>
        <ol className={styles.ul}>
            {
                comments.map((comment) => {
                    return (
                        <SingleComment comment={comment}/>
                    )
                })
            }
        </ol>
        </>
    )

}

export default CommentsList;