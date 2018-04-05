import gql from 'graphql-tag'
// pages(first:2, where: {orderby: {field: MENU_ORDER, order: ASC}})
export const PAGE_QUERY = gql`
  query allPages{
    pages (where: {orderby: {field: MENU_ORDER, order: ASC}}){
      edges {
        node{
          id
          title
          content
          slug
          menuOrder
        }
      }
    }
  }
`
