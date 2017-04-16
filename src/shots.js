import { request } from './main'

export default {
  list: (params) => {
    const SCHEMA = {
      uri: `/shots`,
      method: 'GET',
      qs: params
    }
    return request(SCHEMA)
  },
  get: (id) => {
    const SCHEMA = {
      uri: `/shots/${id}`,
      method: 'GET'
    }
    return request(SCHEMA)
  },
  create: (params) => {
    const SCHEMA = {
      uri: `/shots`,
      method: 'POST',
      body: params
    }
    return request(SCHEMA)
  },
  update: (id, params) => {
    const SCHEMA = {
      uri: `/shots/${id}`,
      method: 'PUT',
      body: params
    }
    return request(SCHEMA)
  },
  delete: (id) => {
    const SCHEMA = {
      uri: `/shots/${id}`,
      method: 'DELETE'
    }
    return request(SCHEMA)
  },
  Attachments: {
    list: (id) => {
      const SCHEMA = {
        uri: `/shots/${id}/attachments`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    get: (id, attachmentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/attachments/${attachmentID}`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    create: (id, params) => {
      const SCHEMA = {
        uri: `/shots/${id}/attachments`,
        method: 'POST',
        body: params
      }
      return request(SCHEMA)
    },
    update: (id, attachmentID, params) => {
      const SCHEMA = {
        uri: `/shots/${id}/attachments/${attachmentID}`,
        method: 'PUT',
        body: params
      }
      return request(SCHEMA)
    },
    delete: (id, attachmentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/attachments/${attachmentID}`,
        method: 'DELETE'
      }
      return request(SCHEMA)
    }
  },
  Buckets: {
    list: (id) => {
      const SCHEMA = {
        uri: `/shots/${id}/buckets`,
        method: 'GET'
      }
      return request(SCHEMA)
    }
  },
  Comments: {
    list: (id) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    likes: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments/${commentID}/likes`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    create: (id, params) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments`,
        method: 'POST',
        body: params
      }
      return request(SCHEMA)
    },
    get: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments/${commentID}`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    update: (id, commentID, params) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments/${commentID}`,
        method: 'PUT',
        body: params
      }
      return request(SCHEMA)
    },
    delete: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments/${commentID}`,
        method: 'DELETE'
      }
      return request(SCHEMA)
    },
    liked: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments/${commentID}/like`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    like: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments/${commentID}/like`,
        method: 'POST'
      }
      return request(SCHEMA)
    },
    unlike: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/comments/${commentID}/like`,
        method: 'DELETE'
      }
      return request(SCHEMA)
    }
  },
  Likes: {
    list: (id) => {
      const SCHEMA = {
        uri: `/shots/${id}/likes`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    liked: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/like`,
        method: 'GET'
      }
      return request(SCHEMA)
    },
    like: (id, commentID) => {
      const SCHEMA = {
        uri: `/shots/${id}/like`,
        method: 'POST'
      }
      return request(SCHEMA)
    },
    unlike: (id) => {
      const SCHEMA = {
        uri: `/shots/${id}/like`,
        method: 'DELETE'
      }
      return request(SCHEMA)
    }
  },
  Projects: {
    list: (id) => {
      const SCHEMA = {
        uri: `/shots/${id}/projects`,
        method: 'GET'
      }
      return request(SCHEMA)
    }
  },
  Rebounds: {
    list: (id) => {
      const SCHEMA = {
        uri: `/shots/${id}/rebounds`,
        method: 'GET'
      }
      return request(SCHEMA)
    }
  }
}
