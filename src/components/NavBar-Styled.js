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
    // border: 1px solid #333;
`;

export const LogoContainer = styled(Link) `
    font-size: 2rem;
    color: #eee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;

    svg {
        font-size: 4rem;
    }

    p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1;
        text-transform: uppercase;
        font-weight: bold;
        padding: 5px;
        color: #FCBAD3;
    }

    span {
        color: #00ADB5;
    }
`;

export const Menu = styled.ul `
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
`;

export const MenuItems = styled.li `
    list-style: none;
    font-size: 16px;
`;

export const MenuItemsLinks = styled(Link) `
    color: #EEEEEE;
    text-decoration: none;
`;