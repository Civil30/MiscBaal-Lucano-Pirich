import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridContainer = styled.section`
    margin: 5rem auto;
    font-size: 25px;
    /* box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.1); */
    padding: 1rem;
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`
export const Img = styled.img`
    max-width: 100%;
    height: auto;
    /* width: 90%; */
`
export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    justify-content: space-between;
`

export const Title = styled.h1`
    
    text-transform: uppercase;
`
export const Price = styled.p`
    /* color: #00ADB5; */
    font-style: italic;
`
export const DetailWrapper = styled.div`
    grid-column: 1 / 3;
    border-top: 1px solid #e1e1e1;
    padding: 0 2rem 1rem;
    font-size: 20px;
`
export const Ul = styled.ul`
    margin-top: 8px;
    padding: 7px 0 0 10px;
    
    :nth-last-of-type(1) {
        border-top: 1px solid #ddd;
        max-width: fit-content;
    }
`

export const LiSmallSize = styled.li`
    font-size: 15px;

    :last-child {
        margin-bottom: 10px;
    }
`
export const TitleH3 = styled.h3`
    font-size: 20px;
    font-weight: 600;
    text-decoration: a;
    margin: 0;
`
export const SpanId = styled.span`
    color: #aaa;
    font-size: 15px;
`
export const BtnBuy = styled(Link)`
    width: 100%;
    color: #eee;
    border: none;
    font-size: 15px;
    font-weight: bold;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #00ADB5;
    transition: all .5s ease-out;
    opacity: ${( {showbtn} ) => showbtn ? "1" : "0"};
    /* display: ${( {showbtn} ) => showbtn ? "block" : "none"}; */
`