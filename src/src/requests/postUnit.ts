import { definitions, operations } from '@/types'
import axios from 'axios'

type Response = operations['createUnit']['responses']['200']['schema']

export const postUnit = async (
  name: definitions['Unit']['name'],
  token: string,
  realm: string
): Promise<Response> => {
  if (name && token && realm) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/units`,
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      }
    )
    return res.data
  }

  return Promise.reject('either token, name or realm is missing.')
}
