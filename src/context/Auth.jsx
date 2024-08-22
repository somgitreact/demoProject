import React, { createContext, useEffect, useState } from 'react'
import { allUser, loginList } from '../api/Apis';
import { useNavigate } from 'react-router-dom';


export const userContext = createContext();

const Auth = ({children}) => {
 const navigate = useNavigate();
   const [usersList, setUsersList]= useState([]);

        const [currentuser, setCurrentuser] = useState(() => {
            const savedUser = localStorage.getItem('currentUser');
            return savedUser ? JSON.parse(savedUser) : {};
          });
 const[users, setUsers] = useState([]);

        useEffect( function(){
            async function fetchusers(){
             const datalist = await loginList();
             setUsersList(datalist);
             setUsers(allUser);
            }
            
            fetchusers();
            
            },[]);


            useEffect(() => {
                if (currentuser && Object.keys(currentuser).length > 0) {
                  localStorage.setItem('currentUser', JSON.stringify(currentuser));
                } else {
                  localStorage.removeItem('currentUser');
                }
              }, [currentuser]);

            
             function Logindata(user, pass){
                const userauth = usersList.find((customer)=> customer.email == user && customer.password == pass );
                if(userauth){
                  setCurrentuser(userauth)
                 // console.log(userauth );
                 navigate(-1);
                }
                

            };

            function Logout(){
                setCurrentuser({});
    localStorage.removeItem('currentUser');
    window.location.reload();
            }



            
  return (
    <userContext.Provider value={{currentuser, Logindata, Logout, users}}>
        {children}
    </userContext.Provider>
  )
};






export default Auth