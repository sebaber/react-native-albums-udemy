import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
  }

  keyExtractor = (item) => item.uid;

  renderItem(employee) {
    return <ListItem employee={employee.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.values(_.map(state.employees, (val, uid) => {
    return { ...val, uid };
  }));

  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
