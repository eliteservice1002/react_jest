import { definitions, operations } from '@/types'
import axios from 'axios'

type Response = operations['createPatientAnnotation']['responses']['200']['schema']
export const postPatientAnnotation = async (
  patientAnnotation: definitions['PatientAnnotation'],
  token: string,
  realm: string
): Promise<Response> => {
  if (token && patientAnnotation && realm) {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/patient-annotations`,
      patientAnnotation,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      }
    )
    return res.data
  }

  return Promise.reject('either token, patientAnnotation or realm is missing.')
}
