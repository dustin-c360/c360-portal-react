import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {NavLink} from 'react-router-dom';

export default class APICard extends React.Component {
    render()    {
        const styleObj = {
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            height: '100%'
        };

        const navLinkStyleObj = {
            textDecoration: "none"
        };

        return (
            <Grid item xs={12} md={4} lg={4}>
                <Card style={styleObj}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align='center'>
                            API Endpoints
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <NavLink to='/api' style={navLinkStyleObj}>
                            <Button size="small" color="primary">
                                Access API
                            </Button>
                        </NavLink>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}