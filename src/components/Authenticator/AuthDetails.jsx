/* import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../../../firebase"

const AuthDetails = () => {
const [authUser, setAuthUser] = useState(null);

useEffect(()=> {
    const listen = onAuthStateChanged(auth, (user) => {
        if(user){
            setAuthUser(user)
            const uid = user.uid;
            console.log(user);
        } else {
            setAuthUser(null)
        }
    })


return () => {
    listen();
}

}, [])
const userSignOut = () => {
    signOut(auth).then(() => {
        console.log("sign out succesfully")
    })
    .catch((error) => {
        console.log(error)
    })
}

    return (
    <div>
        { authUser ? <><p>{`Signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
  )
}

export default AuthDetails */