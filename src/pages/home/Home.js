import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AttributesCard from './AttributesCard.js';
import APICard from './APICard.js';
import IntegrationsCard from './IntegrationsCard.js';
import DescriptionCard from './DescriptionCard.js';

export default class Home extends React.Component{
    render()    {

        return (
            <Grid container spacing={3}>
                <AttributesCard />
                <APICard />
                <IntegrationsCard />
                <DescriptionCard />
          </Grid>
        )
    }
}