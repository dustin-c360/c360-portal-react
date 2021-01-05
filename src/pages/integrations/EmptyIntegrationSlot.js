import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class EmptyIntegrationSlot extends React.Component {
    render()    {
        const styleObj = {
            height: '100%',
        };

        return (
            <Grid item xs={12} md={12} lg={12}>
                <Card style={styleObj}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align='center'>
                            Coming Soon!
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}