import React from 'react';
import TodoList from './todo-list';

export default class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
  }

  onChange = (e) => {
    this.setState({text: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let {items, text} = this.state;
    let nextItems = items.concat([{text: text, id: Date.now()}]);
    this.setState({items: nextItems, text: ''});
  };

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text}/>
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

