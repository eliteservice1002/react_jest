import { definitions, operations } from '@/types'
import axios from 'axios'

type Response = operations['updatePatient']['responses']['200']['schema']

export const updatePatient = async (
  patientId: definitions['Patient']['patientId'],
  patientInfo: definitions['Patient'],
  token: string,
  realm: string
): Promise<Response> => {
  if (patientId && patientInfo && token && realm) {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/patients/${patientId}`,
      patientInfo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      }
    )
    return res.data
  }

  return Promise.reject('either token, patientId, or realm is missing.')
}
