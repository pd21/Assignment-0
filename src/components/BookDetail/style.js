import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
`
export const Content = styled.div`
   max-width: 1150px;
   margin: 0 auto;
`

export const Title = styled.div`
    color: #2574a9;
    font-size: 38px;
    font-weigh: bold;
    text-align: center;
    margin: 20px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 480px){
        font-size: 24px;
    }
`
export const SearchContainer = styled.div`
    display:flex;
    border:1px solid rgba(0,0,0,0.2);
    padding: 20px;
    @media (max-width: 480px){
        padding: 2px;
        border: none;
    }
`

export const AllBooksContainer = styled.div`
    margin-top: 40px;
`

export const Table = styled.table`
   width: 100%; 
   font-family: 'Montserrat', sans-serif;
   border-collapse: collapse;
`
export const TableHeading = styled.th`
    background: #2574a9;
    padding: 10px 40px;
    color: #fff;
    width: 200px;
    @media (max-width: 480px){
        padding:5px;
    }
`
export const TableData = styled.td`
    background: #fff;
    color: #2574a9;
    padding:10px 20px;
    border: 1px solid #ddd;
    width: 200px;

    @media (max-width: 768px){
        padding:10px;
    }
     @media (max-width: 480px){
        padding:5px;
    }
`
export const TableRow = styled.tr`
`
export const EditButton = styled.button`
    background: #3fc380;
    border:none;
    color:#fff;
    padding:4px 10px;
    border-radius: 4px;
    cursor: pointer;

   
    @media (max-width: 768px){
        padding:4px;
    }
    @media (max-width: 480px){
        padding:4px;
    }
    
`

export const DeleteButton = styled(EditButton)`
    margin-left: 15px;
    background: #f1828d;
   
    @media (max-width: 768px){
        margin-left: 5px;
    }
     @media (max-width: 480px){
        margin-left: 0px;
    }
`
export const ShowAllButton = styled.button`
    background: #2574a9;
    border:none;
    color:#fff;
    padding:10px 20px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    margin-left: 50px;
    @media (max-width: 480px){
        padding:5px;
        font-size: 10px;
        margin-left:15px;
    }
`

export const Error = styled.div`
    margin-top: 5px;
    color: red;
    font-size: 10px;
    visibility: ${props => props.noSearchResult ? 'visible':'hidden'};
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 480px){
        flex-direction: column;
    }
`