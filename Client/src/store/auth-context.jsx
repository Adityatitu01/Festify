import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [events, setEvents] = useState("")

  // Store token in both state and localStorage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token" , serverToken);
    setToken(serverToken);
  };

  // Sign out user by clearing token
  const signoutUser = () => {
    setToken(""); // Clear state
    localStorage.removeItem("token"); // Clear localStorage
  };


//JWT Authentication - to get the currently Logged in user data--------------------------------------------------------->


// const userAuthentication = async()=>{
//   try{
//    const response = await fetch('')
//   }
//   catch(error){
//     console.error("error in fetching user data ",error);
//   }
// }

// useEffect(()=>{
//   userAuthentication()
// },[])


//<---------------------------------to get the events data---------------------------------->
const getEvent = async () => {
  try {
    const response = await fetch('http://localhost:8000/showEvent', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      setEvents(data.message)
    } else {
      console.error("Response error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error in fetching events data:", error);
  }
};

useEffect(() => {
  getEvent();
}, []);



  return (
    <AuthContext.Provider value={{ token, storeTokenInLS, signoutUser,events}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


