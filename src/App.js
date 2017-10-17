import React from 'react'
import { Router, getSiteProps } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
//
import Routes from 'react-static-routes'
//
import Link from 'components/Link'
import Theme from 'utils/Theme'

injectGlobal`
  ${reset}
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${Theme.colors.primary};
    font-weight: bold;
  }

  iframe {
    width: 100%;
    resize: vertical;
    border: 0 !important;
  }
`

const AppStyles = styled.div`
  > .content {
    padding: 6rem 1rem 1rem 1rem;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    * {
      line-height: 1.6rem;
    }

    p {
      margin: 0 auto 1rem;
    }
  }
`

const Navbar = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: ${Theme.colors.primary};

  .contain {
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    padding: 0.5rem 1rem;
    .name {
      font-size: 1.8rem;
      color: white;
      font-weight: bold;
      flex: 0 0 auto;
      white-space: nowrap;
      margin-bottom: 0.2rem;
    }
    .byline {
      color: white;
      font-size: 0.8rem;
      font-weight: ;
    }
  }

  nav {
    width: 100%;
    text-align: right;

    a {
      color: white;
      opacity: 0.8;
      padding: 0.2rem 0.5rem;
      display: inline-block;

      :hover,
      &.active {
        opacity: 1;
      }
    }
  }
`

export default getSiteProps(({ siteTitle, siteByline }) => (
  <Router>
    <AppStyles>
      <Navbar>
        <div className="contain">
          <div className="logo">
            <div className="name">{siteTitle}</div>
            <div className="byline">{siteByline}</div>
          </div>
          <nav>
            <Link to="/#about">About</Link>
            <Link to="/#talks">Talks</Link>
            <Link to="/#writings">Writings</Link>
            <Link to="/#research">Research</Link>
          </nav>
        </div>
      </Navbar>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
))
