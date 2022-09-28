import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://be-nc-news-api-example.herokuapp.com/api"
})

export const getArticles = (topic) => {
    //this topic above is getting the topic clicked in the button where there is to
    return newsApi
    .get('/articles', {params: {topic: topic}})
    // this params will add   ?topic=    plus the topic clicked
    .then((res) => {
        return res.data
    }
)}

export const getTopics = () => {
    return newsApi
    .get('/topics')
    .then((res) => {
        return res.data
    }
)}