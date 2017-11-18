import React, { Component } from 'react';
import { ParkAPI } from './parks_index';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem, Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
			<Navbar className="nav-flex">
			<Navbar.Brand className="nb-brand">
				<img className="d-inline-block align-top" src="../images/mountain_1.jpg" width="50" height="50" alt=""></img> 
        		<a href="/">ParkDash</a>
      		</Navbar.Brand>	
      		<Nav>        		
        		<NavDropdown title="Pick a Park" id="basic-nav-dropdown">
        			<div className="dropdown-overflow">
        			  	{
            			  ParkAPI.all().map(p => (
            			    <MenuItem><Link to={`/parks/${p.id}`}><p>{p.name}</p></Link></MenuItem>
            			    ))
            			  }  
            		</div>
        		</NavDropdown>
      		</Nav>
			</Navbar>		
	)}	

}
	
export default NavBar;

