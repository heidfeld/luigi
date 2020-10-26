import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import './Navigation.css';

const Navigation = (props) => {

    const {rows} = props;

    const renderRow = (rowConfig) => {
        const {label, url} = rowConfig;
        return (
            <li className='navigation__section__row'>
                <Link to={url}>
                    {label}
                </Link>
            </li>
        );
    };

    const renderSection = (rows) => {
        return (
            <ul className='navigation__section'>
                {rows.map(rowConfig => renderRow(rowConfig))}
            </ul>
        );
    };

    return (
        <div>
            <nav className='navigation'>
                {renderSection(rows)}
            </nav>
        </div>
    );

};

Navigation.defaultProps = {};

Navigation.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape({
        rows: PropTypes.arrayOf(PropTypes.shape()),
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }))
};

export default Navigation;
