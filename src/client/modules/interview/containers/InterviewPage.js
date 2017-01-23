import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '~/modules/interview/state/interview.ducks';
import TodoList from '~/modules/interview/components/TodoList';

import { textCenterStyle, uppercaseStyle } from '~/styles/inline';

class InterviewPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { config } = this.context;

    const verticalCenterStyle = { marginTop: this.context.viewportHeight / 2 };

    return (
      <div>
        <TodoList
          onAddClick={ this.props.actions.addTodoSaga }
          onDeleteClick={ this.props.actions.deleteTodoSaga }
          content={ this.props.interviewState.todoList } />

      </div>
    );
  }
}

InterviewPage.propTypes = {
  actions: PropTypes.object.isRequired,
  interviewState: PropTypes.object.isRequired
};

InterviewPage.contextTypes = {
  viewportHeight: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    interviewState: state.interviewAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterviewPage);
