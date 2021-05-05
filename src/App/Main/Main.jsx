import React, { useState } from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Wrapper from './Wrapper/Wrapper'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'


export const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}))


const Main = (props) => {

	const classes = useStyles()

	const [open, setOpen] = useState(true)

	const handleDrawerOpen = () => setOpen(true)
	const handleDrawerClose = () => setOpen(false)

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header open={open} handleDrawerOpen={handleDrawerOpen} />
			<Sidebar open={open} handleDrawerClose={handleDrawerClose} />
			<Wrapper />
		</div>
	)
}

export default Main