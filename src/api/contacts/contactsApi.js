import axios from 'axios'


export const contactsApi = {
    getDefaultAllContacts() {
        return (
            axios.get(`contact/ref/`)
        )
    },
    getDefaultContact(id) {
        return (
            axios.get(`contact/ref/${id}`)
        )
    }
}