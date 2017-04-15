import { request } from './main'

export default {
  get: (id) => {
    const SCHEMA = {
      uri: `/projects/${id}`,
      method: 'GET'
    }
    return request(SCHEMA)
  },
  Shots: {
    list: (id) => {
      const SCHEMA = {
        uri: `/projects/${id}/shots`,
        method: 'GET'
      }
      return request(SCHEMA)
    }
  }
}
