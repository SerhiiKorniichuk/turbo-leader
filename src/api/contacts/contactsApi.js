import axios from 'axios'


export const contactsApi = {
    getDefaultContacts() {
        return (
            axios.get(`contact/ref/`)
        )
    },
    editDefaultContact(contactId, contactData) {
        return (
            axios.patch(`contact/${contactId}/`, contactData)
        )
    },
    getLendingContacts() {
        return (
            axios.get(`contact/lending/`)
        )
    },
    editLendingContact(contactId, contactData) {
        return (
            axios.patch(`contact/lending/${contactId}/`, contactData)
        )
    },
}