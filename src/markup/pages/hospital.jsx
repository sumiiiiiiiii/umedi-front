import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Elements
import MainBannerSection from "../elements/main-banner";
import AboutSection from "../elements/about";
import WorkSection from "../elements/work";
import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/latest-news-slider";
import CommentRespond from "../elements/comment-respond";

import bnrImg1 from "../../images/banner/img1.jpg";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputAdornment from '@mui/material/InputAdornment';
import teamMember1 from '../../images/team/member1.jpg';
import teamMember2 from '../../images/team/member2.jpg';
import teamMember3 from '../../images/team/member3.jpg';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useParams  } from 'react-router-dom';
import { HOSPITAL_LIST, LOCATION_LIST } from '../const/const';
import { Badge } from 'react-bootstrap';

const teamMembers = [
	{
		name: 'SCH Hospital',
		specialization: 'General Hospital | Yongsan, Seoul',
		image: teamMember1
	},
	{
		name: 'LOHAS',
		specialization: 'Family Medinice | Gangnam, Seoul',
		image: teamMember2
	},
	{
		name: 'SCH Hospital',
		specialization: 'Family Medinice | Gangnam, Seoul',
		image: teamMember3
	},
];

function Hospital(){
  const params = useParams();
	const [condition, setCondition] = useState("");
  const [value, setValue] = useState('');
	const [hospitalList, setHospitalList] = useState(HOSPITAL_LIST);
	const [selectedLocation, setSelectedLocation] = useState("");
	const [isMatched, setIsMatched] = useState(true);

	useEffect(() => {
		if (params?.condition) {
			setCondition(params?.condition);
		}
	}, []);

	useEffect(() => {
		setIsMatched(hospitalList.length !== 0);
	}, [hospitalList]);


	const handleInputValueChanged = (e) => {
		const input = e.target.value;
		setValue(input);
		setHospitalList(HOSPITAL_LIST.filter(hospital => hospital.name.toLowerCase().includes(input)));
	}

	const removeInputValue = () => {
		setValue("");
		setHospitalList(HOSPITAL_LIST);
	}

	const handleLocationChanged = (e) => {
		const selected = e.target.value;

		if (selected === selectedLocation) {
			setSelectedLocation("");
		} else {
			setSelectedLocation(selected);
		}
		setHospitalList(HOSPITAL_LIST.filter(hospital => hospital.location.startsWith(selected)));
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
									<div className="title-text">Select the Hospital </div>
								</h1>

								<div className="clear" id="select-wrap">
									<TextField
										id="input-with-icon-textfield"
										variant="outlined"
										fullWidth
										sx={{
											padding: '5px 15px'
										}}
										placeholder="Hospital"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start" sx={{ paddingLeft: '10px' }}>
													<i className="fa fa-hospital"></i>
												</InputAdornment>
											),
											endAdornment: (
												<InputAdornment position="end" sx={{ paddingRight: '10px' }} onClick={removeInputValue}>
													<i className="fa fa-times"></i>
												</InputAdornment>
											),
										}}
										value={value}
										onChange={handleInputValueChanged}
									/>
									<div className="hospital-filter">
										<Chip label={condition} variant="outlined" onDelete={() => {}} />
										<Select
											labelId="location-select"
											id="location-select"
											value={selectedLocation}
											onChange={handleLocationChanged}
											displayEmpty
											sx={{
										    alignItems: "center",
												height: "32px",
												borderRadius: "16px"
											}}
										>
											<MenuItem value="" disabled>
												<div><i className="fa fa-filter"></i> Location</div>
											</MenuItem>
											{
												LOCATION_LIST.map(location => (
												<MenuItem value={location.value} key={location.value}>
													<div>
													{
														selectedLocation && location.value === selectedLocation && <i className="fa fa-check"></i>
													} {location.label}
													</div>
												</MenuItem>
												))
											}
										</Select>

									</div>
								</div>

								<section className="section-area">
									<div className="container">
										<div className="row justify-content-center">
											{isMatched && hospitalList.map((hospital, index) => (
												<div key={index} className="col-lg-4 col-sm-6 mb-30">
													<div className="hospital-wrap">
														<div className="hospital-row">
															<div className="hospital-media">
																<img src={teamMembers[0].image} alt={teamMembers[0].name} />
															</div>
															<div className="hospital-info">
																<div className="hospital-info-content">
																	<span className="title">{hospital.name}</span>
																	<span className="text-secondary">{hospital.category}</span>
																	<span className="text-secondary">{hospital.location}</span>
																</div>
															</div>
														</div>
														<div className="hospital-badge">
															<Badge bg="primary">Select</Badge>
														</div>
													</div>
												</div>
											))}
										</div>
										{
											!isMatched && (
											<div className="error-404">
												<div className="inner-content">
													<h2 className="error-title"><span></span></h2>
													<p>Sorry, No Results.</p>
													<div className="clearfix">
													</div>
												</div>
											</div>
											)
										}
									</div>
								</section>

						</div>
					</div>
				</section>

			</div>
		</>

	);
}

export default Hospital;