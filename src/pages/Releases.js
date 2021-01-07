import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';


function createData(version, isReleased, releaseDate) {
    let chipColor = isReleased ? "primary" : "secondary"
    let chipLabel = isReleased ? "Released" : "In Progress"
    return {version, chipColor, chipLabel, releaseDate};
};

const rows = [
    createData('2.0', 0, '-'),
    createData('1.8', 1, '2020-11-30'),
    createData('1.6', 1, '2020-11-02'),
    createData('1.5', 1, '2020-09-30'),
    createData('1.2', 1, '2020-08-10'),
    createData('1.1', 1, '2020-07-01'),
    createData('1.0', 1, '2020-05-22'),
  ];

const releaseLogUrl = "https://wiki.grab.com/display/BDP/00.02.+Release+Logs";

export default class Releases extends React.Component{
    render()    {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>Version</b></TableCell>
                            <TableCell align="center"><b>Status</b></TableCell>
                            <TableCell align="center"><b>Release Date</b></TableCell>
                            <TableCell align="center"><b>Details</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.version}>
                            <TableCell align="center"component="th" scope="row">{row.version}</TableCell>
                            <TableCell align="center"><Chip color={row.chipColor} label={row.chipLabel}/></TableCell>
                            <TableCell align="center">{row.releaseDate}</TableCell>
                            <TableCell align="center"><a href={releaseLogUrl} target="_blank" rel="noopener noreferrer">See Wiki</a></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        );
    };
};