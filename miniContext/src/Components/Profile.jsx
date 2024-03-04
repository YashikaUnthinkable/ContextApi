import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return  <h1> Not Logged in</h1>
    else{
        return (
            <div>
              {user.userName}
            </div>
          )
    }
 
}

export default Profile
