import getInitialState from '../store/initial-state'

export default function(state=getInitialState(),action){
    if(action.type === 'ADD_BOOK'){
        return {
            ...state,
            books: [...state.books,action.value],
        }
    }

    if (action.type === 'UPDATE_BOOK'){
        let bookArray = [...state.books]
        let newarr = []
        for (let i = 0; i < bookArray.length;i++){
            if(bookArray[i].id === action.value.id){
                newarr[i] = action.value
            }
            else{
                newarr[i] = bookArray[i]
            }
        }
        return{
            ...state,
            books: [...newarr]
        }
    }

    if (action.type === 'DELETE_BOOK'){
        let filterArray = state.books.filter(item => item.id !== action.id)
        return {
            ...state,
            books: [...filterArray],
        }
    }

    return state
}