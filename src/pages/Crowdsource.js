import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import axios from 'axios';

export default class Crowdsource extends React.Component{ 
    state = {
        persons: []
      }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }


    render()    {
        const cardContainer = {
            paddingLeft : "10px",
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px"
        }

        const wikiLink = "https://wiki.grab.com/pages/viewpage.action?pageId=295123781";

        return (
            <div>
            <Card style={cardContainer}>
                <Typography variant='h5'>Crowdsourcing Process</Typography>
                 { this.state.persons.map(person => <li>{person.name}</li>)}
                <br/><br/>
                Crowdsourcing for Datastore is documented on our Wiki page <a href={wikiLink} target="_blank" rel="noopener noreferrer">here</a>.

            </Card>
        </div>
        );
    };
};