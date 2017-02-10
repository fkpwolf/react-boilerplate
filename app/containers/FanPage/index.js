/*
 *
 * FanPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class FanPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="FanPage"
          meta={[
            { name: 'description', content: 'Description of FanPage' },
          ]}
        />
        <div>新的页面哦！不错吧。使用 <code> npm run generate </code> 生成。</div>
      </div>
    );
  }
}

FanPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(FanPage);
