import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '~/modules/common/state/common.ducks';
import { textCenterStyle } from '~/styles/inline';

import TextComponent from '~/modules/common/components/TextComponent';

class MainPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    const verticalCenterStyle = { marginTop: this.context.viewportHeight / 2 };
    const { config } = this.context;

    return (
      <div style={ { ...verticalCenterStyle, ...textCenterStyle } }>

        <h2> { config.pages.main.title } </h2>

        <TextComponent
          content={ 'Jacked up and good to go...' } />
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
