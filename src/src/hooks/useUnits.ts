import useSWR, { mutate } from 'swr'
import { definitions, DataFetcher } from '@/types'
import { fetchWithToken } from '@/lib/fetchWithToken'

const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/units`

export const useUnits = (
  token: string,
  realm: string
): DataFetcher<definitions['ArrayOfUnits']> => {
  const { data, error } = useSWR<definitions['ArrayOfUnits']>(
    () => (token && realm ? [url, token, realm] : null),
    fetchWithToken
  )
  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  }
}

export type NewUnitsFunction = (cached: definitions['ArrayOfUnits']) => definitions['ArrayOfUnits']

export const mutateLocalUnits = (
  newUnits: definitions['ArrayOfUnits'] | NewUnitsFunction,
  token: string,
  realm: string
): void => {
  mutate([url, token, realm], newUnits, false)
}

export const revalidateUnits = (token: string, realm: string): Promise<void> =>
  mutate([url, token, realm])
