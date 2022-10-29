import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const LogoEffect = keyframes`
 0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
    }
`;

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background: ${({ blackHeader }) =>
      blackHeader ? '#141414' : 'transparent'};
    margin-top: -80px ;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    transition: 1s;
   
`;

export const LinkHome = styled(Link)`
        font-family: 'Montserrat', sans-serif;
        color: #FFF;
        font-size: 2rem;
        position: relative;
        text-decoration:none;
        display:block;

&::after{ 
    content: '';
    position: absolute;
    bottom: -.5rem;
    left:50%;
    width: 0;
    height: 0.2rem;
    background: #fff;
    transition: all 200ms ease-in-out;
}
&:hover::after{
    left: 25%;
    width: 50%;
}
`;

export const NavLogo = styled.h1`
    font-weight: normal;
    width: 80px;
    color: white;
    position: relative;
    text-transform: uppercase;
    font-size: 2.5rem;
    letter-spacing: 4px;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255,255,255,0);
    font-family: 'Lobster', cursive;
    text-decoration: none;
    animation: ${LogoEffect} 6s linear infinite;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    list-style    : none;
    text-align: center;

    svg{
        color: #FFF;
        font-size: 2.4rem;
    }
`;

export const SocialMedia = styled.a`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    display: flex;
    font-size:1.2rem;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

   
  
`;
