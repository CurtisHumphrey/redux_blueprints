import React from 'react'
// import PropTypes from 'prop-types'

import './<%= pascalEntityName %>.scss'

export class <%= pascalEntityName %> extends React.PureComponent {
  static propTypes = {
  };
  static defaultProps = {
  };

  render () {
    return (
      <div>Content</div>
    )
  }
}

export default <%= pascalEntityName %>
