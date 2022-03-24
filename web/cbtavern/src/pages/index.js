import * as React from "react"
import {graphql} from 'gatsby'

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <main >
      hello worldss
    </main>
  )
}

export default IndexPage


export const query = graphql`
  {
    allSanityPost {
      nodes {
        _rawBody
        _rawSlug
        title
      }
    }
  }
`;