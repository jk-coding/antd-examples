
import React from "react";
import "antd/dist/antd.css";

import { Select, Icon, Divider, ConfigProvider } from "antd";

const { Option } = Select;

type State = {
  input: string;
  items: string[];
};

export class SelectAdd extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      input: "",
      items: ["Eintrag A", "Eintrag B", "Eintrag C"]
    };
  }

  render() {
    let selectProps = {
      showSearch: true,
      style: {
        width: 300
      },
      placeholder: "Eintrag auswählen",
      optionFilterProp: "children",
      allowClear: true,
      onSearch: this.onInput,
      onSelect: this.onSelect,
      filterOption: (input: string, option: any) =>
        option.props.children
          .toString()
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0,
      dropdownRender: this.renderDropdown
    };

    return (
      <ConfigProvider renderEmpty={this.renderNoMatch}>
        <Select {...selectProps}>
          {this.state.items.map((item: string) => (
            <Option value={item}>{item}</Option>
          ))}
        </Select>
      </ConfigProvider>
    );
  }

  renderDropdown = (items: any) => {
    let input: string = this.state.input;

    if (input.length > 0 && this.state.items.indexOf(input) < 0) {
      return (
        <div>
          {items}
          <Divider style={{ margin: "4px 0" }} />
          <div
            style={{
              padding: "4px 8px",
              cursor: "pointer",
              backgroundColor: "royalblue"
            }}
            onMouseDown={e => e.preventDefault()}
            onClick={this.addItem}
          >
            <Icon type="plus-circle" style={{ fontSize: "22px", color: "white", marginRight: 5 }} theme="twoTone" />
            <span style={{ color: "white", marginRight: 5 }}> Eintrag erstellen: </span>
            <span style={{ color: "white" }}> {this.state.input} </span>
          </div>
        </div>
      );
    } else {
      return <div>{items}</div>;
    }
  };

  renderNoMatch = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <Icon type="info-circle" />
        <span style={{ marginLeft: 5 }}>Keine Einträge vorhanden, <br />die zur Eingabe passen!</span>
      </div>
    );
  }

  onInput = (input: string) => {
    if (input.length > 0) {
      this.setState({ input });
    }
    else {
      this.setState({ input: "" });
    }
  };

  onSelect = (value: any) => {
    alert("Eintrag öffnen: " + value);
  };

  addItem = () => {
    let input: string = this.state.input;
    alert("Neuer Eintrag: " + input);
    let newItems = this.state.items.concat(input);
    this.setState({ items: newItems });
  };
}


