export const SET_DEFAULT_ALL_CONTACTS = 'GET_DEFAULT_ALL_CONTACTS'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
    is_loading: false,
    default_contacts_list: {}
}


const contactsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case (SET_DEFAULT_ALL_CONTACTS):
            return {
                ...state,
                default_contacts_list: actions.default_contacts_list
            }
        case (WATCH_LOADING):
            return  {
                ...state,
                is_loading: actions.is_loading
            }
        default:
            return state
    }
}

export default contactsReducer