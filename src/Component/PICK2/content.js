import React, { Component } from "react";
import { Sidebar, Menu, Grid, Segment } from "semantic-ui-react";

import WinningNumbers from '../PICK2/winning-numbers';
import HowToPlay from '../PICK2/how-to-play';

import './content.scss';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderTab: "winning-numbers",
      activeTab: "winning-numbers",
    };
  }

  changeTab(tabName) {
    this.setState({ renderTab: tabName });
    this.setState({ activeTab: tabName });
  }

  render() {
    const { renderTab, activeTab } = this.state;

    return (
      <div className='content-navigation'>
        <Sidebar.Pushable>
          <Grid.Column width={4}>
            <Menu horizontal="true" tabular className="contents-container">
              <Menu.Item
                className="contents-navigation-bar"
                onClick={() => this.changeTab("winning-numbers")}
                active={activeTab === "winning-numbers"}
                as="a"
                name="winning-numbers"
              >
                <strong>Winning Numbers</strong>
              </Menu.Item>

              <Menu.Item
              className="contents-navigation-bar"
              onClick={() => this.changeTab("how-to-play")}
              active={activeTab === "how-to-play"}
              as="a"
              name="how-to-play"
            >
              <strong>How to Play</strong>
            </Menu.Item>
            </Menu>

            <Sidebar.Pusher className="contents-segment">
              <Segment>
                <RenderedContent tabName={renderTab} />
              </Segment>
            </Sidebar.Pusher>
          </Grid.Column>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const RenderedContent = ({ tabName }) => {
  if (tabName === "winning-numbers") {
    return <WinningNumbers />;
  }
  if (tabName === "how-to-play") {
    return <HowToPlay />;
  }
};
