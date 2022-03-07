import styled from "styled-components"
import { Link } from "react-router-dom"


export const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 95%;
    height: 45rem;
    border: 1px solid rgba(0,0,0,0.1);
    margin: 2rem auto;
    padding: 5px;
    text-decoration: none;
    color: #393E46;
    border-radius: 5px;
    text-align: center;
    position: relative;
    box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.1);
    overflow: hidden;

    :hover img{
        transform: scale(1.05);
    }
`

export const ImgContainer = styled.div`
    max-width: 35rem;
`

export const Img = styled.img`
    transition: transform 0.3s ease;
    width: 100%;
    height: auto;    
`

export const Title = styled.h3`
    font-size: 2rem;
    color: black;
    margin: 0;
`

export const Price = styled.p`
    font-size: 15px;
    margin: 0;
`