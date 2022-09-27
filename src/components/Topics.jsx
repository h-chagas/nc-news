import { useEffect, useState } from "react";
import SingleTopic from "./SingleTopic";
import styles from '../styles/Topics.module.css'
import { getTopics } from "../utils/api";


const Topics = () => {

    const [topics, setTopics] = useState([]);

      useEffect(() => {
        getTopics()
        .then(( {topics} ) => {
            setTopics(topics);
        })
        .catch(err => {})
    }, [])

    return (
        <main>
            <h2 className={styles.h2}>Read articles by topic</h2>
            {
                topics.map((topic) => {
                    return (
                        <SingleTopic
                            key={topic.slug}  
                            topic={topic}
                        />
                    )
                })
            }
        </main>
    )
}

export default Topics;