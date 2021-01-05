import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

export default class Datastore extends React.Component {
    render()    {
        const cardContainer = {
            paddingLeft : "10px",
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px"
        }

        const apiLink = "https://c360.developer.azure-api.net/signin?returnUrl=/";

        return (
        <div>
            <Card style={cardContainer}>
                <Typography variant='h5'>Access C360 APIs</Typography>
                Attributes from the C360 Datastore are also available for consumption via API calls. Users who will find the API useful include but are not limited to: 
                <ul>
                    <li><b>Analysts / Data Scientists</b>, who need an online feature store for model training and prediction.</li>
                    <li><b>Engineers</b>, who require ready-to-use data consumption endpoints for their online systems.</li>
                </ul>
                
                The API can be accessed via our Developer Portal <a href={apiLink} target="_blank">here</a>.
            </Card>
        </div>
        );
    };
};