import { setDefaultContactsList, setLendingContactsList, watchLoading } from './contactsActions'
import { contactsApi } from '../../api/contacts/contactsApi'
import { signOut } from '../auth/authThunks'


export const getDefaultContactsList = () => {
    return (dispatch) => {
        dispatch(watchLoading(true))
        contactsApi.getDefaultContacts()
            .then(response => {
                dispatch(setDefaultContactsList(response.data))
                dispatch(watchLoading(false))
            })
            .catch(error => {
                if (error.response.status === 401) {
                    dispatch(signOut())
                }
                dispatch(watchLoading(false))
            })
    }
}

export const editDefaultContact = (contactId, contactData) => {
    return (dispatch) => {
        dispatch(watchLoading(true))
        contactsApi.editDefaultContact(contactId, contactData)
            .then(response => {
                dispatch(getDefaultContactsList())
            })
            .catch(error => {
                if (error.response.status === 401) {
                    dispatch(signOut())
                }
                dispatch(watchLoading(false))
            })
    }
}

export const getLendingContactsList = () => {
    return (dispatch) => {
        dispatch(watchLoading(true))
        contactsApi.getLendingContacts()
            .then(response => {
                dispatch(setLendingContactsList(response.data))
                dispatch(watchLoading(false))
            })
            .catch(error => {
                if (error.response.status === 401) {
                    dispatch(signOut())
                }
                dispatch(watchLoading(false))
            })
    }
}

export const editLendingContact = (contactId, contactData) => {
    return (dispatch) => {
        dispatch(watchLoading(true))
        contactsApi.editLendingContact(contactId, contactData)
            .then(response => {
                dispatch(getLendingContactsList())
            })
            .catch(error => {
                if (error.response.status === 401) {
                    dispatch(signOut())
                }
                dispatch(watchLoading(false))
            })
    }
}