import React, { useState } from 'react'
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

export { LoadingModal }