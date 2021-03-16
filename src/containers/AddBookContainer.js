import { connect } from 'react-redux'
import AddBook from '../components/AddBook'
import { addBookAction } from '../actions'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        addingBook : (value) => {
            dispatch(addBookAction(value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBook)