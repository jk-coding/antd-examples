import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export class TabContent extends React.Component {

    render() {
        return (
            <Tabs>
                <TabPane tab="Tab 1" key="tab1">
                    Inahlt Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="tab2">
                    Inhalt Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="tab3">
                    Inhalt Tab 3
                </TabPane>
            </Tabs>
        );
    }
}