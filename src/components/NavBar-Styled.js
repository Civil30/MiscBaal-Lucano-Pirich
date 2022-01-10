import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    background-color: #222831;
    height: 6rem;    
`;

export const Wrapper = styled.div `
    width: 100%;
    max-width: 100rem;
    display: flex;
    justify-content: space-between;
    height: 100%;
    // border: 1px solid #333;
    margin: auto;
`;

export const LogoContainer = styled.div `
    font-size: 2rem;
    color: #eee;
    display: flex;
    justify-content: flex-start;
    align-items: center;

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

export const MenuItemsLinks = styled.a `
    color: #EEEEEE;
    text-decoration: none;
`;