import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import SingleUsername from "./SingleUsername";
import styles from '../styles/LoginPage.module.css'

const LoginPage = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        getUsers()
        .then(( {users} ) => {
            setUsers(users)
            setIsLoading(false)
        })
        .catch(err => {})
    }, [])

    if (isLoading) {
        return <p>Loading</p>
    }


    return (
        <main>
            <h2 className={styles.h2}>Please select your username</h2>
            <div className={styles.userCardsDiv}>
            {
                users.map((user) => {
                    return (
                        <ol>
                            <SingleUsername
                            key={user.username}
                            user={user} 
                            />
                        </ol>
                    )
                })
            }
            </div>
        </main>
    )

}

export default LoginPage;