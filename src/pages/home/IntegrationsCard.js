import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {NavLink} from 'react-router-dom';
import {Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis} from 'recharts';


    const data = [
        { subject: 'Internal', A: 75},
        { subject: 'APIs', A: 20},
        { subject: 'Non-Technical', A: 100},
        { subject: 'Other', A: 30},
        { subject: 'Technical', A: 85},
        { subject: 'Online Apps', A: 50}
    ];

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

                                    <RadarChart width={300} height={150} data={data}>
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="subject" />
                                        <PolarRadiusAxis/>
                                        <Radar name="Integrations" dataKey="A" stroke="#00b14f" fill="#00b14f" fillOpacity={0.6}/>
                                    </RadarChart>
                                </div>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    The deep feature sets available on the C360 platform are leveraged in other tools and platforms across Grab,
                                    from application calls for PAX data in CSE, to dashboards for self-serve segment analysis.
                                    Explore our integrations, use them for your work, and get inspired for your next customer-centric data product!
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