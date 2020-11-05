import React from 'react';
import {CSVLink} from "react-csv";

const Marwin = (props) => {

    const csvData = [
        ["firstname", "lastname", "email"],
        ["Piotrek", "Marwin", "piotrek@marwin.pl"]
    ];

    return (
        <div>
            <CSVLink data={csvData} filename={'tajny_raport_dla_marwina'}>Download CSV</CSVLink>
            <br/>
            <br/>
            Marwin to dla Ciebie wariacie.
        </div>
    );

};

export default Marwin;