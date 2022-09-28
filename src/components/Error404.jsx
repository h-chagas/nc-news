import errorImg from './images/error404img.jpg'
import styles from '../styles/Error404.module.css'

const Error404 = () => {

    return (
        <main>
            <img src={errorImg} alt="cat with sad face with error message" className={styles.img}/>
        </main>
    )
}

export default Error404;