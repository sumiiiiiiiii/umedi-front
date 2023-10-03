import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from '../elements/modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Chip from '@mui/material/Chip';
import { useNavigate } from "react-router-dom";
import {Accordion} from 'react-bootstrap';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function Schedule(){
  const [value, setValue] = useState(dayjs('2022-04-17'));
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
									<div className="title-text">Appointment</div>
								</h1>
								<div className="clear" id="comment-list">
										<div className="input-area" id="comments">

											<div className="container">
												<div className="row">
													<div className="col-lg-6">
														<Accordion defaultActiveKey="0" className="accordion schedule-accordion1">
															<Accordion.Item eventKey="0">
																<Accordion.Header>
																	<i className="far fa-calendar fa-lg"></i>
																	<span className="agree-text">Date</span>
																</Accordion.Header>
																<Accordion.Body>
																	<LocalizationProvider dateAdapter={AdapterDayjs}>
																		<DateCalendar sx={{width: 'auto'}}value={value} onChange={(newValue) => setValue(newValue)} />
																	</LocalizationProvider>
																</Accordion.Body>
															</Accordion.Item>
															<Accordion.Item eventKey="1">
																<Accordion.Header>
																	<i className="far fa-clock fa-lg"></i>
																	<span className="agree-text">Time</span>																</Accordion.Header>
																<Accordion.Body>
																	<div className="time-title">Morning Slots</div>
																	<div className="slots">
																		<Chip label="AM 9:00" variant="outlined" onClick={() => {}} />
																		<Chip label="AM 9:30" variant="outlined" onClick={() => {}} />
																		<Chip label="AM 10:00" variant="outlined" onClick={() => {}} />
																		<Chip label="AM 10:30" variant="outlined" onClick={() => {}} />
																		<Chip label="AM 11:00" variant="outlined" onClick={() => {}} />
																		<Chip label="AM 11:30" variant="outlined" onClick={() => {}} />
																	</div>
																	<div className="time-title">Afternoon Slots</div>
																	<div className="slots">
																		<Chip label="PM 12:00" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 12:30" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 1:00" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 1:30" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 2:00" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 2:30" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 3:00" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 3:30" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 4:00" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 4:30" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 5:00" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 5:30" variant="outlined" onClick={() => {}} />
																		<Chip label="PM 6:00" variant="outlined" onClick={() => {}} />
																	</div>
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

export default Schedule;