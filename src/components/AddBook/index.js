import React, { Component } from 'react'
import Modal from '../Modal'

import {
    MainContent,
    AddButton,
} from './style'

class AddBook extends Component {
    constructor(props){
        super(props)
        this.state= {
            openModalAdd: false
        }
    }
    handleAddButton = () => {
        this.setState({
            openModalAdd: true
        })
    }
    handleCloseModal = () => {
        this.setState({
            openModalAdd: false,
        })
    }
    render() {
        const {openModalAdd} = this.state
        return (
            <MainContent>
                <AddButton onClick={this.handleAddButton}>ADD BOOK</AddButton>
                {openModalAdd && <Modal 
                    add='true'
                    addingBook={this.props.addingBook} 
                    closeModal={this.handleCloseModal}
                /> }
            </MainContent>
        )
    }
}

export default AddBook