import React, { Component } from 'react'
import AddBookContainer from '../../containers/AddBookContainer'
import SearchBookContainer from '../../containers/SearchBookContainer'
import Modal from '../Modal'

import {
    MainContainer,
    Title,
    SearchContainer,
    AllBooksContainer,
    Table,
    TableHeading,
    TableData,
    TableRow,
    EditButton,
    DeleteButton,
    Content,
    ShowAllButton,
    Error,
    ButtonContainer,
} from './style'

class BookDetail extends Component {
    constructor(props){
        super(props)
        this.state ={
            openModalEdit: false,
            itemEdit:'',
            searching: false,
            searchArray: [],
            noSearchResult: false,
        }
    }

    handleEdit = (item) => {
        this.setState({
            itemEdit: item
        },()=>{
            this.setState({
                openModalEdit: true
            })
        })
        
    }

    handleCloseModal = () => {
        this.setState({
            openModalEdit: false
        })
    }

    handleDelete = (id) => {
        this.props.deletingBook(id)
    }

    handleSearch = (item) => {
        this.setState({
            searching: true,
            noSearchResult: false,
        },()=>{
            this.setState({
                searchArray : [...item]
            })
        })
    }

    handleShowAll = () => {
        this.setState({
            searching: false,
            noSearchResult: false,
        })
    }

    handleNoResult = () => {
        this.setState({
            noSearchResult: true,
        })
    }

    render() {
        const { books, updatingBook} = this.props
        const { openModalEdit, itemEdit, searching, searchArray, noSearchResult } = this.state

        let arr = searching ? searchArray : books

        return (
            <MainContainer>
                <Title onClick={this.handleShowAll}>Book List</Title> 
               <Content>
               <SearchContainer>
                    <AddBookContainer />
                        <SearchBookContainer searching={searching} onSearch={this.handleSearch} noResult={this.handleNoResult}/>
                    <ShowAllButton onClick={this.handleShowAll}>SHOW ALL</ShowAllButton>
               </SearchContainer>
                <Error noSearchResult={noSearchResult}>No Search Results Found</Error>
               <AllBooksContainer>
                    <Table >
                      <thead>
                            <TableRow>
                                <TableHeading> Name</TableHeading>
                                <TableHeading> Author</TableHeading>
                                <TableHeading> Genre </TableHeading>
                                <TableHeading> Count </TableHeading>
                                <TableHeading></TableHeading>
                            </TableRow>
                      </thead>
                      <tbody>
                          {
                              arr && arr.map((item)=> {
                                  return(
                                      <TableRow key={item.id}>
                                          <TableData>{item.bookName}</TableData>
                                          <TableData>{item.author}</TableData>
                                          <TableData>{item.genre}</TableData>
                                          <TableData>{item.numberOfCopies}</TableData>
                                          <TableData>
                                              <ButtonContainer>
                                              <EditButton onClick={()=>this.handleEdit(item)}>EDIT</EditButton>
                                              {openModalEdit && <Modal
                                                    add='false'
                                                    editItemData={itemEdit}
                                                    closeModal={this.handleCloseModal}
                                                    updatingBook={updatingBook}
                                                />}
                                              <DeleteButton onClick={()=>this.handleDelete(item.id)}>DELETE</DeleteButton>
                                              </ButtonContainer>
                                            </TableData>
                                      </TableRow>
                                  )
                              })
                          }
                      </tbody>
                  </Table>
               </AllBooksContainer>
               </Content>
            </MainContainer>
        )
    }
}

export default BookDetail