import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import itp from '../../images/itp-chart.png'

const ModalITP = props => {
  const { className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  // console.log("modal", props.calendly)

  return (
    <div>
      {props.calendly ? (
        <a className="section-btn w-sm-block text-white" onClick={toggle}>
          <img className="img-fluid" alt="help" />
          Insider Threat Program
        </a>
      ) : (
        <a className="btn btn-primary text-white mt-3" onClick={toggle}>
          Avail Now
        </a>
      )}

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Insider Threat Program</ModalHeader>
        <ModalBody>
          <p>
            We assist organizations in achieving a reduced level of risk
            relative to the potential harm and damages that could be caused by
            your trusted insiders through our training and awareness services.
            Insider threats and their associated damages to their organizations
            are largely due to unintentional insider actions. Employee’s
            unintentional actions that cause damage to their employer are
            generally due to an unawareness or lack of knowledge of the current
            and ever evolving threat landscape. However, a simplistic approach
            focusing on creating a security conscientious culture within your
            organization is our mission. Our training addresses note only the
            unintentional insider actions that may cause damage to your
            organization, but also include awareness training that is
            customizable to your organization’s relevant external threats.
          </p>
          <p>
            Training sessions are uniquely created for each individual
            organization via a tiered approach. We understand each organization
            has its own culture, operational process, and specific mission, so
            we tailor our training services to the organization itself with
            relevant subject matter. Training sessions are tiered to accommodate
            your organization’s workforce by conducting several blocks of
            instruction to each level of employee (general employee workforce,
            management, and leadership tiers).
          </p>
          <p>
            Our approach encompasses a team of insider threat (InT) experts that
            will review your organization and its relative threats to tailor a
            training program that is right for you. Our team compiles relevant
            statistical data and current threat trends that are provided within
            instructional blocks designed to maximize employee participation,
            and result in a more security conscious climate and cultures.
            Employee awareness and a security conscious culture will greatly
            assist in reducing threats for your organization.
          </p>
          <img
            src={itp}
            alt="Penetration Testing"
            className="img-fluid"
            width="100%"
          />
          <iframe
            title="Avail Our Services"
            src=""
            width="100%"
            height="100"
            style={{ border: 'none' }}
          />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ModalITP
