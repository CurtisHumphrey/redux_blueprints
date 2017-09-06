import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'

import './<%= pascalEntityName %>View.scss'

export const selectors = {}
export const actions = {}

const mapStateToProps = createStructuredSelector(selectors)

export class <%= pascalEntityName %>View extends React.PureComponent {
  static propTypes = {
  };

  render () {
    return (
      <div styleName='root'>
        <Helmet
          title={'<%= pascalEntityName %>'}
          meta={[{
            name: 'description',
            content: 'content',
          }]}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(<%= pascalEntityName %>View)
