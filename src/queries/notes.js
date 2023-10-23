import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query {
    notes {
      id
      name
      content
      user {
        id
      }
    }
  }
  `

export const GET_NOTE = gql`
  query($id: ID!) {
    note(id: $id) {
      id
      name
      content
      user {
        id
      }
    }
  }
  `
export const CREATE_NOTE = gql`
  mutation NoteCreate($name: String!, $content: [String!]!, $userId: Int!) {
    noteCreate(
      input: { 
        noteInput: {
          name: $name
          content: $content
          userId: $userId
        }
      })
      {
        note {
          id
          name
          content
          user {
            id
          }
        }
      }
  }
  `

export const UPDATE_NOTE = gql`
  mutation NoteUpdate($id: ID!, $name: String!, $content: [String!]!, $userId: Int!) {
    noteUpdate(
      input: { 
        id: $id
        noteInput: {
          name: $name
          content: $content
          userId: $userId
        }
      })
      {
        note {
          id
          name
          content
          user {
            id
          }
        }
      }
  }
  `

export const DELETE_NOTE = gql`
   mutation NoteDelete($id: ID!) {
      noteDelete(
        input: { 
          id: $id
        })
        {
          note {
            id
            name
            content
            user {
              id
            }
          }   
        }
  }
  `