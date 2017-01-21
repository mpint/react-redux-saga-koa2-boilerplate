import React from 'react';
import renderer from 'react-test-renderer';

import { ConfiguredProvider, wrapWithContext, store, muiTheme, config, router } from '~/lib/test.helpers';

import AppRoot from '../AppRoot';

describe('AppRoot', function() {
  const contextTypes = { muiTheme: React.PropTypes.object, config: React.PropTypes.object, router: React.PropTypes.object };

  it('should render', function() {
    const component = renderer.create(
      wrapWithContext(
        { muiTheme, config, router },
        contextTypes,
        <ConfiguredProvider>
          <AppRoot />
        </ConfiguredProvider>
      )
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
