import styled from "styled-components";


export const ItemCountContainer = styled.div`
    margin: 0 auto;
    border-radius: 5px;
    width: 100%;
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
    font-style: italic;
`
export const QtyAndCartContainer = styled.div`
    
`

export const QtyControlsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-height: 4rem;
    font-size: 25px;
`

export const QtyControlsBtn = styled.button`
    cursor: pointer;
    border: none;
    width: 33px;
    height: 33px;
    margin: 0 2.5rem;
    color: #393E46;
    background-color: transparent;
    border-radius: 50%;
    font-weight: bold;
    font-size: 25px;
    transition: all 0.3s ease;

    :hover {
        background-color: #222831;
        color: white; 
    }
`

export const Qty = styled.p`
    font-size: 20px;
`

export const AddCartBtn = styled.button`
    width: 100%;
    cursor: pointer;
    color: #fff;
    border: 1px solid #222831;
    font-size: 15px;
    font-weight: bold;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #00ADB5;
    transition: color .3s ease;
    
    :active,
    :hover {
        color: #222831;
    }
`