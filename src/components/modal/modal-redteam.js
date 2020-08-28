import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

const ModalRedTeam = props => {
  const { className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  // console.log("modal", props.calendly)

  return (
    <div>
      {props.calendly ? (
        <a className="section-btn w-sm-block text-white" onClick={toggle}>
          <img className="img-fluid" alt="help" />
          Red Teaming
        </a>
      ) : (
        <a className="btn btn-primary text-white mt-3" onClick={toggle}>
          Avail Now
        </a>
      )}

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Red Teaming</ModalHeader>
        <ModalBody>
          <p>
            Our most comprehensive security assessment, combining penetration
            testing, application security testing, and social engineering
          </p>
          <iframe
            title="Avail Our Services"
            src=""
            width="100%"
            height="600"
            style={{ border: 'none' }}
          />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalRedTeam
