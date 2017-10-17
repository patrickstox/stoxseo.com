import React from 'react'
import styled from 'styled-components'
import Smackdown from 'react-smackdown'
//

const syntax = {}

const El = ({ source, ...rest }) => (
  <div {...rest}>
    <Smackdown syntax={syntax} source={source} />
  </div>
)

export default styled(El)`
  img {
    display: block;
    margin: 1rem auto;
    max-width: 100%;
  }
`
