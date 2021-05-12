import { setDefaultContactsList, watchLoading } from './contactsActions'
import {contactsApi} from '../../api/contacts/contactsApi'
import { signOut } from '../auth/authThunks'


export const getDefaultAllContactsList = () => {
    return (dispatch) => {
        dispatch(watchLoading(true))
        contactsApi.getDefaultAllContacts()
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