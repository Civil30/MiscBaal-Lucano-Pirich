import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div `
    width: 100%;
    background-color: #222831;
    height: 6rem;
    /* padding-top: 1px;   */
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
    /* padding-top: 1px; */

    svg {
        font-size: 4rem;
        grid-column: 2 / 3;
        margin-bottom: 6px ;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 6rem;
    transition: left 0.2s ease;
    left: ${({ open }) => open ? "0" : "-100%"};
    background-color: rgba(34,40,49,0.9);
    width: 100%;
    z-index: 99;
    margin: 0;
    padding: 2rem;
    height: 100%;
    
    @media (min-width: 478px) {
        position: unset;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        max-width: 70%;
        padding: 1rem;
    }
`;

export const MenuItems = styled.li `
    list-style: none;
    font-size: 16px;
`;

export const MenuItemsLinks = styled(Link) `
    display: block;
    color: #EEEEEE;
    text-decoration: none;
    width: 100%;
    padding: 2rem;
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