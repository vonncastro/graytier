import React, { useState } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'

const JobLocations = props => {
  const { className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button className="modal-button" onClick={toggle}>
        View Job Openings
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody className="mt-2">
          <iframe
            title="Job Postings"
            id="BrzyHr_iframe"
            width="610"
            frameborder="0"
            scrolling="no"
            onload="window.scrollTo(0,0)"
            allow="microphone; camera"
            src="https://gray-tier-technologies.breezy.hr/embed/positions?bzsrc=true&amp;include_filters=true&amp;link_external=true&amp;no_pos_msg=true&amp;p=https://www.graytier.com/careers/job-postings/"
            height="350"
          />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default JobLocations
