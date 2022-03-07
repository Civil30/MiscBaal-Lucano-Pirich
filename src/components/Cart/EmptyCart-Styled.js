import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    width: 90%;
    text-align: center;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 400;
`

export const GoProducts = styled(Link)`
    text-decoration: none;
    padding: 13px;
    background-color: #00adb5;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #222831;
    transition: color .3s ease;
    max-width: fit-content;

    :active,
    :hover {
        color: #222831;
    }
`