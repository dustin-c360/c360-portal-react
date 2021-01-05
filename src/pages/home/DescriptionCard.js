import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExtensionIcon from '@material-ui/icons/Extension';

export default class DescriptionCard extends React.Component {
    render()    {
        const styleObj = {
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingLeft: "10px",
            paddingRight: "10px",
        };

        return (
            <Grid item xs={12}>
                <List style={styleObj}>
                    <ListItem>
                            <ListItemIcon><GroupWorkIcon /></ListItemIcon> 
                            <h3>A repository of rich and complex user attributes derived from signals across Grab products and services (Transport, Pay, Food, etc),
                            the Datastore acts as a single source of truth for user-level data.</h3>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ThumbUpIcon /></ListItemIcon>
                        <h3>Robust pipelines and a well-defined SLA means that you can concentrate on the important stuff, with little fear of downtime, and interruptions.</h3>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ExtensionIcon /></ListItemIcon>
                        <h3>Any attribute you can think of can be on-boarded with ease, so you can add your own data to the platform and help contribute to customer-centricity.</h3>
                    </ListItem>
                </List>
            </Grid>
        )
    }
}