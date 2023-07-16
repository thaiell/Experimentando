import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../services/config"
import { toast } from "react-toastify"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import Modal from "react-bootstrap/modal"
import Button from "react-bootstrap/button"

const SignUp = () => {
  
const authUser = useContext(AuthContext)
console.log(authUser);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);

const signUp = (e) => {
    e.preventDefault();
    if(!displayName || !email || !password){
        setError("Complete todos los campos");
        return;
    }

createUserWithEmailAndPassword(auth, email, password)
    .then( () => {
        updateProfile(auth.currentUser, {
            displayName: displayName
        })
        .then(() => {
            toast.success("Su usuario se ha creado con exito")
        })
        .catch((error) => console.log(error))
    })
    .catch((error) => {
        setError("Ha habido un problema en la creacion del usuario, por favor intente de nuevo mas tarde")
        console.log(error)
    })
}

  
    return (
        <>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <form onSubmit={signUp}>

        <label htmlFor="displayName">Name: </label>
        <input type="text" value={displayName} placeholder="Enter your name" onChange={ (e) => setDisplayName(e.target.value)}/>


        <label htmlFor="email">Email: </label>
        <input type="text" value={email} placeholder="email" onChange={ (e) => setEmail(e.target.value)}/>


        <label htmlFor="password">Password: </label>
        <input type="text" value={password} placeholder="Enter your password" onChange={ (e) => setPassword(e.target.value)}/>

        <button type="submit">Sign Up</button>
    </form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </>
  )
}

export default SignUp
/* {error && <p style={{color:"red"}}> { error } </p>} */