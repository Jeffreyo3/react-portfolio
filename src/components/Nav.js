import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
`

const Li = styled.li`
    font-size: ${p => p.theme.fontsizes.fs_li};
`

export default function Nav () {

    return(
        <NavBar>
            <img src="www.google.com"  />
            <Ul>
                <Li>Home</Li>
                <Li>Projects</Li>
                <Li>Resume</Li>
                <Li>Contact</Li>
            </Ul>
        </NavBar>
    )
}