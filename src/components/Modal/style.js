import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left:0px;
    font-family: 'Montserrat', sans-serif;
    background: rgba(0,0,0,0.4);
`
export const ModalBox = styled.div`
    width: 350px;
    height: 430px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 20px;
`
export const Input = styled.input`
    margin-bottom:15px;
    display: block;
    width: 100%;
    padding: 8px;
    margin-top:10px;
`
export const Title= styled.div`
  margin-bottom: 20px;
  color:#2574a9;
`
export const Button = styled.button`
    padding: 10px;
    background: teal;
    border: none;
    color: #fff;
    cursor: pointer;
`
export const Label = styled.label`
    color: #2574a9;
`
export const Icon = styled.i`
    position: absolute;
    right: 20px;
    top: 20px;
    color: #f1828d;
    cursor: pointer;
`