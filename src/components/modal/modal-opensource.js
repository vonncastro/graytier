import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

const ModalOpensource = props => {
  const { className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  // console.log("modal", props.calendly)

  return (
    <div>
      {props.calendly ? (
        <a className="section-btn w-sm-block text-white" onClick={toggle}>
          <img className="img-fluid" alt="help" />
          Open Source Intelligence
        </a>
      ) : (
        <a className="btn btn-primary text-white mt-3" onClick={toggle}>
          Avail Now
        </a>
      )}

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Open Source Intelligence</ModalHeader>
        <ModalBody>
          <p>
            Open-source intelligence (OSINT) is intelligence collected from
            publicly available sources
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

export default ModalOpensource
