import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { getDefaultContactsList, getLendingContactsList } from '../../../store/contacts/contactsThunks'
import { ContactsTabs } from './components/ContantsTabs/ContactsTabs'
import { ContactsList } from './components/ContactsList/ContactsList'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    }
}))


const Contacts = () => {

    const classes = useStyles()

    const { default_contacts_list, lending_contacts_list } = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const [selectedTab, setSelectedTab] = React.useState(0)

    useEffect(() => {
        if (selectedTab === 0) {
            dispatch(getDefaultContactsList())
        } else if (selectedTab === 1) {
            dispatch(getLendingContactsList())
        }
    }, [dispatch, selectedTab])

    return (
        <div className={classes.root}>
            <ContactsTabs value={selectedTab} onChange={setSelectedTab} />
            {selectedTab === 0 && <ContactsList type='default' list={default_contacts_list} />}
            {selectedTab === 1 && <ContactsList type='lending' list={lending_contacts_list} />}
        </div>
    )
}

export default Contacts