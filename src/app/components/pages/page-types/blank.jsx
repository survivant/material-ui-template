import React from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import {Mixins} from 'material-ui';
const {StylePropable, StyleResizable} = Mixins;

const HighchartsPage = React.createClass({

  propTypes: {
    onChangeMuiTheme: React.PropTypes.func,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  mixins: [StylePropable, StyleResizable],

  getInitialState() {
    return {
    };
  },

  getStyles() {
    let styles = {
      text: {
        fontSize: 12,
        color: this.context.muiTheme.rawTheme.palette.primary1Color
      }
    };

    // example of a screen-size sensitive style
    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM)) {  // active for >= MEDIUM
      styles.text.fontSize = 20;
    }

    return styles;
  },

  render() {
    let styles = this.getStyles()
    return (
      <p style={styles.text}>Blank page</p>
    )
  }

});

export default HighchartsPage;
