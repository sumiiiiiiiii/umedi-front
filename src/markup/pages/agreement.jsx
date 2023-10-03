import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from '../elements/modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import {Accordion} from 'react-bootstrap';


function Agreement(){
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
				<div className="page-content bg-white">
					<section className="section-area section-sp1 bg-white">
						<div className="container">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
								<h1 className="home-title">
									<div className="title-text">Agreement</div>
								</h1>
								<div className="clear" id="comment-list">
										<div className="input-area" id="comments">

											<div className="agree-button">
												<Button variant="primary" size="sm">
													<i className="fa fa-check-circle fa-lg"></i>
													<span className="agree-text">YES, I ALL AGREE</span>
												</Button>
											</div>

											<div className="container">
												<div className="row">
													<div className="col-lg-6">
														<Accordion defaultActiveKey="0" className="accordion agree-accordion1">
															<Accordion.Item eventKey="0">
																<Accordion.Header>
																	<i className="far fa-check-circle fa-lg"></i>
																	<span className="agree-text">I agree to the privacy policy.</span>
																</Accordion.Header>
																<Accordion.Body>
																	<p className="mb-0">
																	Article 1 Consent to Collection of Personal Information and Collection Method
&lt; The name of a company or website &gt; (&ldquo;URL&rdquo; hereinafter &ldquo;Website&rdquo;) shall establish a procedure for allowing customers to click the button &ldquo;Agree&rdquo; to the terms of use, collection of personal information, and details of personal information used. Customers shall be deemed to have agreed to the collection and use of their personal information by clicking the &ldquo;Agree&rdquo; button.
Article 2 Personal Information Items Collected and Purpose of Using Personal Information
&ldquo;Personal Information&rdquo; means information on living persons and refers to their names, resident registration numbers, or any other information that identifies such persons. Article 1 Consent to Collection of Personal Information and Collection Method
&lt; The name of a company or website &gt; (&ldquo;URL&rdquo; hereinafter &ldquo;Website&rdquo;) shall establish a procedure for allowing customers to click the button &ldquo;Agree&rdquo; to the terms of use, collection of personal information, and details of personal information used. Customers shall be deemed to have agreed to the collection and use of their personal information by clicking the &ldquo;Agree&rdquo; button.
Article 2 Personal Information Items Collected and Purpose of Using Personal Information
&ldquo;Personal Information&rdquo; means information on living persons and refers to their names, resident registration numbers, or any other information that identifies such persons.
																	</p>
																</Accordion.Body>
															</Accordion.Item>
															<Accordion.Item eventKey="1">
																<Accordion.Header>
																	<i className="far fa-check-circle fa-lg"></i>
																	<span className="agree-text">Agreement of Personal Information provision to the Third party.</span>
																</Accordion.Header>
																<Accordion.Body>
																	<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
																</Accordion.Body>
															</Accordion.Item>
														</Accordion>
													</div>
												</div>
											</div>


											<div className="continue-button">
												<Button variant="primary" size="sm">
													<span className="agree-text">CONTINUE</span>
												</Button>
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

export default Agreement;