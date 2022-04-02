import * as React from "react";
import { graphql } from "gatsby";

// component imports
import Layout from "../components/layout/Layout.js";

const IndexPage = ({ data }) => {
  console.log(data);
  return <Layout />;
};

export default IndexPage;

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
