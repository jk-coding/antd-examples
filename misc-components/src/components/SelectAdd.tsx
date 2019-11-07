
import React from "react";
import "antd/dist/antd.css";

import { Select, Icon, Divider } from "antd";

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
      items: ["Item A", "Item B", "Item C"]
    };
  }

  render() {
    let selectProps = {
      showSearch: true,
      style: {
        width: 200
      },
      placeholder: "Select an item",
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
      <Select {...selectProps}>
        {this.state.items.map((item: string) => (
          <Option value={item}>{item}</Option>
        ))}
      </Select>
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
              backgroundColor: "lightblue"
            }}
            onMouseDown={e => e.preventDefault()}
            onClick={this.addItem}
          >
            <Icon type="plus" /> Add item:  {this.state.input}
          </div>
        </div>
      );
    } else {
      return <div>{items}</div>;
    }
  };

  onInput = (input: string) => {
    if (input.length > 0) {
      this.setState({ input });
    } else {
      this.setState({ input: "" });
    }
  };

  onSelect = (value: any) => {
    alert("Open item: " + value);
  };

  addItem = () => {
    let input: string = this.state.input;
    alert("Add new item: " + input);
    let newItems = this.state.items.concat(input);
    this.setState({ items: newItems });
  };
}


