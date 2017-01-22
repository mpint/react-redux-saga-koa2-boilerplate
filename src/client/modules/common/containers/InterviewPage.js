import React, { PropTypes, Component } from 'react';
import { textCenterStyle, uppercaseStyle } from '~/styles/inline';

class InterviewPage extends Component {
  constructor() {
    super();
  }

  render () {
    const { config } = this.context;

    const verticalCenterStyle = { marginTop: this.context.viewportHeight / 2 };
    return (
      <div style={ { ...verticalCenterStyle, ...textCenterStyle } }>
        Ok, lets go.
      </div>
    );
  }
}

InterviewPage.contextTypes = {
  viewportHeight: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired
};

export default InterviewPage;
