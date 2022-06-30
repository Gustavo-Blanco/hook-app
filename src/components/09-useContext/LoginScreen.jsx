import { useContext } from "react"
import { UserContext } from "./UserContext"

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);
    const user = {
        id: 1,
        name: 'Gustavo Blanco',
        email: 'gblanco3@gmail.com'
    }
    return (
        <div>
            <h1>
                Login Screen
            </h1>
            <button 
                className="btn btn-primary"
                onClick={() => setUser(user)}>
                Login
            </button>
        </div>
    )
}
