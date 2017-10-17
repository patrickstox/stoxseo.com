import React from 'react'
import { getRouteProps } from 'react-static'
import styled from 'styled-components'
import { format } from 'date-fns'
//
// import Heading from 'components/Heading'
import SubHeading from 'components/SubHeading'
import Markdown from 'components/Markdown'

import Theme from 'utils/Theme'

const Styles = styled.div`
  .featuredImage {
    float: right;
    width: 300px;
    max-width: 50%;
    height: auto;
    margin: 0 0 1rem 1rem;
    border-radius: 0.5rem;
    border: solid 3px white;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);
  }
`

const PostPreviewList = styled.div`
  .post {
    margin: 0 0 3rem 0;
    display: flex;
    .date {
      color: #404040;
      font-weight: bold;
      text-align: right;
      flex: 0 0 auto;
      width: 100px;
      margin-right: 1rem;
    }
    .title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .content {
      padding-left: 1rem;
      border-left: solid 3px ${Theme.colors.success};
    }
    @media (max-width: 600px) {
      flex-direction: column;
      .date {
        text-align: left;
        margin-bottom: 0.5rem;
      }
    }
  }
`

const Button = styled.button`
  background: ${Theme.colors.primary};
  font-size: 0.8rem;
  padding: 0.2rem 0.7rem;
  appearance: none;
  border: 0;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease-out;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 0 ${Theme.colors.primaryDark}, 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 1px 0 ${Theme.colors.primaryDark}, 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`

export default getRouteProps(({ page, talks, writings, researches }) => (
  <Styles>
    <img id="about" className="featuredImage" src={page.featuredImage.fields.file.url} alt="" />
    <Markdown source={page.body} />

    <SubHeading id="talks" style={{ clear: 'both' }}>
      Latest Talks
    </SubHeading>
    <PostPreviewList>
      {talks.map(entry => (
        <div className="post" key={entry.sys.id}>
          <div className="date">{format(entry.fields.date, 'MMM, YYYY')}</div>
          <div className="content">
            <h3 className="title">{entry.fields.title}</h3>
            <p>
              <a href={entry.fields.linkUrl} target="_blank">
                <Button>View Talk</Button>
              </a>
            </p>
            {entry.fields.body && <Markdown source={entry.fields.body} />}
          </div>
        </div>
      ))}
    </PostPreviewList>

    <SubHeading id="writings">Latest Writings</SubHeading>
    <PostPreviewList>
      {writings.map(entry => (
        <div className="post" key={entry.sys.id}>
          <div className="date">{format(entry.fields.date, 'MMM, YYYY')}</div>
          <div className="content">
            <h3 className="title">{entry.fields.title}</h3>
            <p>
              <a href={entry.fields.linkUrl} target="_blank">
                <Button>View Writing</Button>
              </a>
            </p>
            {entry.fields.body && <Markdown source={entry.fields.body} />}
          </div>
        </div>
      ))}
    </PostPreviewList>

    <SubHeading id="research">Latest Research</SubHeading>
    <PostPreviewList>
      {researches.map(entry => (
        <div className="post" key={entry.sys.id}>
          <div className="date">{format(entry.fields.date, 'MMM, YYYY')}</div>
          <div className="content">
            <h3 className="title">{entry.fields.title}</h3>
            <p>
              <a href={entry.fields.linkUrl} target="_blank">
                <Button>View Research</Button>
              </a>
            </p>
            {entry.fields.body && <Markdown source={entry.fields.body} />}
          </div>
        </div>
      ))}
    </PostPreviewList>
  </Styles>
))
