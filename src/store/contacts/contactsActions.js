import { SET_DEFAULT_CONTACTS, SET_LENDING_CONTACTS, WATCH_LOADING } from './contactsReducer'


export const setDefaultContactsList = (default_contacts_list) => {
    return {
        type: SET_DEFAULT_CONTACTS,
        default_contacts_list: default_contacts_list
    }
}

export const setLendingContactsList = (lending_contacts_list) => {
    return {
        type: SET_LENDING_CONTACTS,
        lending_contacts_list: lending_contacts_list
    }
}

export const watchLoading = (is_loading) => {
    return {
        type: WATCH_LOADING,
        is_loading: is_loading
    }
}