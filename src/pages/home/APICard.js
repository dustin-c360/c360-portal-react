import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {NavLink} from 'react-router-dom';
import {LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

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

        const data = [
            {name: '😡', "Superior C360 API": 100, "Other APIs": 1250},
            {name: '🤨', "Superior C360 API": 125, "Other APIs": 1000},
            {name: '😐', "Superior C360 API": 150, "Other APIs": 1100},
            {name: '🙂', "Superior C360 API": 300, "Other APIs": 1200},
            {name: '😀', "Superior C360 API": 1000, "Other APIs": 575},
            {name: '😁', "Superior C360 API": 3000, "Other APIs": 500},
            {name: '😎', "Superior C360 API": 2500, "Other APIs": 300},
        ];

        return (
            <Grid item xs={12} md={4} lg={4}>
                <Card style={styleObj}>
                    <CardContent>
                        <div align='center'>
                            <Typography variant="h5" component="h2" align='center'>
                                API Endpoints
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                (23ms Avg. / 58ms P95)
                            </Typography>

                            <LineChart width={300} height={150} data={data}
                                    margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="Other APIs" stroke="#8884d8" activeDot={{r: 8}}/>
                            <Line type="monotone" dataKey="Superior C360 API" stroke="#00b14f" />
                            </LineChart>

                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Our APIs are reliable and ready to use right away. Take customer-centricity online and start using our
                            attributes in your systems and applications! Great for application use cases that are on a user-level; you can also 
                            use the data for model training, re-training, and prediction! 
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