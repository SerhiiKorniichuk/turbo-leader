import React from 'react'
import {
	withStyles, makeStyles, Table, TableBody,
	TableCell, TableContainer, TableHead, TableRow, Link as MaterialLink, ButtonGroup, Button, Tooltip
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

	const copyToClipboard = (e, link) => {
		e.preventDefault()
		navigator.clipboard.writeText(getSiteRefLink(link)).then(props.openSnackbar)
	}

	const getSiteRefLink = (link) => {
		return `${link}?ref=${props.username}`
	}

	return (
		<TableContainer>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Сайт</StyledTableCell>
						<StyledTableCell>Посилання</StyledTableCell>
						<StyledTableCell align="right" />
					</TableRow>
				</TableHead>
				<TableBody>
					{ props.productLinks.map((item, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell component="th" scope="row">{item.name}</StyledTableCell>
							<StyledTableCell>
								<MaterialLink href={getSiteRefLink(item.link)} target='_blank'>{getSiteRefLink(item.link)}</MaterialLink>
							</StyledTableCell>
							<StyledTableCell align='right'>
								<ButtonGroup variant="outlined" color="primary" aria-label="text primary button group">
									<Tooltip title="Скопіювати">
										<Button onClick={(e) => copyToClipboard(e, item.link)}>
											<FileCopyIcon />
										</Button>
									</Tooltip>
									<Tooltip title="Переглянути">
										<Button component='a' href={getSiteRefLink(item.link)} target='_blank'>
											<VisibilityIcon />
										</Button>
									</Tooltip>
								</ButtonGroup>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}