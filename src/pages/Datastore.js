import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import DatabricksIcon from './databricks.png';
import SynapseIcon from './synapse.svg';
import PrestoIcon from './presto.png';
import GrabIcon from './grab.svg';
import AWSIcon from './aws.png';
import AzureIcon from './azure.jpg';

export default class Datastore extends React.Component {
    render()    {
        const accordionHeader = {
            fontWeight: "bold"
        }

        const importantNote = {
            color: "#FF0000"
        }

        const cardContainer = {
            paddingLeft : "10px",
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px"
        }

        const icon = {
            width: '16px',
            height: '16px',
            marginRight: '5px',
        }

        const infosecLink = "https://docs.google.com/document/d/13YhuchO4rqIz51g1kM_uwveNvNOX94-Mdx15rfGYYTY/edit?usp=sharing";
        const chimeraSampleLink = "https://drive.google.com/file/d/1luM3k25ZiqNIaUiqZYDibfHHUEXBJ95s/view";
        const databricksSampleLink = "https://southeastasia.azuredatabricks.net/?o=8828325590343738#notebook/2511259755854744/command/2142980880899066";

        return (
        <div>
            <Card style={cardContainer}>
                <Typography variant='h5'>Access C360 Datastore</Typography>
                The C360 Datastore contains a wealth of attributes that are ready to use. Users who will find the Datastore useful include but are not limited to:
                <ul>
                    <li><b>Analysts / Data Scientists</b>, who can query directly from the Datastore to drive their analyses, mine insights, enrich business intelligence, and train models.</li>
                    <li><b>SegP Users</b>, who can leverage the data to build rich segments easily and efficiently in SegP.</li>
                </ul>
                
                The instructions for access are given below.
                <br />
                <br />
                 
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={accordionHeader}>
                        <img src={AWSIcon} alt='' style={icon}/> 
                        <img src={PrestoIcon} alt='' style={icon}/> 
                        Access Datastore via Presto
                    </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ol>
                            <li>Apply for access to the <b>C360_Datastore_RO</b> Presto group on Concedo.</li>
                            <li>
                                Once approved, you may access all C360 attributes via our <b>6 supertables</b> in the <b>grab_c360_datastore</b> schema where the table names are:
                                <ul>
                                    <li>food_attributes</li>
                                    <li>pay_attributes</li>
                                    <li>transport_attributes</li>
                                    <li>general_current_attributes</li>
                                    <li>general_predicted_attributes</li>
                                    <li>general_lxd_attributes</li>
                                </ul>
                            </li>
                            <li>Learn more about our attributes with the <b>Discover Attributes</b> tool, provided in the navigation panel on the left.</li>
                        </ol>
                        <b style={importantNote}>NEVER join any C360 tables with any PII tables. Read our InfoSec policy <a href={infosecLink} target="_blank" rel="noopener noreferrer">here</a>.</b>
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={accordionHeader}>
                        <img src={AWSIcon} alt='' style={icon}/>
                        <img src={GrabIcon} alt='' style={icon}/> 
                        Access Datastore via Chimera (S3)
                    </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        To access C360 attributes via Chimera, follow the sample Python script given <a href={chimeraSampleLink} target="_blank" rel="noopener noreferrer">here</a>.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={accordionHeader}>
                        <img src={AzureIcon} alt='' style={icon}/> 
                        <img src={DatabricksIcon} alt='' style={icon}/> 
                        Access Datastore via Azure Databricks (Delta Lake)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        To access via Azure Databricks, follow our sample Databricks notebook given <a href={databricksSampleLink} target="_blank" rel="noopener noreferrer">here</a>.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={accordionHeader}>
                        <img src={AzureIcon} alt='' style={icon}/> 
                        <img src={SynapseIcon} alt='' style={icon}/> 
                        Access Datastore via Azure Synapse (ADW)
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Coming soon!
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={accordionHeader}>
                        <img src={AWSIcon} alt='' style={icon}/> 
                        <img src={GrabIcon} alt='' style={icon}/> 
                        Access Datastore via SegP
                    </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        The C360 Datastore is already whitelisted on the SegP platform. You should already be able to access all attributes in template and conditional builders.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
        </Card>
        </div>
        );
    };
};