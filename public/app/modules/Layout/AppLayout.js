// @flow
import React, { Component } from 'react';
import { Layout, Panel, ProgressBar } from 'react-toolbox';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Header from './components/Header';
import Notification from './components/Notification';
import styles from '../../styles';

const AppLayoutStyles = require('./styles/AppLayout.scss');

class AppLayout extends Component {
  static displayName = 'AppLayout';

  render() {
    const { children, loaded } = this.props;
    const className = classnames(styles['c-container'], styles['c-container__center'], styles['c-container__large-padding']);
    return (
      <div className={ AppLayoutStyles.layout }>
        <Header />
        <Layout>
          <Panel>
            <div>
              <div className={ className }>
                { loaded ? children : (<ProgressBar mode="indeterminate" type="circular" multicolor />) }
              </div>
            </div>
          </Panel>
        </Layout>
        <Notification />
      </div>
    );
  }
}

const mapStatesToProps = ({ persist: { loaded } }) => ({
  loaded
});

export default connect(mapStatesToProps)(AppLayout);
