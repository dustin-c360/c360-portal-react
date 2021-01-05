import React from 'react';
import Grid from '@material-ui/core/Grid';
import EmptyIntegrationSlot from './EmptyIntegrationSlot.js';
import SegmentExplorer from './SegmentExplorer.js';

export default class IntegrationsPage extends React.Component{
    render()    {
        return (
            <div>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                                <SegmentExplorer />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <EmptyIntegrationSlot />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <EmptyIntegrationSlot />    
                        </Grid>
                    </Grid>
                </div> 
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                                <EmptyIntegrationSlot />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <EmptyIntegrationSlot />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <EmptyIntegrationSlot />    
                        </Grid>
                    </Grid>
                </div>
            </div>       
        )
    }
}