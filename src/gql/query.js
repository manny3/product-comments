import { gql } from '@apollo/client';

const GET_PRODUCT_COMMENTS = gql`
    query { 
      product_comments(first: 10,page: 1) {
        data {
          product{
            id
            name
          } 
          comment 
          star
          created_at
        }
      }
    }
`

const GET_PRODUCT = gql`
    query($id: ID!) { 
      product(id: $id) {
        id
        name
        price
        description
        created_at
      }
    }
`

const GET_USERS = gql`
    query { 
      users(first: 10,page: 1) {
        data {
          id
          name
        }
        paginatorInfo {
          count
          currentPage
        }
      }
    }
`

const GET_USER = gql`
  query($id: ID!) { 
    user(id: $id) {
      name
      phone
      email
      created_at
    }
  }
`

const GET_USER_COMMENTS = gql`
  query($id: ID!) { 
    user(id: $id) {
      name
      product_comments {
        product{
          id
          name
        } 
        comment 
        star
      } 
    }
  }
`

export {
  GET_PRODUCT_COMMENTS,
  GET_PRODUCT,
  GET_USERS,
  GET_USER,
  GET_USER_COMMENTS
};