import  styled from 'styled-components'

export const MainContent = styled.div`
    margin-left: 50px;
    @media (max-width: 480px){
        margin-left: 15px;
    }
`
export const Input = styled.input`
    height: 38px;
    width: 400px;
    border:none;
    border-bottom: 1px solid #ddd;
    color: rgba(0,0,0,0.8);
    font-family: 'Montserrat', sans-serif;

    &:focus{
        outline: none;
    }
    @media (max-width: 480px){
        width: 200px;
        height:22px;
    }

`
export const Icon = styled.i`
    color: rgba(0,0,0,0.7)
`