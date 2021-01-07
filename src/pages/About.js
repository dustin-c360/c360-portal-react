import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

export default class About extends React.Component{
    render()    {
        const cardContainer = {
            paddingLeft : "10px",
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px"
        }

        const wikiLink = "https://wiki.grab.com/pages/viewpage.action?spaceKey=BDP&title=Customer+360";

        return (
            <div>
            <Card style={cardContainer}>
                <Typography variant='h5'>About C360</Typography>
                PLACEHOLDER
                <br/><br/>
                Read more on our Wiki page <a href={wikiLink} target="_blank" rel="noopener noreferrer">here</a>.
            </Card>
        </div>
        );
    };
};