import styled from "styled-components";

export const WrapperCards = styled.section`
    display: grid;
    margin: 3rem auto;
    max-width: 120rem;
    width: 90%;
    place-items: center;
    grid-template-columns: 1fr;

    
    @media (min-width: 468px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
        place-items: center;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        place-items: center;

    }
`