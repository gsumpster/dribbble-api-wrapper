import { request } from './main'

export default {
  get: (id) => {
    const SCHEMA = {
      uri: `/buckets/${id}`,
      method: 'GET'
    }
    return request(SCHEMA)
  },
  create: (params) => {
    const SCHEMA = {
      uri: `/buckets`,
      method: 'POST',
      body: params
    }
    return request(SCHEMA)
  },
  update: (id, params) => {
    const SCHEMA = {
      uri: `/buckets/${id}`,
      method: 'PUT',
      body: params
    }
    return request(SCHEMA)
  },
  delete: (id) => {
    const SCHEMA = {
      uri: `/buckets/${id}`,
      method: 'DELETE'
    }
    return request(SCHEMA)
  },
  Shots: {
    list: (id) => {
      const SCHEMA = {
        uri: `/buckets/${id}/shots`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    add: (id, shotID) => {
      const SCHEMA = {
        uri: `/buckets/${id}/shots`,
        method: 'PUT'
      }
      return request(SCHEMA)
    },
    remove: (id, shotID) => {
      const SCHEMA = {
        uri: `/buckets/${id}/shots`,
        method: 'DELETE'
      }
      return request(SCHEMA)
    }
  }
}
