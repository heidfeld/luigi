import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import CommonTable from "../../components/Table/CommonTable";

const FootballTable = (props) => {

    const {data, updateData} = props;

    const onValueChanged = (row, column, value) => {
        const {id: columnId} = column;
        const {values: {headerId: entityId} = {}} = row;
        updateData(entityId, columnId, value);
    };

    const tableColumns = useMemo(() => {
        return [
            {
                Header: 'id',
                accessor: 'headerId'
            },
            {
                Header: 'Pos',
                accessor: 'headerNumber',
                width: 60
            },
            {
                Header: 'Ekipa',
                accessor: 'headerTeam',
                width: 200
            },
            {
                Header: 'Punkty',
                accessor: 'headerPoints',
                width: 60
            },
        ];
    }, []);

    const toRow = (rowData, idx) => {
        const {id, team, points} = rowData;
        const headerNumber = idx + 1;
        return {
            headerNumber: headerNumber,
            headerId: id ?? headerNumber,
            headerTeam: team,
            headerPoints: points
        }
    };

    const getEditableColumns = () => {
        return [];
    };

    const getHiddenColumns = () => {
        return ['headerId'];
    };

    const tableData = useMemo(() => {
        return data.map((entity, idx) => toRow(entity, idx));
    }, [data]);

    return (
        <CommonTable
            columns={tableColumns}
            data={tableData}
            hiddenColumns={getHiddenColumns()}
            onValueChanged={onValueChanged}
            editableColumns={getEditableColumns()}
            filterable={false}
        />
    );

};

FootballTable.propTypes = {
    data: PropTypes.shape().isRequired,
    updateData: PropTypes.func
};

export default FootballTable;
