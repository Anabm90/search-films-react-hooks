import React, {useState } from 'react'
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core'

import styles from './style'

export default ({ history }) => {
	const [searchText, setSearchText] = useState('')
	const classes = styles()

	const handleSearchTextChange = e => {
		setSearchText(e.target.value)
	}

	const handleCleanTextClick = e => {
		setSearchText('')
	}
	const handleSearchTextClear = e => { 
		history.push(`/results?movieName=${searchText}`)
	}
	
	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Welcome</Typography>
					</Grid>
					<Grid>
						
					</Grid>

				</Grid>
				<TextField
					value={searchText}
					className={classes.textFieldSearch}
					placeholder="look for a film"
					onChange={handleSearchTextChange} />
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" onClick={handleCleanTextClick}> Clear </Button>
					<Button variant="contained" className={classes.searchButton}color="primary" size="large" onClick={handleSearchTextClear}> Search</Button>
				</Grid>
			</Card>
		
	</Container>)
}