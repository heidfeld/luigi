import React, {useState} from 'react';
import {Combobox} from 'react-widgets';
import {PLAYERS} from "./js/FootballConstants";
import {CURRENT_RESULTS, TYPES_KAMIL, TYPES_KARMEL, TYPES_LUKASZ, TYPES_MARWIN} from "./js/FootballTypes";
import FootballTable from "./FootballTable";

import './Football.css';

const Football = (props) => {

    const [comboValue, setComboValue] = useState(PLAYERS.MARWIN);
    const [playerResult, setPlayerResult] = useState(0);

    const onComboChange = (value) => {
        setComboValue(value);
    };

    const getTableDataSet = (player) => {
        switch (player) {
            case PLAYERS.KAMIL: {
                return TYPES_KAMIL;
            }
            case PLAYERS.MARWIN: {
                return TYPES_MARWIN;
            }
            case PLAYERS.LUKASZ: {
                return TYPES_LUKASZ;
            }
            case PLAYERS.KARMEL: {
                return TYPES_KARMEL;
            }
            default: {
                return CURRENT_RESULTS;
            }
        }
    };

    const calculatePoints = (teamName, value) => {
        const currentValue = CURRENT_RESULTS[teamName];
        return -Math.abs(value - currentValue);
    };

    const renderTable = (player) => {
        const dataSet = getTableDataSet(player);
        const data = Object.entries(dataSet).map(([teamName, value]) => {
            return {
                id: `${player}_${teamName}`,
                team: teamName,
                points: player ? calculatePoints(teamName, value) : 0
            };
        });

        const pointsResult = data.reduce((acc, curr) => {
            const {points = 0} = curr;
            return acc + points;
        }, 0);

        if (player && playerResult !== pointsResult) {
            setPlayerResult(pointsResult)
        }

        return (
            <FootballTable
                data={data}
            />
        )
    };

    return (
        <div className='football'>
            <div className='football__table'>
                <div className='football__table__title'>
                    {'Tabela ekstraklasy: Aktualizacja 11.07.2020'}
                </div>
                <div className='football__table__content'>
                    {renderTable()}
                </div>
            </div>
            <div className='football__table'>
                <div className='football__table__combobox'>
                    <Combobox
                        data={Object.values(PLAYERS)}
                        value={comboValue}
                        onChange={onComboChange}
                        defaultValue={PLAYERS.MARWIN}
                    />
                </div>
                <div className='football__table__title'>
                    {`WYNIK: ${playerResult}`}
                </div>
                <div className='football__table__content'>
                    {renderTable(comboValue)}
                </div>
            </div>
        </div>
    );

};

export default Football;