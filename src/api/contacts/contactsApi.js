import axios from 'axios'


export const contactsApi = {
    getDefaultContacts() {
        return (
            axios.get(`contact/ref/`)
        )
    },
    getLendingContacts() {
        return (
            axios.get(`contact/lending/`)
        )
    }
}