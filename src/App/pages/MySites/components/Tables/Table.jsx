import React from 'react'
import {
	withStyles, makeStyles, Table, TableBody,
	TableCell, TableContainer, TableHead, TableRow, Link as MaterialLink, ButtonGroup, Button
} from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import VisibilityIcon from '@material-ui/icons/Visibility'


const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.action.hover
	},
	body: {
		fontSize: 14
	}
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
	root: {
		fontSize: 20
	}
}))(TableRow)

const useStyles = makeStyles({
	table: {
		minWidth: 700
	}
})


export const Tables = (props) => {

	const classes = useStyles()

	const copyToClipboard = (e) => {
		e.preventDefault()
		navigator.clipboard.writeText(getSiteRefLink()).then(props.openSnackbar)
	}

	const getSiteRefLink = () => {
		return `${props.siteLink}?ref=${props.userName}`
	}

	return (
		<TableContainer>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Сайт</StyledTableCell>
						<StyledTableCell>Ссылка</StyledTableCell>
						<StyledTableCell align="right" />
					</TableRow>
				</TableHead>
				<TableBody>
					<StyledTableRow>
						<StyledTableCell component="th" scope="row">{props.siteName}</StyledTableCell>
						<StyledTableCell>
							<MaterialLink href={getSiteRefLink()} target='_blank'>{getSiteRefLink()}</MaterialLink>
						</StyledTableCell>
						<StyledTableCell align='right'>
							<ButtonGroup variant="outlined" color="primary" aria-label="text primary button group">
								<Button onClick={copyToClipboard}>
									<FileCopyIcon />
								</Button>
								<Button component='a' href={getSiteRefLink()} target='_blank'>
									<VisibilityIcon />
								</Button>
							</ButtonGroup>
						</StyledTableCell>
					</StyledTableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}