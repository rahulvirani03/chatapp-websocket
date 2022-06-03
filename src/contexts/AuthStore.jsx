import { api } from "@api";
import Landing from "@pages/Landing";
import { URL } from "@utils/constants";
import axios from "axios";
import react,{useEffect,useState} from "react";

export const AuthContext = react.createContext();

export default function AuthStore({children}) {
 
  const [currentUser,setCurrentUser] = useState();
  const [isLoggedIn,setIsLoggedIn]= useState(null);
  const [loading,setLoading]= useState(true);
    const getAuth = async() =>{
        const result = await api.post('/auth/token',{})
        console.log(result.data.isLoggedIn);
        setIsLoggedIn(result.data.isLoggedIn);  
        setCurrentUser(result.data.user);
        console.log("user set");
        setLoading(false)
    }
    useEffect(()=>{
            
           getAuth();
    },[isLoggedIn])
    const SignUpUser = async(username,email,password) =>{
    
        const result = await api.post('/auth/signup',{
            username,email,password
        })
        return result 
    }
    const LoginUser = async(username,password) =>{
        console.log(user);
        const result = await api.post('auth/login',{
            username,password
        })
        return result 
    }
    const user = {SignUpUser,isLoggedIn,LoginUser,currentUser}
  
    if(loading)return(<div> loading in auth store </div> )
    return(
        <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    )
}
