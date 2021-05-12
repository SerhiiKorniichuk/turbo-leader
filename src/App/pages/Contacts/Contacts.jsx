import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getDefaultAllContactsList } from '../../../store/contacts/contactsThunks'
import { ContactsTabs } from './components/ContantsTabs/ContactsTabs'
import { ContactsList } from './components/ContactsList/ContactsList'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    }
}))


const Contacts = () => {

    const classes = useStyles()

    const { is_loading, default_contacts_list } = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const [selectedTab, setSelectedTab] = React.useState(0)

    useEffect(() => {
        dispatch(getDefaultAllContactsList())
    }, [dispatch])

    if (is_loading) return <div />

    return (
        <div className={classes.root}>
            <ContactsTabs value={selectedTab} onChange={setSelectedTab} />
            { selectedTab === 0 && <ContactsList list={default_contacts_list} />}
        </div>
    )
}

export default Contacts