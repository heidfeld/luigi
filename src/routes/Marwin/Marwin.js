import React, {useState, useEffect} from 'react';
import {CSVLink} from "react-csv";
import {createFindPlaceRequestUrl} from "./js/GoogleApiHelpers";
import axios from 'axios';

const Marwin = (props) => {

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState({});
    const [searchText, setSearchText] = useState('');

    const GOOGLE_FIND_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const queryFindPlaceResult = async (requestUrl) => {
        setLoading(true);
        try {
            const response = await axios.get(requestUrl, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials':true,
                    'Access-Control-Allow-Methods':'POST, GET'
                },
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        const requestUrl = createFindPlaceRequestUrl(GOOGLE_FIND_PLACES_API_KEY, {
            text: searchText
        });
        //queryFindPlaceResult(requestUrl).then(r => r);
        queryFindPlaceResult(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&type=food&key=${GOOGLE_FIND_PLACES_API_KEY}`).then(r => r);
    };

    const renderDownloadButton = () => {
        return (
            <CSVLink data={data} filename={'tajny_raport_dla_marwina'}>Download CSV</CSVLink>
        );
    }


    return (
        <div>
            <br/>
            <br/>
            Marwin to dla Ciebie wariacie.
            <br/>
            <br/>


            <br/>
            <label>
                Tekst do wyszukania:<br/>
                <input type="text" value={searchText} onChange={handleSearchTextChange}/>
            </label>
            <br/>
            <button onClick={handleSubmit}>
                Przelicz
            </button>
            {isLoading ? 'Loading...' : null}
            {Object.keys(data).length ? renderDownloadButton() : null}
            {error.length ? error : null}
        </div>
    );

};

export default Marwin;