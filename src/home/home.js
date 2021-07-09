import React, { Component } from 'react';
import { Input, Table } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import "./home.css";

class HommeWrapper extends Component {
    state = {
        searchText: '',
        dataSource: {}
    }

    submitText = () => {
        const requestOptions = {
            method: "GET",
            headers: {}
        }
        fetch(`https://api.github.com/search/users?q=${this.state.searchText}`, requestOptions)
            .then(response => response.json())
            .then(response => {
                this.setState({ dataSource: response });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { searchText, dataSource } = this.state;
        const columns = [
            {
                title: "Avatar_URL",
                dataIndex: "avatar_url",
                key: "avatar_url"
            },
            {
                title: "Login",
                dataIndex: "login",
                key: "login",
                defaultSortOrder: 'descend',
                sorter: (a, b) => {
                    if (a.login.toLowerCase() < b.login.toLowerCase()) { return -1; }
                    if (a.login.toLowerCase() > b.login.toLowerCase()) { return 1; }
                    return 0;
                },
            },
            {
                title: "Type",
                dataIndex: "type",
                key: "type"
            },
        ]
        return (
            <div className="mainDiv" data-test="homeComponent">
                <div className="headerDiv">
                    <div className="inputDiv">
                        <Input
                            placeholder="Enter search text"
                            value={searchText ? searchText : ''}
                            autoComplete='off'
                            onChange={(e) => this.setState({ searchText: e.target.value })}
                            data-test="searchInput"
                        />
                    </div>
                    <div>
                        <Button type="primary" data-test="submitButn" onClick={this.submitText}>Submit</Button>
                    </div>
                </div>
                <div className="bodyDiv" data-test="itemTable">
                    <Table
                        dataSource={dataSource.items}
                        columns={columns}
                        pagination={{ defaultPageSize: 9 }}
                    />
                </div>
            </div>
        );
    }
}

export default HommeWrapper;