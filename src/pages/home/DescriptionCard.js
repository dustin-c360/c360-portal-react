import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class DescriptionCard extends React.Component {
    render()    {
        const styleObj = {
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px"
        };
        
        return (
            <Grid item xs={12}>
                        <Card style={styleObj}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Start embracing customer centricity today!
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                <b>Unified</b><br />
                                A repository of rich and complex user attributes derived from signals across Grab products and services (Transport, Pay, Food, etc).
                                <br />
                                <b>Bountiful</b><br />
                                Includes families of ML attributes like archetypes, lifetime value, and churn probability, which are continuously being enhanced by the C360 team.
                                <br />
                                <b>Dependable</b><br />
                                Robust pipelines and a well-defined SLA means that you can concentrate on the important stuff, with no fear of downtime and interruptions.
                                <br />
                                <b>Extendable</b><br />
                                Custom attributes can be on-boarded with ease, so you can add your own data to the platform and help contribute to customer-centricity.
                                <br />
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
        )
    }
}