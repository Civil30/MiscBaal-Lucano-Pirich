import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
    padding-top: 3rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 70rem;
    width: 90%;
    margin: 0 auto;
`

export const ItemListContainer = styled.div`
    text-align: center;
    width: 100%;
`

export const ItemListInCart = styled.div`
    box-shadow: 0 2px 18px 2px rgba(0, 0, 0, .1);
    position: relative;
    margin: 25px 0;
    padding: 15px 0;

    svg {
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 10px;
        font-size: 3rem;
        color: #D72323;
        transition: color .3s ease;

        :hover {
            color: #810000;
        }
    }
`

export const ItemInfo = styled.div`
    font-size: 15px;

    p {
        line-height: 1;
    }

`
export const ImgContainer = styled.div`
    max-width: 20rem;
    height: auto;
    margin: 0 auto;

    img {
        max-width: 100%;
    }
`

export const Total = styled.p`
    font-size: 20px;
    border-top: 1px solid rgba(0, 0, 0, .5);
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    width: 100%;
    text-align: center;
    padding: 1rem;
`

export const BtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    width: 100%;
    gap: 2rem;
`

export const EmptyBtn = styled.button`
    cursor: pointer;
    width: 50%;
    height: 37px;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    background-color: #fff;
    color: #393E46;
    border-radius: 5px;
    border: 1px solid #393E46;
    transition: color .3s ease;

    :active,
    :hover {
        color: #222831;
    }
`

export const GoCheckout = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    background-color: #00adb5;
    color: #fff;
    padding: 1rem;
    width: 50%;
    border-radius: 5px;
    border: 1px solid #393E46;
    transition: color 0.3s ease;

    :active,
    :hover {
        color: #222831;
    }
`