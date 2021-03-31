import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
class ReactNewTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = [
            {
                "TENANT_ID": "BSNL",
                "EMAIL": "abc@bsnl.com",
                "LAST_LICENSE_REQUEST": "Tue Nov 19 09:44:59 UTC 2019",
                "NO_OF_LICENSE_REQUESTED": "3",
                "LAST_USER_LOGIN": "Tue Nov 19 09:44:59 UTC 2019",
                "TRIAL_EXPIRY": "Tue Aug 11 09:44:59 UTC 2021"
            },
            {
                "TENANT_ID": "VODAPHONE",
                "EMAIL": "abc@voda.com",
                "LAST_LICENSE_REQUEST": "Wed Nov 20 09:44:59 UTC 2019",
                "NO_OF_LICENSE_REQUESTED": "4",
                "LAST_USER_LOGIN": "Tue Nov 19 09:44:59 UTC 2019",
                "TRIAL_EXPIRY": "Sat Aug 15 09:44:59 UTC 2020"
            }
        ]
        const columns = [
            {
                Header: 'TENANT ID',
                accessor: 'TENANT_ID'
            },
            {
                Header: 'EMAIL',
                accessor: 'EMAIL'
            },
            {
                Header: 'LAST_LICENSE_REQUEST',
                accessor: 'LAST_LICENSE_REQUEST'
            },
            {
                Header: 'NO_OF_LICENSE_REQUESTED',
                accessor: 'NO_OF_LICENSE_REQUESTED'
            },
            {
                Header: 'LAST_USER_LOGIN',
                accessor: 'LAST_USER_LOGIN'
            },
            {
                Header: 'TRIAL_EXPIRY',
                accessor: 'TRIAL_EXPIRY'
            }
        ]
        return (
            <ReactTable data={data}
            columns={columns} 
            defaultPageSize={10}
            />
                
            
        );
    }
}
export default ReactNewTable