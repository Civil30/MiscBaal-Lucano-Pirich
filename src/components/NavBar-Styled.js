import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div `
    width: 100%;
    background-color: #222831;
    height: 6rem;    
`;

export const Wrapper = styled.nav `
    width: 90%;
    max-width: 120rem;
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: auto;    
    
    
    @media (min-width: 478px)  {
    }

`;

export const LogoContainer = styled(Link) `
    font-size: 2rem;
    color: #eee;
    text-decoration: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    svg {
        font-size: 4rem;
        grid-column: 2 / 3;
        margin-bottom: 10px ;
    }

    p {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        /* line-height: 1; */
        text-transform: uppercase;
        font-weight: bold;
        color: #FCBAD3;
        margin: -2px;
    } 

    p:last-child {
        color: #00ADB5;
        grid-column: 3 / 4;
        grid-row: 1 / 2;
    }

    @media (min-width: 478px)  {
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        
        svg {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
            margin: 0;
        }

        p {
            grid-column: 2 / 3;    
            /* line-height: 1; */
            text-transform: uppercase;
            font-weight: bold;
            padding: 5px;
            color: #FCBAD3;
            margin-top: 9px;
        }
        p:last-child {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            margin-top: -9px;
            margin-left: 1px;
        }
    }
`;

export const Menu = styled.ul `
    display: none;
    
    @media (min-width: 478px)  {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
    }
`;

export const MenuItems = styled.li `
    list-style: none;
    font-size: 16px;
`;

export const MenuItemsLinks = styled(Link) `
    color: #EEEEEE;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: #eee;

    svg {
        cursor: pointer;
    }
    
    @media (min-width: 478px)  {
        display: none;
    }

`