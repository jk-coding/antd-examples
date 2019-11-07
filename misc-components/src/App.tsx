import React, { MouseEvent } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb } from 'antd';

import Title from "antd/lib/typography/Title";
import SubMenu from 'antd/lib/menu/SubMenu';

import { FormContent } from "./components/FormContent";
import { Cards } from "./components/Cards";
import { TableContent } from "./components/TableContent";
import { TabContent } from "./components/TabContent";
import { Home } from "./components/Home";
import { SelectParam } from 'antd/lib/menu';
import { SelectAdd } from "./components/SelectAdd";

const { Header, Footer, Sider, Content } = Layout;


type AppState = {
  content: string,
};

type AppProps = {
};

type ContentItem = {
  name: string,
  parent?: string,
  path: string,
  component: JSX.Element
}


class App extends React.Component<AppProps, AppState> {
  private contentMap: Map<string, ContentItem> = new Map<string, ContentItem>([
    ["form", { name: "Formular", parent: "content", path: "Inhalt/Formular", component: <FormContent /> }],
    ["cards", { name: "Karten", parent: "content", path: "Inhalt/Karten", component: <Cards /> }],
    ["table", { name: "Tabelle", parent: "content", path: "Inhalt/Tabelle", component: <TableContent /> }],
    ["tabs", { name: "Tabs", parent: "content", path: "Inhalt/Tabs", component: <TabContent /> }],
    ["dropdown", { name: "Dropdown", parent: "content", path: "Inhalt/Dropdown", component: <SelectAdd /> }],
    ["home", { name: "Home", path: "Home", component: <Home /> }]
  ]);

  constructor(props: AppProps) {
    super(props);

    this.state = { content: "home" };
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ background: "lightblue", padding: 10 }}>
            <Avatar style={{ float: "right" }} icon="user" />
            <Title style={{}} level={3}>ANT Design Beispiel: verschiedene Komponenten</Title>
          </Header>
          <Layout>
            <Sider style={{}}>
              <Menu mode="inline" defaultSelectedKeys={["home"]} onSelect={this.onMenuItemSelected}
                defaultOpenKeys={["content"]}>
                <Menu.Item key="home">{<span><Icon type="home" />Home</span>}</Menu.Item>
                <SubMenu key="content" title={<span> <Icon type="database" />
                  Inhalt</span>}>
                  <Menu.ItemGroup>
                    {this.renderMenuItems("content")}
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ padding: "0 10px 0 10px" }}>
                <Breadcrumb style={{ margin: "10px" }}>
                  {this.renderBreadcrumb()}
                </Breadcrumb>
                {this.renderContent()}
              </Content>
              <Footer style={{ textAlign: "center" }}>ReacJS & Ant Design Beipiel</Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }

  renderMenuItems = (parent: string) => {
    let jsxElements: JSX.Element[] = [];
    this.contentMap.forEach((item: ContentItem, key: string) => {
      if (item.parent === parent) {
        jsxElements.push(<Menu.Item key={key}>{item.name}</Menu.Item>);
      }
    });

    return jsxElements;


  }

  renderContent = () => {
    const contentItem = this.contentMap.get(this.state.content);

    if (contentItem !== undefined) {
      return (contentItem.component);
    }
    else {
      return (<div></div>);
    }
  }

  renderBreadcrumb = () => {
    const contentItem = this.contentMap.get(this.state.content);

    if (contentItem !== undefined) {
      let items: string[] = contentItem.path.split("/");
      return (items.map((item: string, index: number) => (<Breadcrumb.Item>{item}</Breadcrumb.Item>)));
    }
    else {
      return (<div></div>);
    }

  }

  onMenuItemSelected = (selectParam: SelectParam) => {
    this.setState({ content: selectParam.key });
  };
}


export default App;
