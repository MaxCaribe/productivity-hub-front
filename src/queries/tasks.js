import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query {
    tasks {
      id
      name
      due
      description
      user {
        id
      }
    }
  }
  `

export const GET_TASK = gql`
  query($id: ID!) {
    task(id: $id) {
      id
      name
      due
      description
      user {
        id
      }
    }
  }
  `
export const CREATE_TASK = gql`
  mutation NoteCreate($name: String!, $due: ISO8601Date!, $description: String! $userId: Int!) {
    taskCreate(
      input: { 
        taskInput: {
          name: $name
          due: $due
          description: $description
          userId: $userId
        }
      })
      {
        task {
          id
          name
          due
          description
          user {
            id
          }
        }
      }
    }
  `

export const UPDATE_TASK = gql`
  mutation NoteUpdate($id: ID!, $name: String!, $due: ISO8601Date!, $description: String! $userId: Int!) {
    taskUpdate(
      input: { 
        id: $id
        taskInput: {
          name: $name
          due: $due
          description: $description
          userId: $userId
        }
      })
      {
        task {
          id
          name
          due
          description
          user {
            id
          }
        }
      }
  }
  `

export const DELETE_TASK = gql`
  mutation NoteDelete($id: ID!) {
    taskDelete(
      input: { 
        id: $id
      })
      {
        task {
          id
          name
          due
          description
          user {
            id
          }
        }   
      }
  }
  `