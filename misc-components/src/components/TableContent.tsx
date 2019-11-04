import React from 'react';
import { Table, Icon, Select } from 'antd';

const { Option } = Select;

type Record = {
    key: number,
    name: string,
    age: number,
    address: string,
    description: string
};

type Column = {
    title: string,
    dataIndex: string,
    key: string,
    render?: (text: string, record: Record) => {}
};

export class TableContent extends React.Component {
    private columns: Column[];
    private data: Record[];

    constructor() {
        super({});

        this.columns = [
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Alter', dataIndex: 'age', key: 'age' },
            { title: 'Adresse', dataIndex: 'address', key: 'address' },
            {
                title: "Land",
                dataIndex: "key",
                key: "country",
                render: () => (this.renderCountryColumn()),
            },
            {
                title: 'Aktion',
                dataIndex: '',
                key: 'buttons',
                render: (text: string, record: Record) => (this.renderActionColumn(text, record)),
            },
        ];

        this.data = [
            {
                key: 1,
                name: 'Max Mustermann',
                age: 35,
                address: 'Berlin, Hauptstrasse 1',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                key: 2,
                name: 'Martina Musterfrau',
                age: 38,
                address: 'Stuttgart, Nebenstrasse 100',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
            {
                key: 3,
                name: 'Otto Normalverbraucher',
                age: 43,
                address: 'Hamburg, Am Hafen 99',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            },
        ];

        this.render.bind(this);
    }

    render() {
        const rowSelection = {
            onSelect: this.onRowSelect
        };

        return (
            <Table
                columns={this.columns}
                expandedRowRender={(record: Record) => <p style={{ margin: 0 }}>{record.description}</p>}
                dataSource={this.data}
                rowSelection={rowSelection}
            />
        );
    }

    onClickIcon = (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string, text: string, record: Record) => {
        console.log(event);
        alert("Icon Button " + key + " clicked: " + record.name);
    }

    onRowSelect = () => {
        alert("Row selection");

    }

    renderActionColumn = (text: string, record: Record) => (
        <span>
            <Icon type="download" style={{ marginRight: 10 }} onClick={(e) => this.onClickIcon(e, "download", text, record)} />
            <Icon type="delete" onClick={(e) => this.onClickIcon(e, "delete", text, record)} />
        </span>
    );

    renderCountryColumn = () => (
        <Select style={{ width: 200 }} defaultValue="Deutschland">
            <Option value="de">Deutschland</Option>
            <Option value="fr">Frankreich</Option>
            <Option value="a">Österreich</Option>
        </Select>
    )

}