import React, { PropTypes, Component } from 'react';
import { isEmpty } from 'lodash';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }

  clearContent = () => {
    this.setState({ content: '' });
  }

  updateContent = (e, updated) => {
    this.setState({ content: updated });
  }

  addTodo = (e) => {
    e.preventDefault();
    this.props.onAddClick(this.state.content);
    this.clearContent();
  }

  deleteTodo = (index) => {
    console.log('index', index);
    this.props.onDeleteClick(index);
  }

  render () {
    const noTodosMessage = 'add some todos!';

    return (
      <div>
        <RaisedButton
          label={'add'}
          disabled={ !this.state.content }
          onClick={ this.addTodo }/>

        <div>
          <TextField
            name="todoContent"
            value={ this.state.content }
            placeholder="add a todo here"
            onChange={ this.updateContent }/>
        </div>

        <div>
          { isEmpty(this.props.content) ?
            noTodosMessage :
            <ol>
              { this.props.content.map((todo, index) =>(
                <li key={ todo }>
                  <span
                    style={{ marginRight: 10, color: 'yellow'}}
                    onClick={ this.deleteTodo.bind(undefined, index)}>
                      DELETE
                  </span>
                  <span>{ todo }</span>
                </li>
              ))}
            </ol>
          }
        </div>

    </div>
    );
  }
}

TodoList.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  content: PropTypes.array.isRequired
};

export default TodoList;
