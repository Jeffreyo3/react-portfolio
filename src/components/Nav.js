import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
`

export default function Nav () {

    return(
        <NavBar>
            <img src="www.google.com"  />
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </NavBar>
    )
}