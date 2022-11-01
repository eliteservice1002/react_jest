import { definitions } from '@/types'
import axios from 'axios'

export const deleteUnit = (
  unitId: definitions['Unit']['unitId'],
  token: string,
  realm: string
): Promise<void> => {
  return unitId && token && realm
    ? axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/units/${unitId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      })
    : Promise.reject('either token, unitId or realm is missing.')
}
