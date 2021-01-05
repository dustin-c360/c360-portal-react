import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class About extends React.Component{
    render()    {
        return (
            <div>
                <Typography variant="h2" color="textPrimary" align="left">{"About Customer360"}</Typography>
                <Typography variant="h6" color="textPrimary" align="left">{"Yolo"}</Typography>
            </div>
        );
    };
};