import React, { Component } from 'react'

import {
    MainContent,
    Input,
    Icon,
} from './style'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm:'',
        }
    }

    handleChangeSearch = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleCickIcon = () => {
        let { searchTerm } = this.state

        if(searchTerm){
            const search = searchTerm.toLowerCase()
            var filteredArray = this.props.books.filter(item => {
                if(item.bookName.toLowerCase().includes(search)){
                    return item
                }
            })
        }


        if (filteredArray && filteredArray.length){
            this.setState({
                searchTerm:''
            },()=>{
                this.props.onSearch(filteredArray)
            })

        }
        else{
            this.setState({
                searchTerm: ''
            }, () => {
                this.props.noResult()
            })
            
        }

    }

    render() {
        return (
            <MainContent>
                <Input 
                    type='text'
                    placeholder='Search for your favorite book name'
                    onChange={(e)=>this.handleChangeSearch(e)}
                    name='searchTerm'
                    value={this.state.searchTerm}
                />
                <Icon className="fa fa-search" onClick={this.handleCickIcon}></Icon>
            </MainContent>
        )
    }
}

export default  Search