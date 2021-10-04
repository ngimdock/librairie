import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Modal, Button, Spinner} from 'react-bootstrap'

const LoadingModal = ({ show }) => {
    return (
        <Modal show={show} onHide={false} size="sm" centered className="loadingModal">
            <Modal.Body>
                <Spinner animation="border" variant="info" />
            </Modal.Body>
        </Modal>
    )
    
}

const ConfirmResetPasswordModal = ({ show, onHide }) => {

    const [goLogin, setGoLogin] = useState(false)

    const handleClick = () => {
        onHide()
        setGoLogin(true)
    }

    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
              <Modal.Title>Reinitialiser le mot de passe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                un mail viens d'être envoyé, consultez votre boite 
                mail pour changer votre mot de passe puis utilisez le pour vous connecter
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={ handleClick }>
                ok
              </Button>
            </Modal.Footer>

            { goLogin && <Redirect to="/login" /> }
       </Modal>
    )
}

export { LoadingModal, ConfirmResetPasswordModal }