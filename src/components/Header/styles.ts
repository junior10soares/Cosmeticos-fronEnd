import { styled } from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-around;
    background: linear-gradient(90deg, #8a63b8, #fca3cc, #ffffff);
    align-items: center;
    border-bottom: 1px solid #ffffff;
    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }
    span{
        position: relative;
        right: 1.581rem;
        bottom: 0.813rem;
        font-size: 0.844rem;
        font-weight: bold;
    }

`
