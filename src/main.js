import rp from 'request-promise'

import { DRIBBLE_ENDPOINT } from './constants'

import Bucket from './buckets'
import Projects from './projects'
import Shots from './shots'
import Teams from './teams'

const client = {
  token: '',
  Bucket,
  Projects,
  Shots,
  Teams
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
