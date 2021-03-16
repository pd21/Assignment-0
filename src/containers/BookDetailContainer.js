import { connect } from 'react-redux'
import BookDetail from '../components/BookDetail'
import { updateBookAction, deleteBookAction } from '../actions'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return{
        updatingBook: (value) => {
            dispatch(updateBookAction(value))
        },
        deletingBook: (id) => {
            dispatch(deleteBookAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)