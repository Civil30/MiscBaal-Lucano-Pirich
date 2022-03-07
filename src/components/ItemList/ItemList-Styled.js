import styled from "styled-components";


export const WrapperCards = styled.section`
    display: grid;
    overflow: hidden;
    margin: 3rem auto;
    max-width: 120rem;
    width: 95%;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`