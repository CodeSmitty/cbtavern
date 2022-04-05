import React from 'react'
import { graphql } from "gatsby";   
import Layout from "../components/layout/Layout"
import MenuItem from "../components/menuItem/MenuItem"

function menu({data}) {
    const appetizer = data.allSanityMenu.nodes.filter(item => item?.categories[0].title.includes("Appetizer"))
    const sandwiches = data.allSanityMenu.nodes.filter((item) =>
      item?.categories[0].title.includes("Hot Sandwiches")
    );
  return (
    <Layout>
      <MenuItem item={appetizer} category={"Appetizer"} />
      <MenuItem item={sandwiches} category={"Hot Sandwiches"} />
    </Layout>
  );
}

export default menu
export const query = graphql`
  {
    allSanityMenu {
      nodes {
        title
        price
        _rawSlug
        _id
        _key
        categories {
          title
        }
        _rawMealItemDescription
      }
    }
  }
`;