import styled from "styled-components";

export const GridContainer = styled.section`
    margin: 5rem auto;
    font-size: 25px;
    /* box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.1); */
    padding: 3rem;
    /* text-align: center; */
    
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