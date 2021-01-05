import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

export default class AttributesCard extends React.Component {
    render()    {
        const styleObj = {
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px"
        };

        const data = [
            {name: 'PAX', numberOfAttributes: 2260},
            {name: 'DAX', numberOfAttributes: 832},
            {name: 'MEX', numberOfAttributes: 442}
      ];

        const totalAttributes = data.map((userType) => userType.numberOfAttributes).reduce((total, current) => total+current);

        return (
            <Grid item xs={12} md={4} lg={4}>
                        <Card style={styleObj}>
                            <CardContent>
                            <div align='center'>
                                <Typography variant="h5" component="h2">
                                    Attribute Datastore
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h2">
                                ({totalAttributes} attributes in total)
                                </Typography>
                                
                                <BarChart width={300} height={150} data={data} align='center'
                                        margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <Tooltip/>
                                    <Bar dataKey="numberOfAttributes" fill="#000000" />
                                </BarChart>
                            </div>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                Discover Attributes
                                </Button>
                                <Button size="small" color="primary">
                                Access Datastore
                                </Button>
                            </CardActions>
                        </Card>
                </Grid>
        )
    }
}