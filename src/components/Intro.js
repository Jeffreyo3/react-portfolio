import React from 'react';
import styled from 'styled-components';
import headshot from '../images/headshot.png'

//////////// STYLED COMPONENTS /////////////
const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5.6rem 0;
    width: 95%;
`

const TitleH1 = styled.h1`
    font-size: ${p => p.theme.fontsizes.fs_title};
    color: ${p => p.theme.colors.c_p};
`

const Img = styled.img`
    border-radius: 49%;
    width: 25%;
    margin-right: 2rem;
`
//////////// END STYLED COMPONENTS /////////////


//////////// REACT COMPONENT /////////////
export default function Intro() {

    return (
        <HeaderDiv>
            <TitleH1>Hello, My name is Jeff and I’m a software Developer.</TitleH1>
            <Img src={headshot} alt="Jeff in black shirt smiling in front of a grey background."/>
        </HeaderDiv>
    )
}
//////////// END REACT COMPONENT /////////////