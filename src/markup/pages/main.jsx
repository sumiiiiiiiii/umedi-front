import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from '../elements/modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


function Main(){
	const [openModal, setOpenModal] = useState(true);
  const navigate = useNavigate();

	const handleModalClose = () => {
		setOpenModal(false);
	}

	const handleConditionClicked = () => {
		navigate("/condition");
	}

	return(
		<>
				<Modal show={openModal} handleClose={handleModalClose} message="Please enter your condition." okButton="Enter Now!"/>
				<div className="page-content bg-white">
					<section className="section-area section-sp1 bg-white">
						<div className="container">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
								<h1 className="home-title">
									<div className="title-text">Book Top Cigna</div>
									<div className="title-text">Doctors near Me</div>
								</h1>
								<div className="clear" id="comment-list">
										<div className="input-area" id="comments">

											<div className="input-container" id="respond">

												<InputGroup className="mb-1 input-group">
													<InputGroup.Text id="Condition"><i className="fa fa-search"></i></InputGroup.Text>
													<Form.Control
														className="input-label"
														placeholder="Condition, Procedure, Doctor.. "
														aria-label="Condition"
														aria-describedby="Condition"
														onClick={handleConditionClicked}
													/>
												</InputGroup>
												<InputGroup className="mb-1">
													<InputGroup.Text id="Hospital"><i className="fa fa-hospital"></i></InputGroup.Text>
													<Form.Control
														placeholder="Hospital"
														aria-label="Hospital"
														aria-describedby="Hospital"
													/>
												</InputGroup>
												<div className="booking-button">
													<Button variant="primary" size="sm">Booking Now!</Button>
												</div>
											</div>

											<div className="clearfix">
											</div>
										</div>
									</div>


							</div>
						</div>
					</section>

				</div>
		</>

	);
}

export default Main;