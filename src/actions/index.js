export const addBookAction = value => ({
    type: 'ADD_BOOK',
    value,
})

export const deleteBookAction = id => ({
    type: 'DELETE_BOOK',
    id,
})

export const updateBookAction = value => ({
    type: 'UPDATE_BOOK',
    value,
})