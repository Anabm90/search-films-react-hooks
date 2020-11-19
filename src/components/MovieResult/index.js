import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core'

const MovieResult = ({Title, Year, Type, imdbID, Poster}) => {
    return (
        <Card>
            <Grid item>
                <img src={Poster} alt={Title} />
            </Grid>
            <Grid item>
                <Typography>{Title}</Typography>
                <Typography>{ Year }</Typography>
                <Typography> { Type }</Typography>
                <Button color="primary" variant="container">See more</Button>
            </Grid>
        </Card>
    )
}


export default MovieResult