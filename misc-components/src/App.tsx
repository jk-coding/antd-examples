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
import { string } from 'prop-types';

const { Header, Footer, Sider, Content } = Layout;


type AppState = {
  content: string,
};

type AppProps = {
};

type ContentItem = {
  path: string,
  component: JSX.Element
}


class App extends React.Component<AppProps, AppState> {
  private contentMap: Map<string, ContentItem> = new Map<string, ContentItem>([
    ["form", { path: "Inhalt/Formular", component: <FormContent /> }],
    ["cards", { path: "Inhalt/Karten", component: <Cards /> }],
    ["table", { path: "Inhalt/Tabelle", component: <TableContent /> }],
    ["tabs", { path: "Inhalt/Tabs", component: <TabContent /> }],
    ["home", { path: "Home", component: <Home /> }]
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
            <Title style={{}} level={3}>ANT Design Layout</Title>
          </Header>
          <Layout>
            <Sider style={{}}>
              <Menu mode="inline" defaultSelectedKeys={["home"]} onSelect={this.onMenuItemSelected}
                defaultOpenKeys={["content"]}>
                <Menu.Item key="home">{<span><Icon type="home" />Home</span>}</Menu.Item>
                <SubMenu key="content" title={<span> <Icon type="database" />
                  Inhalt</span>}>
                  <Menu.ItemGroup>
                    <Menu.Item key="form">Formular</Menu.Item>
                    <Menu.Item key="table">Tabelle</Menu.Item>
                    <Menu.Item key="tabs">Tabs</Menu.Item>
                    <Menu.Item key="cards">Karten</Menu.Item>
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

  renderContent = () => {
    const contentItem = this.contentMap.get(this.state.content);

    if (contentItem != undefined) {
      return (contentItem.component);
    }
    else {
      return (<div></div>);
    }
  }

  renderBreadcrumb = () => {
    const contentItem = this.contentMap.get(this.state.content);

    if (contentItem != undefined) {
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
