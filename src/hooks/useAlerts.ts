import useSWR from 'swr'
import { definitions, DataFetcher } from '@/types'
import { fetchWithToken } from '@/lib/fetchWithToken'

export const useAlerts = (
  patientId: definitions['Patient']['patientId'],
  token: string,
  realm: string
): DataFetcher<definitions['ArrayOfAlerts']> => {
  const { data, error } = useSWR<definitions['ArrayOfAlerts']>(
    () =>
      patientId && token && realm
        ? [`${process.env.NEXT_PUBLIC_API_BASE_URL}/alerts?patient-id=${patientId}`, token, realm]
        : null,
    fetchWithToken
  )
  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  }
}
