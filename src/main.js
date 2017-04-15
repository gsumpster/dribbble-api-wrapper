import rp from 'request-promise'

import { DRIBBLE_ENDPOINT } from './constants'

import Bucket from './buckets'

const client = {
  token: '',
  Bucket
}

export function request (options) {
  options.uri = `https://${DRIBBLE_ENDPOINT}${options.uri}`
  options.headers = { Authorization: `Bearer ${client.token}` }
  options.json = true
  return rp(options)
}

export default function (token) {
  client.token = token
  return client
}
