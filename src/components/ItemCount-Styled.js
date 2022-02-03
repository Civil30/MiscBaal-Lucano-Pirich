import styled from "styled-components";

export const ItemCountContainer = styled.div`
    margin: 0 auto;
    border-radius: 5px;
    width: 100%;
    padding: 1rem;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ItemInfo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`

export const ItemName = styled.h2`
    margin: 0;
    color: #393E46;
`
export const ItemStock = styled.p`
    display: flex;
    justify-content: flex-end;
`
export const QtyAndCartContainer = styled.div`
    
`

export const QtyControlsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #393E46;
    border-radius: 5px;
    width: 100%;
    max-height: 4rem;
    font-size: 25px;
`
export const QtyControlsBtn = styled.button`
    border: none;
    width: 35px;
    height: 35px;
    margin: 0 1rem;
    color: #00ADB5;
    cursor: pointer;
    background-color: #eee;
    border-radius: 50%;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    transition: all 0.3s ease;

    :hover {
        background-color: #6A2C70;
        color: white; 
    }
`

export const Qty = styled.p`

`
export const AddCartBtn = styled.button`
    width: 100%;
    cursor: pointer;
    color: #eee;
    border: none;
    font-size: 15px;
    font-weight: bold;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #00ADB5;
    transition: background-color .3s ease-out;
    
    :active {
        background-color: #222831;
    }

    /* @media (min-width: 478px) {
        max-width: %;
    } */
`