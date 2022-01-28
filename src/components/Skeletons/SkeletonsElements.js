import styled from "styled-components";


export const Card = styled.div`
    display: block;
    max-width: 25rem;
    min-height: 30rem;
    padding: 0rem;
    margin: 2rem auto;
    background-color: #eee;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 2px rgba(0,0,0,0.1);
`

export const Img = styled.div`
    max-width: 500px;
    max-height: 500px;
    min-width: 300px;
    min-height: 300px;
    background-color: #eee;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        min-height: 500px;
        margin-right: 5rem;
    }
`

export const Title = styled.div`
    height: 30px;
    background-color: #eee;
`

export const Price = styled.div`
    height: 30px;
    background-color: #eee;
    width: 150px;
    flex: end;
`
export const Count = styled.div`
    background-color: #eee;
    height: 100px
`

export const GridContainer = styled.div`
    margin: 5rem auto;
    font-size: 25px;
    padding: 3rem;
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`
export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-between;
`