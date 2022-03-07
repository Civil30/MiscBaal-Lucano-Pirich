import styled from "styled-components";


export const Container = styled.div`
    max-width: 50rem;
    width: 90%;
    margin: 0 auto;
    text-align: center;
`

export const Title = styled.h1`
    text-transform: uppercase;
    margin-top: 5rem;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem auto;
`

export const Input = styled.input`
    width: 100%;
    height: 4rem;
    outline: none;
    border: none;
    border-bottom: 2px solid #eee;
    transition: border-color .3s ease;
    font-size: 15px;

    :focus {
        border-color: #00ADB5;
    }
`

export const Errormsg = styled.p`
    font-size: 15px;
    color: tomato;
`

export const BtnForm = styled.button`
    cursor: pointer;
    padding: 1rem;
    margin-top: 3rem;
    text-transform: uppercase;
    font-size: 15px;
    border: 1px solid #333;
    border-radius: 5px;
    color: #fcbad3;
    background-color: #222831;
    transition: background-color 0.3s ease;

    :hover,
    :active {
        background-color: #393E46;
    }
`

export const Order = styled.p`
    font-size: 20px;
    color: #222831;
    font-weight: 600;
`