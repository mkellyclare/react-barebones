import React from 'react';

export default class TodoList extends React.Component {
  render() {
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

function createItem(item) {
  return <li key={item.id}>{item.text}</li>;
}
