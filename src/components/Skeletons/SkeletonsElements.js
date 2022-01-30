import styled, { keyframes } from "styled-components";


export const Card = styled.div`
    display: block;
    max-width: 25rem;
    width: 100%;
    min-height: 30rem;
    padding: 0rem;
    margin: 2rem auto;
    background-color: #eee;
    border-radius: 5px;
`

export const Img = styled.div`
    max-width: 500px;
    min-height: 300px;
    background-color: #eee;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        min-height: 500px;
        margin: 0 5rem 0 0;
    }
`

export const Title = styled.div`
    height: 30px;
    background-color: #ddd;
    border-radius: 5px;

`

export const Price = styled.div`
    height: 30px;
    background-color: #ddd;
    border-radius: 5px;

    width: 150px;
    flex: end;
`
export const Count = styled.div`
    background-color: #ddd;
    width: 90%;
    margin: 0 auto;
    min-height: 100px;
    border-radius: 5px;
`

export const GridContainer = styled.div`
    margin: 5rem auto;
    font-size: 25px;
    padding: 3rem;
    position: relative;
    overflow: hidden;
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`
export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    background-color: #eee;
`

export const TitleWrapper = styled.div`
    display: flex;
    gap: 5rem;
    flex-direction: column;
    justify-content: space-between;
`

/* animation skeleton */

const loading = keyframes`
    0% { transform: translateX(-150%) }
    /* 50% { transform: translateX(-60%) } */
    100% { transform: translateX(150%) }
`
export const ShimmerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${loading} 1s infinite;
`

export const Shimmers = styled.div`
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
    transform: skewX(-20deg);
`