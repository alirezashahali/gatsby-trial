import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
`

export default ({ data }) => {
  console.log(data)

  return (<Layout>
    <SEO title="Home" />
    <h1>Your king's thought</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {
      data.allMarkdownRemark.edges.map(({node}) => {

        return (<div key={node.id}>
          <BlogLink to={node.fields.slug}><BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle></BlogLink>
          <p>{node.excerpt}</p>
        </div>)
      }
      )
    }
  </Layout>)
}

// export default IndexPage

export const query = graphql`
  query{
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`