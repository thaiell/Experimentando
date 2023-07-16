import { Modal } from "react-bootstrap"
import Button from "react-bootstrap/button"
import { useContext, useState } from "react"
import SignUp from "../components/Authenticator/SignUp"
import { AuthContext } from "../context/AuthContext"
import ReactTooltip from

const UserWidget = () => {
    const authUser = useContext(AuthContext);
    console.log(authUser);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>



            {!authUser ? <>

                <Button onClick={handleShow}>
                    <i className="fa-regular fa-user"></i>
                </Button>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <SignUp />
                </Modal>
            </>
                : 
<>



<Button data-tip={`Hola ${authUser.displayName}!`} data-for="tooltip">
            <i className="fa-regular fa-user"></i>
          </Button>
<ReactTooltip id="tooltip" place="bottom" effect="solid" />
</>
}        
</>
    )
}

export default UserWidget