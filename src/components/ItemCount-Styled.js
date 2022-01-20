import styled from "styled-components";

export const ItemCountContainer = styled.div`
    margin: 0 auto;
    border: 1px solid #333;
    box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.1);
    border-radius: 5px;
    max-width: 25rem;
    height: 30rem;
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
    max-height: 3rem;
    font-size: px;
`
export const QtyControlsBtn = styled.button`
    border: none;
    margin: 0 1rem;
    color: #00ADB5;
    cursor: pointer;
    background-color: transparent;
    /* font-weight: bold; */
    font-size: 20px;
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
    /* box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.1); */


    :active {
        background-color: #222831;
    }
`
export const AddCartBtnDisabled = styled.button`
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
    background-color: red;
    transition: background-color .3s ease-out;
    /* box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.1); */


    :active {
        background-color: #222831;
    }
`