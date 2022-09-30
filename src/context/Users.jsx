import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const [loggedInUser, setLoggedInUser] = useState({
        username: 'hugo_c',
        name: 'Hugo Chagas',
        avatar_url: 'https://i.ibb.co/QJQ4H8M/hugo-100.jpg'
    })

    
    
    return (
        <UserContext.Provider
        value={ {loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn} }
        >
            {props.children}
        </UserContext.Provider>
    )
}