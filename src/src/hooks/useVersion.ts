import useSWR from 'swr'
import { DataFetcher } from '@/types'
import { fetchWithToken } from '@/lib/fetchWithToken'

export const useVersion = (token: string, realm: string): DataFetcher<string> => {
  const { data, error } = useSWR<string>(
    () =>
      token && realm ? [`${process.env.NEXT_PUBLIC_API_BASE_URL}/version`, token, realm] : null,
    fetchWithToken
  )
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
