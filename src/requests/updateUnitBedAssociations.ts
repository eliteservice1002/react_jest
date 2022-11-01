import { definitions, operations } from '@/types'
import axios from 'axios'

type Response = operations['updateUnitBedAssociations']['responses']['200']['schema']

export const updateUnitBedAssociations = (
  unitId: definitions['Unit']['unitId'],
  bedIds: string[],
  token: string,
  realm: string
): Promise<Response> => {
  if (unitId && bedIds && token && realm) {
    return axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/unit-bed-associations/${unitId}`,
      bedIds,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      }
    )
  }

  return Promise.reject('either token, bedIds, unitId or realm is missing.')
}
