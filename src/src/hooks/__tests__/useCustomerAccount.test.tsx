import { fetchWithToken } from '@/lib/fetchWithToken'
import { useCustomerAccount } from '@/hooks/useCustomerAccount'

jest.mock('@/lib/fetchWithToken')

const mockUseFetchWithToken = fetchWithToken as jest.MockedFunction<typeof fetchWithToken>

describe('mockUseCustomerAccount hook', () => {
  it('should return a customer account', async () => {
    const token = '19Gd2g3!32d'
    const realm = 'ox'
    const response = { id: 2, name: 'name' }
    const url = 'https://test.com'

    mockUseFetchWithToken.mockResolvedValueOnce({
      data: response,
      isLoading: false,
      isError: false,
    })
    const fetchData = await fetchWithToken(url, token, realm)
    await expect(mockUseFetchWithToken).toBeCalledWith(url, token, realm)

    expect(mockUseFetchWithToken).toHaveBeenCalledTimes(1)
    console.log(fetchData)
    await expect(typeof fetchData).toBe('object')
  })
})
/* 


import { useCustomerAccount } from '@/hooks/useCustomerAccount'

jest.mock('@/lib/fetchWithToken.ts')

const mockUseCustomerAccount = useCustomerAccount as jest.MockedFunction<typeof useCustomerAccount>

describe('mockUseCustomerAccount hook', () => {
  it('should return a customer account', () => {
    const token = '19Gd2g3!32d'
    const realm = 'ox'
    const mockData = {
      id: 21,
      name: 'name',
    }

    mockUseCustomerAccount.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    })

    const fetchData = useCustomerAccount(token, realm)

    expect(mockUseCustomerAccount).toBeCalledTimes(1)
    expect(mockUseCustomerAccount).toBeCalledWith(token, realm)
    expect(fetchData.data).toBeInstanceOf(Object)
    expect(typeof fetchData.data.id).toEqual('number')
  })
})
 */
