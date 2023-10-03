import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/logo.png';
import umedi from '../../images/umedi.png';
import umedi2 from '../../images/umedi2.png';

import logoWhite from '../../images/logo-white.png';

const Header = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchFormOpen, setIsSearchBtn] = useState(false);
	const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
	const quikSearchClose = () => setIsSearchBtn(false);
	const [activeItem, setActiveItem] = useState(null);
	const [isMobileView, setIsMobileView] = useState(false);

	const toggleSubmenu = (item) => {
		setActiveItem(item === activeItem ? null : item);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleMenuLinkClick = () => {
		if (window.innerWidth <= 991) {
			setIsMenuOpen(false);
		}
	};

	const handleContactBtnClick = () => {
		setIsMenuOpen(false);
		// Implement the logic to toggle the contact sidebar here.
	};

	const handleMenuCloseClick = () => {
		setIsMenuOpen(false);
	};



	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth >= 768);
		};

		// Check the screen size on initial render and whenever the window is resized
		handleResize();

		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const menuItems = [
		{
			id: 'home',
			name: 'Home',
			linkName: '#',
		},
		{
			id: 'pages',
			name: 'Pages',
			linkName: '#',

			subItems: [
				{
					id: 'aboutus',
					displayName: 'About Us',
					linkName: 'about-us'
				},
				{
					id: 'team',
					displayName: 'Our Team',
					linkName: 'team'
				},
				{
					id: 'faq',
					displayName: "FAQ's",
					linkName: 'faq'
				},
				{
					id: 'booking',
					displayName: 'Booking',
					linkName: 'booking'
				},
				{
					id: 'error',
					displayName: 'Error 404',
					linkName: 'error-404'
				},
				{
					id: 'formLogin',
					displayName: 'Login / Register',
					linkName: 'form-login'
				},
			]
		},
		{
			id: 'services',
			name: 'Services',
			linkName: '',

			subItems: [
				{
					id: 'services',
					displayName: 'Service',
					linkName: 'services'
				},
				{
					id: 'serviceDetail',
					displayName: 'Service Detail',
					linkName: 'service-detail'
				},
			]
		},
		{
			id: 'blog',
			name: 'Blog',
			linkName: '#',

			subItems: [
				{
					id: 'blogGrid',
					displayName: 'Blogs',
					linkName: 'blog-grid'
				},
				{
					id: 'blogDetails',
					displayName: 'Blog Details',
					linkName: 'blog-details'
				},
			]
		},
		{
			id: 'contactUs',
			name: 'Contact Us',
			linkName: 'contact-us'
		}
	];

	return (
		<header className="header header-transparent rs-nav">
			<Sticky enabled={true} className="sticky-header navbar-expand-lg">
				<div className="menu-bar clearfix">
					<div className="container-fluid clearfix">
						<div className="menu-logo logo-dark">
							<Link to="/"><img src={umedi} alt="" /></Link>
							<Link to="/"><img src={umedi2} alt="" /></Link>
						</div>
					</div>
				</div>
			</Sticky>

			<div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
				<form>
					<input type="text" className="form-control" placeholder="Type to search" />
					<span><i className="ti-search"></i></span>
				</form>
				<span id="searchRemove" onClick={quikSearchClose}><i className="ti-close"></i></span>
			</div>

		</header>

	);
}

export default Header;