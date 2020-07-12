import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ReadingListQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const ReadingListPage = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body, excerpt } = mdx

  return (
    <Layout className="page">
      <SEO title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default ReadingListPage
