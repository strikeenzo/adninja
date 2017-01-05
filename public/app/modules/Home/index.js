import React from 'react';
import { connect } from 'react-redux';
import AdService from '../../services/AdService';
import Table from '../../components/Table';
import styles from './styles.scss';

export class Home extends React.Component {
  loadList = (...params) => {
    const service = new AdService(this.props.dispatch, this.props.state);
    return service.list(...params)
      .then((data) => {
        const list = data.rows.map((ad) => ({
          ...ad,
          // checkbox goes here
        }));

        return {
          ...data,
          rows: list
        };
      });
  }

  model = {
    adId: { sortable: false, title: 'ID' },
    Name: { sortable: true },
    Link: { sortable: true },
    Url: { sortable: true },
    active: { sortable: false }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            Left
          </div>
          <div className={styles.right}>
            right
          </div>
        </div>
        <Table model={ this.model } selectable={ false } onUpdate={ this.loadList } />
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({ state });

export default connect(mapStatesToProps)(Home);
