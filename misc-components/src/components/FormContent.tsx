import React from 'react';
import { Form, Row, Col, Input, InputNumber, Select, DatePicker, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

const { Option } = Select;

class FormContentImpl extends React.Component<FormComponentProps, {}> {
    private itemSpan: number = 8;

    private getFieldDecorator = this.props.form.getFieldDecorator;

    render() {
        return (
            <Form onSubmit={this.onSubmit} style={{ marginRight: 20 }}>
                <Row gutter={0} >
                    {this.renderInputField("Vorname", "first-name", true)}
                    {this.renderInputField("Name", "name")}
                    {this.renderDateField("Geburtsdatum", "birth-date")}
                    {this.renderIntegerInputField("Postleitzahl", "zip", true)}
                    {this.renderInputField("Ort", "location")}
                    {this.renderSelectField("Land", "country", ["Deutschland", "Frankreich", "Österreich"])}
                    {this.renderInputField("Strasse", "street", true, 16)}
                    {this.renderEmptyField()}
                    {this.renderMailInputField(true)}
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Speichern
                         </Button>
                    </Col>
                </Row>
            </Form>
        );
    }

    renderInputField = (label: string, key: string, isFirstCol: boolean = false, span: number = this.itemSpan) => {

        return (
            <Col span={span} >
                <Form.Item label={label} {...this.computeFormItemLayout(span)} labelAlign={isFirstCol ? "left" : "right"}>
                    {this.getFieldDecorator(key, {
                        rules: [
                            {
                                required: true,
                                message: `Eingabe ${label} fehlt!`,
                            },
                        ],
                    })(<Input placeholder={label} />)}
                </Form.Item>
            </Col>
        );
    }

    renderIntegerInputField = (label: string, key: string, isFirstCol: boolean = false, span: number = this.itemSpan) => {

        return (
            <Col span={span} >
                <Form.Item label={label} {...this.computeFormItemLayout(span)} labelAlign={isFirstCol ? "left" : "right"}>
                    {this.getFieldDecorator(key, {
                        rules: [
                            {
                                type: "integer",
                                message: "Eingabe ist keine Ganzzahl!",
                            },
                            {
                                required: true,
                                message: `Eingabe ${label} fehlt!`,
                            },
                        ],
                    })(<InputNumber placeholder={label} />)}
                </Form.Item>
            </Col>
        );
    }

    renderMailInputField = (isFirstCol: boolean = false, span: number = this.itemSpan) => {

        return (
            <Col span={span} >
                <Form.Item label="E-Mail" {...this.computeFormItemLayout(span)} labelAlign={isFirstCol ? "left" : "right"}>
                    {this.getFieldDecorator("email", {
                        rules: [
                            {
                                type: "email",
                                message: "Eingabe ist keine gültiger E- Mail - Adresse!",
                            },
                            {
                                required: true,
                                message: "Eingabe E-Mail-Adresse fehlt!",
                            },
                        ],
                    })(<Input placeholder="E-Mail" />)}
                </Form.Item>
            </Col>
        );
    }

    renderSelectField = (label: string, key: string, values: string[], isFirstCol: boolean = false, span: number = this.itemSpan) => {
        return (
            <Col span={span} >
                <Form.Item label={label} {...this.computeFormItemLayout(span)} labelAlign={isFirstCol ? "left" : "right"}>
                    {this.getFieldDecorator(key, {
                        rules: [
                            {
                                required: true,
                                message: `Bitte ${label} auswählen!`
                            }
                        ],
                    })(
                        <Select placeholder={label}>
                            {values.map((value: string, index: number) => (<Option value={value}>{value}</Option>))}
                        </Select>,
                    )}
                </Form.Item>
            </Col>
        );
    }

    renderDateField = (label: string, key: string, isFirstCol: boolean = false, span: number = this.itemSpan) => {
        return (
            <Col span={span} >
                <Form.Item label={label} {...this.computeFormItemLayout(span)} labelAlign={isFirstCol ? "left" : "right"}>
                    {this.getFieldDecorator(key, {
                        rules: [
                            {
                                required: true,
                                message: `Bitte ${label} auswählen!`
                            }
                        ],
                    })(
                        <DatePicker placeholder={label} />
                    )}
                </Form.Item>
            </Col>
        );
    }

    renderEmptyField = (span: number = this.itemSpan) => {
        return (
            <Col span={span} >
                <Form.Item>
                    <p style={{ width: "100%", height: "30px", visibility: "hidden" }}></p>
                </Form.Item>
            </Col>
        );
    }

    computeFormItemLayout = (span: number) => {
        let formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        };
        if (span === 16) {
            formItemLayout.labelCol = { span: 3 };
            formItemLayout.wrapperCol = { span: 21 };
        }

        return formItemLayout;
    }

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const values = this.props.form.getFieldsValue();
        alert("onSubmit: " + JSON.stringify(values));
    }
}

export const FormContent = Form.create({ name: 'form_content' })(FormContentImpl);