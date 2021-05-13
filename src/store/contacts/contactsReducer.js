export const SET_DEFAULT_CONTACTS = 'GET_DEFAULT_CONTACTS'
export const SET_LENDING_CONTACTS = 'SET_LENDING_CONTACTS'
export const WATCH_LOADING = 'WATCH_LOADING'


let initialState = {
    is_loading: false,
    default_contacts_list: [],
    lending_contacts_list: []
}


const contactsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_DEFAULT_CONTACTS:
            return {
                ...state,
                default_contacts_list: actions.default_contacts_list
            }
        case SET_LENDING_CONTACTS:
            return {
                ...state,
                lending_contacts_list: actions.lending_contacts_list
            }
        case WATCH_LOADING:
            return  {
                ...state,
                is_loading: actions.is_loading
            }
        default:
            return state
    }
}

export default contactsReducer