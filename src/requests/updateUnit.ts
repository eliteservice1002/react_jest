import { definitions, operations } from '@/types'
import axios from 'axios'

type Response = operations['updateUnit']['responses']['200']['schema']

export const updateUnit = async (
  unitId: definitions['Unit']['unitId'],
  unit: definitions['Unit'],
  token: string,
  realm: string
): Promise<Response> => {
  if (unitId && unit && token && realm) {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/units/${unitId}`, unit, {
      headers: {
        Authorization: `Bearer ${token}`,
        Realm: realm,
      },
    })
    return res.data
  }

  return Promise.reject('either token, unitId, unit or realm is missing.')
}
