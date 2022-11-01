import { definitions } from '@/types'
import axios from 'axios'

export const deletePatient = async (
  patientId: definitions['Patient']['patientId'],
  token: string,
  realm: string
): Promise<void> => {
  return patientId && token && realm
    ? await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/patients/${patientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      })
    : Promise.reject('either token, patientId, or realm missing.')
}
