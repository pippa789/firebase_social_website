import React from 'react'

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



const Nav = styled.div`
display:flex;
flex-direction: flex-row;
justify-content: flex-end;
margin-top: 0px;
padding-bottom: 10px;
align-items: center;
justify-content: flex-end;
height: 20px;
width: 100%;
// background-color: red;
box-shadow: 0px 1px   #dbdbdb;
`;
function NavBar() {
    
    const LinkStyle = ({isActive}) => {
        return {
    // fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'white' : 'black',
        listStyle: 'none',
        textDecoration: 'none',
        padding:'5px',
        color: '#666',
        fontSize:'8px',
        fontWeight:'800'
        
        }
    }  
   
    const navStyle = { 
    display:"flex",
    flexDirection: "flex-row",
    alignItems: 'center',
    marginRight:' 110px',
    padding: '10px',
    margin: "0px",
    listStyle: "none",
   };
  
  return (
    <Nav>
        <ul style={navStyle}>
            <li>
            <NavLink style={LinkStyle}  to="/">Home</NavLink>
            </li>
        
            <li>
                <NavLink style={LinkStyle} to="/About">About</NavLink>
            </li>    
        </ul>
    </Nav> 
      
  )
  }
  export default NavBar