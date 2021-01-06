import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {NavLink} from 'react-router-dom';

export default class IntegrationsCard extends React.Component {
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
                                <div align='center'>
                                    <Typography variant="h5" component="h2" align='center'>
                                        Powered by C360
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="h2">
                                    (1 Product / xxx Integrations)
                                    </Typography>
                                </div>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    The deep feature sets available on the C360 platform are leveraged in other data tools and platforms across Grab;
                                    from quick and efficient application calls in CSE, to full-blown self-serve segment analysis.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <NavLink to='/integrations' style={navLinkStyleObj}>
                                    <Button size="small" color="primary">
                                    View Integrations
                                    </Button>
                                </NavLink>
                            </CardActions>
                        </Card>
                </Grid>
        )
    }
}