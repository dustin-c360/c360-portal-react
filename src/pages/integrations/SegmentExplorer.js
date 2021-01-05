import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import segexDemo from './segment_explorer_demo.gif';

export default class SegmentExplorer extends React.Component {
    render()    {
        const importantNote = {
            color: "#F00"
        };

        const segexDemoGIFStyle = {
            paddingLeft: "25px",
            paddingRight: "25px",
        };

        const segmentExplorerLink = "https://go-c360.azurewebsites.net/toolkit";
        const concedoAccessLink = "https://wiki.grab.com/display/BDP/Requesting+access+to+the+toolkit";

        return (
            <Grid item xs={12} md={12} lg={12}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align='center'>
                            Segment Explorer
                        </Typography>
                    </CardContent>
                    <CardMedia
                    style={segexDemoGIFStyle}
                    component="img"
                    image={segexDemo}
                    title="SEGEX Demo"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Conduct your own analyses, and mine your own insights all whilst leveraging the vast C360 Datastore!
                            This self-serve BI tool is designed so that even non-technical users can empower themselves to make more customer-centric,
                            data-driven decisions! <br/><br/>

                            <b style={importantNote}>You will need to apply for access to this via Concedo v2 on a user type (PAX/DAX/MEX) and market level.</b>
                        </Typography>
                    </CardContent>

                    <CardActions>         
                        <Button href={concedoAccessLink} target="_blank" size="small" color="secondary">
                        Apply for Access
                        </Button>
                        <Button href={segmentExplorerLink} target="_blank" size="small" color="primary">
                        Open Segment Explorer
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}