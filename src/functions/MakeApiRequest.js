import { Values } from '../data'

import queryString from 'query-string'

export default function MakeApiRequest(endpoint, params) {
  let realEndpoint = endpoint
  // remove slash from start if one exists
  if (realEndpoint.startsWith('/')) realEndpoint = realEndpoint.substr(1)

  const fullUrlPath = `${Values.api.hostname}/${realEndpoint}`
  const paramsAsString = params ? queryString.stringify(params) : null

  const fullUrl = fullUrlPath + (paramsAsString ? `?${paramsAsString}` : '')

  return new Promise((resolve, reject) => {
    fetch(fullUrl)
      .then(response => {
        response
          .json(data => {
            resolve(data)
          })
          .catch(reject)
      })
      .catch(reject)
  })
}
