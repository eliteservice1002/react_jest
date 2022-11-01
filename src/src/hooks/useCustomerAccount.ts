import useSWR from 'swr'
import { definitions, DataFetcher } from '@/types'
import { fetchWithToken } from '@/lib/fetchWithToken'

export const useCustomerAccount = (
  token: string,
  realm: string
): DataFetcher<definitions['CustomerAccount']> => {
  const { data, error } = useSWR<definitions['CustomerAccount']>(
    () =>
      token && realm
        ? [`${process.env.NEXT_PUBLIC_API_BASE_URL}/customer-accounts`, token, realm]
        : null,
    fetchWithToken
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
