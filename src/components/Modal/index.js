import React, { Component } from 'react'
import uuid from 'react-uuid'

import { 
    ModalContainer,
    ModalBox,
    Input,
    Title,
    Button,
    Label,
    Icon,
} from './style';

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.add === 'false' ? this.props.editItemData.id : '',
            bookName: this.props.add === 'false' ? this.props.editItemData.bookName:'',
            author: this.props.add === 'false' ? this.props.editItemData.author : '',
            genre: this.props.add === 'false' ? this.props.editItemData.genre : '',
            numberOfCopies: this.props.add === 'false' ? this.props.editItemData.numberOfCopies : '',
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.editItemData !== this.props.editItemData)
        console.log('props changed', this.props)
    }


    handleChage = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handeClick = () => {
        const { bookName, author, genre, numberOfCopies } = this.state
        const newObj = {
            id: uuid(),
            bookName ,
            author,
            numberOfCopies,
            genre,
        }
        this.props.addingBook(newObj)
        this.props.closeModal()
    }

    handleClickIcon = () => {
        this.props.closeModal()
    }

    handleEditBook = () => {
        const { bookName, author, genre, numberOfCopies,id } = this.state
        const newObj = {
            id,
            bookName,
            author,
            numberOfCopies,
            genre,
        }
        this.props.updatingBook(newObj)
        this.props.closeModal()
    }

    render() {
        const { bookName, author, genre, numberOfCopies } = this.state
        const { add } = this.props
        return (
            <ModalContainer>
                <ModalBox>
                    {add === 'true' && <Title>Add Book</Title>}
                    {add ==='false' && <Title>Edit Book</Title>}
                    <Icon className="fa fa-times" onClick={this.handleClickIcon}></Icon>
                    <Label for='bookName'>Book Name</Label>
                    <Input 
                        type='text' 
                        name='bookName' 
                        value={bookName}
                        placeholder='enter name of the book'
                        onChange={(e)=>this.handleChage(e)}/>
                    <Label>Author</Label>
                    <Input 
                        type='text'
                        name='author' 
                        value={author}
                        placeholder='enter author of the book'
                        onChange={(e) => this.handleChage(e)} />
                    <Label>Genre</Label>
                    <Input 
                        type='text' 
                        name='genre'
                        value={genre}
                        placeholder='enter genre of the book' 
                        onChange={(e) => this.handleChage(e)} />
                    <Label>Count</Label>
                    <Input 
                        type='text' 
                        name='numberOfCopies' 
                        value={numberOfCopies}
                        placeholder='enter number of copies'
                        onChange={(e) => this.handleChage(e)} />
                    { add === 'true' && <Button onClick={this.handeClick}>Add Book</Button>}
                    { add ==='false' && <Button onClick={this.handleEditBook}>Edit Book</Button>}
                </ModalBox>
            </ModalContainer>
        )
    }
}
