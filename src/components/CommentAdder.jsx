import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../context/Users';
import styles from '../styles/CommentAdder.module.css'


const CommentAdder = ({article_id, setCommentPosted}) => {

    const {isLoggedIn, loggedInUser} = useContext(UserContext);
    const [newComment, setNewComment] = useState('');
        
// console.log(loggedInUser, '<<<<< loggedInUser');

    const handleSubmit = (e, article_id) => {
        
        if (isLoggedIn) {

            e.preventDefault();
        axios
        .post(`https://be-nc-news-api-example.herokuapp.com/api/articles/${article_id}/comments`, 
        {
            body: newComment, 
            username: loggedInUser.username,
        }
        )
        .then(({data}) => {
            
            setNewComment((currentComments) => {
                return [...currentComments, data.comment]
            })
            setNewComment('');
            setCommentPosted(true);
            window.alert('Than you for your comment')
        })  

        } else {
            window.alert('Please log in first!')
        }

        
    
    }

    return (
        <form 
        className={styles.form}
        onSubmit={(e) => {handleSubmit(e, article_id)}}>

            <label
            className={styles.title}
            htmlFor='newComment'
            >
                Add a comment
            </label>

            <textarea
            required
            id='newComment'
            value={newComment}
            onChange={(e) => {setNewComment(e.target.value)}}
            className={styles.textarea}
            placeholder="Write here your comment..."
            >
            </textarea>

            <button className={styles.button}>Sumbit</button>
        </form>
    )
}

export default CommentAdder