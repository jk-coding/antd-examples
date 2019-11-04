import React from 'react';
import { Icon, Card, Row, Col } from 'antd';

export class Cards extends React.Component {

    render() {
        return (
            <Row gutter={4}>
                <Col span={8}>
                    {this.renderCard("Karte A", ["Zeile A1", "Zeile A2"])}
                </Col>
                <Col span={8}>
                    {this.renderCard("Karte B", ["Zeile B1", "Zeile B2"])}
                </Col>
                <Col span={8}>
                    {this.renderCard("Karte C", ["Zeile C1", "Zeile C2"])}
                </Col>
            </Row>

        );
    }

    onClickIcon = (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string) => {
        alert("Icon " + key + " clicked!");
    };

    renderCard = (title: string, rows: string[]) => {
        return (
            <Card title={title}
                actions={[
                    <Icon type="setting" key="setting" onClick={(e) => this.onClickIcon(e, "setting")} />,
                    <Icon type="edit" key="edit" onClick={(e) => this.onClickIcon(e, "edit")} />,
                    <Icon type="ellipsis" key="ellipsis" onClick={(e) => this.onClickIcon(e, "ellipsis")} />,
                ]} >
                <div>
                    {rows.map((row: string) => {
                        return (<p> {row}</p>)
                    })
                    }
                </div>
            </Card >
        );
    }
}

