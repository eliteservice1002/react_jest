import useSWR from 'swr'
import { definitions, DataFetcher } from '@/types'
import { fetchWithToken } from '@/lib/fetchWithToken'

export const useBuildings = (
  token: string,
  realm: string
): DataFetcher<definitions['ArrayOfAssets']> => {
  const { data, error } = useSWR<definitions['ArrayOfAssets']>(
    () =>
      token && realm
        ? [`${process.env.NEXT_PUBLIC_API_BASE_URL}/assets?asset-type=building`, token, realm]
        : null,
    fetchWithToken
  )
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
