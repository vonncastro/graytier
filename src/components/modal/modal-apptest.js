import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

const ModalApptest = props => {
  const { className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  // console.log("modal", props.calendly)

  return (
    <div>
      {props.calendly ? (
        <a className="section-btn w-sm-block text-white" onClick={toggle}>
          <img className="img-fluid" alt="help" />
          Application Testing
        </a>
      ) : (
        <a className="btn btn-primary text-white mt-3" onClick={toggle}>
          Avail Now
        </a>
      )}

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Application Testing</ModalHeader>
        <ModalBody>
          <p>
            Our security engineers will test vulnerabilities in your custom or
            off the shelf applications
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

export default ModalApptest
