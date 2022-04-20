import * as React from "react";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
// component imports
import Layout from "../components/layout/Layout.js";
import HeaderCorousel from "../components/headerCorousel/headerCorousel.js";
import Homepage from "./Homepage.js";
const IndexPage = ({data}) => {
  
  return <Layout data={data}>
    <HeaderCorousel data={data} />
    <Homepage />
     </Layout>;
};

export default IndexPage;


export const query = graphql`
  {
    allSanityGallery {
      nodes {
        display
        images {
          asset {
            gatsbyImageData
          }
          imageTitle
        }
      }
    }
  }
`;