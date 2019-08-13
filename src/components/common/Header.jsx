import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/Rick_and_Morty.svg';
import { FaSignOutAlt } from "react-icons/fa";

export const Header = props => {

    const [ user, setUser ] = useState({})

    useEffect(() => {
      if (localStorage.getItem('user')) {
        setUser(JSON.parse(localStorage.getItem('user')));
      }
      
    }, []);

    const styleActiveItem = {
      fontWeight: 'bold'
    }

    return(
        <Fragment>
           <header>
                <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm border-bottom ">
                    <Container>                    
                     <Link to="/dashboard">
                       <img
                         alt=""
                         src={logo}                       
                         className="d-inline-block align-top logo "
                       />
                     </Link>

                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="mr-auto ml-4">

                         <NavLink  className="nav-link" activeStyle={styleActiveItem} exact to="/dashboard">Home</NavLink>
                         <NavLink  className="nav-link" activeStyle={styleActiveItem} exact to="/dashboard/characters">Character</NavLink>
                         <NavLink  className="nav-link" activeStyle={styleActiveItem} exact to="/dashboard/episodes">Episodes</NavLink>
                         <NavLink  className="nav-link" activeStyle={styleActiveItem} exact to="/dashboard/similar-tastes">Similar Tastes</NavLink>

                       </Nav>
                       
                       <Navbar.Text>
                         <Dropdown>
                           <Dropdown.Toggle variant="default" id="dropdown-basic">
                             {user && user.username}
                           </Dropdown.Toggle>

                           <Dropdown.Menu>                             
                              <Dropdown.Divider />
                              <Dropdown.Item href="/"><FaSignOutAlt /> Salir</Dropdown.Item>
                           </Dropdown.Menu>
                         </Dropdown>
                       </Navbar.Text>


                     </Navbar.Collapse>
                    </Container>
                </Navbar>

           </header>
        </Fragment>
    );
}
