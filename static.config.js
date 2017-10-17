/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { createClient } from 'contentful'
import { ServerStyleSheet } from 'styled-components'
import { orderBy } from 'lodash'

const client = createClient({
  space: 'vb4rmsfspnzi',
  accessToken: '1092e2e8a002dac8f09f3de5e6d3a00c0a15c1044ea189484a4e0f0974f34cd6',
})

export default {
  // siteRoot: 'https://www.stoxseo.com', uncomment this when you launch
  getSiteProps: async () => {
    const res = await client.getEntries({
      content_type: 'info',
      limit: 1000,
    })
    return {
      ...res.items[0].fields,
    }
  },
  getRoutes: async () => {
    const pages = await client.getEntries({
      content_type: 'page',
      limit: 1000,
    })
    const talks = await client.getEntries({
      content_type: 'talks',
      limit: 1000,
    })
    const writings = await client.getEntries({
      content_type: 'writing',
      limit: 1000,
    })
    const researches = await client.getEntries({
      content_type: 'research',
      limit: 1000,
    })

    return [
      {
        path: '/',
        getProps: () => ({
          page: pages.items[0].fields,
          talks: orderBy(talks.items, [d => d.fields.date], ['desc']),
          writings: orderBy(writings.items, [d => d.fields.date], ['desc']),
          researches: orderBy(researches.items, [d => d.fields.date], ['desc']),
        }),
        component: 'src/containers/Home',
      },
    ]
  },
  Html: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, siteProps } = this.props

      const sheet = new ServerStyleSheet()
      const newChildren = sheet.collectStyles(children)
      const styleTags = sheet.getStyleElement()

      return (
        <Html>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={siteProps.metaDescription} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','${siteProps.googleTagManagerId}');
             `,
              }}
            />
            {styleTags}
          </Head>
          <Body>
            <noscript>
              <iframe
                title="google-tag-manager"
                src={`https://www.googletagmanager.com/ns.html?id=${siteProps.googleTagManagerId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            {newChildren}
          </Body>
        </Html>
      )
    }
  },
}
