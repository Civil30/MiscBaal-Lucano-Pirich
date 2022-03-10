import { Link } from "react-router-dom";
import styled from "styled-components";


export const GridContainer = styled.section`
    margin: 5rem auto;
    font-size: 25px;
    padding: 1rem;
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`

export const Img = styled.img`
    max-width: 100%;
    height: auto;
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
    justify-content: space-around;
    height: 100%;
`

export const Title = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 29px;
`

export const Price = styled.p`
    text-align: center;
`

export const WrapperBtns = styled.div`
    max-width: 50rem;
    width: 100%;
    margin: 0 auto; 
`

export const BtnsContainer = styled.div`
    display: flex;
    visibility: ${({ $showbtn }) => $showbtn ? "visible" : "hidden"};
    height: ${({ $showbtn }) => $showbtn ? "auto" : "0"};
    width: 100%;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
    opacity: ${({ $showbtn }) => $showbtn ? "1" : "0"};
    transition: opacity .5s ease-out;
`

export const BtnBuy = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    color: ${({ $cart }) => $cart ? "#fff" : "#00ADB5" };
    border: 1px solid #222831;
    font-size: 14px;
    font-weight: bold;
    margin-top: 1rem;
    padding: 10.5px 5px;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: ${({ $cart }) => $cart ? "#393E46" : "#fff" };
    
    :active,
    :hover {
        background-color: ${({ $cart }) => $cart ? "#222831" : "#eee" };
    }
`

export const DetailWrapper = styled.div`
    grid-column: 1 / 3;
    border-top: 1px solid #e1e1e1;
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
    margin: 0;
`

export const SpanId = styled.span`
    color: #aaa;
    font-size: 15px;
`

export const PicturesContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
        flex-direction: column;
    }
`

export const ImgWrapper = styled.div`
    max-width: 80%;
    margin: auto;
`

export const ListImgWrapper = styled.div`
    display: flex;
    max-width: 100%;

    img {
        max-width: 100%;
        height: auto;
    }
`

export const MiniImgWrapper = styled.div`
    width: 100%;
    cursor: pointer;
`