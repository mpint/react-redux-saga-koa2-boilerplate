import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '~/modules/common/state/common.ducks';
import { textCenterStyle } from '~/styles/inline';

import FlatButton from 'material-ui/FlatButton'
import TextComponent from '~/modules/common/components/TextComponent';

class MainPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { counter: 0 };
  }

  increment = (e) => {
    this.setState(
      { counter: ++this.state.counter }
    );
  }

  render () {
    const verticalCenterStyle = { marginTop: this.context.viewportHeight / 2 };
    const { config } = this.context;

    return (
      <div style={ { ...verticalCenterStyle, ...textCenterStyle } }>

        <h2> { config.pages.main.title } </h2>

        <TextComponent
          content={ 'Jacked up and good to go...' } />

        <br/>

        <TextComponent
          content={ this.state.counter || 0 } />

        <FlatButton onClick={ this.increment } label={ 'go up' } />
      </div>
    );
  }
}

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  commonState: PropTypes.object.isRequired
};

MainPage.contextTypes = {
  config: PropTypes.object.isRequired,
  viewportHeight: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    commonState: state.commonAppState
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
)(MainPage);
