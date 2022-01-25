import styled from "styled-components";

export const WrapperCards = styled.section`
    display: block;
    padding: 3rem;
    margin: 0 auto;
    
    @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
    }
`