import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

const style = {
  dropdownStyle: {
    border: "2px solid red",
  }
};

const onClick = (item) => {
  message.info("Click on item: " + item.key);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="once">
      Once
    </Menu.Item>
    <Menu.Item key="sometimes">
      Sometimes
    </Menu.Item>
    <Menu.Item key="always">
      Allways
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div >
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button  style={style.dropdownStyle}>
        immer öfters <Icon type="down" />
      </Button>
    </Dropdown>
  </div>,
  document.getElementById('container'),
);
          