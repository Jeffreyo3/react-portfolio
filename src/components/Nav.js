import React from 'react';
import styled from 'styled-components';

//////////// STYLED COMPONENTS /////////////
const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 3rem .5rem;
    border-bottom: 2px solid ${p => p.theme.colors.c_secondary};
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    max-width: 600px;
`

const Li = styled.li`
    font-size: ${p => p.theme.fontsizes.fs_li};
`

const Span = styled.span`
    color: ${p => p.theme.colors.c_tertiary};
    font-size: ${p => p.theme.fontsizes.fs_h};
`
//////////// END STYLED COMPONENTS /////////////


//////////// REACT COMPONENT /////////////
export default function Nav() {

    return (
        <NavBar>
            <Span>J|O</Span>
            <Ul>
                <Li>Home</Li>
                <Li>Projects</Li>
                <Li>Resume</Li>
                <Li>Contact</Li>
            </Ul>
        </NavBar>
    )
}
//////////// END REACT COMPONENT /////////////