import { request } from './main'

export default {
  Members: {
    list: {
      list: (id) => {
        const SCHEMA = {
          uri: `/teams/${id}/members`,
          method: 'GET'
        }
        return request(SCHEMA)
      }
    }
  },
  Shots: {
    list: {
      list: (id) => {
        const SCHEMA = {
          uri: `/teams/${id}/shots`,
          method: 'GET'
        }
        return request(SCHEMA)
      }
    }
  }
}
