import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';

const style = {
    cellStyle: {
        backgroundColor: "lightblue",
        height: "50px",
        padding: "10px 20px"
    }
};

ReactDOM.render(
    <div>
        <Row gutter={[16, 16]}>
            <Col span={12}><div style={style.cellStyle}>col-12</div></Col>
            <Col span={12}><div style={style.cellStyle}>col-12</div></Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col span={8}><div style={style.cellStyle}>col-8</div></Col>
            <Col span={8}><div style={style.cellStyle}>col-8</div></Col>
            <Col span={8}><div style={style.cellStyle}>col-8</div></Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col span={6}><div style={style.cellStyle}>col-6</div></Col>
            <Col span={6}><div style={style.cellStyle}>col-6</div></Col>
            <Col span={6}><div style={style.cellStyle}>col-6</div></Col>
            <Col span={6}><div style={style.cellStyle}>col-6</div></Col>
        </Row>
    </div>,
    document.getElementById('container'),
);
