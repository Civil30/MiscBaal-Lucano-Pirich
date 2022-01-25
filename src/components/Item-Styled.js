import styled from "styled-components"
// colores {
//     gris oscuro: #222831
//     gris claro: #393E46
//     celeste: #00ADB5
//     blanca: #eee
// }

export const Card = styled.a`
    display: block;

    width: 25rem;
    border: 1px solid rgba(256, 186, 211, 0.4);
    padding: 0rem;
    margin: 2rem auto;
    text-decoration: none;
    color: #393E46;
    border-radius: 5px;
    text-align: center;
    position: relative;
    box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.1);

    :hover img{
        transform: scale(1.1);
    }
`

export const Id = styled.span`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 12px;
`

export const Img = styled.img`
    transition: transform 0.3s ease;
    width: 100%;
    object-fit: none;
    height: auto;    
`

export const Title = styled.h3`
    font-size: 2rem;
    color: black;
`