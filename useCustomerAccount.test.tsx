
import { renderHook } from '@testing-library/react-hooks';
import { useCustomerAccount } from '@/hooks/useCustomerAccount'
import * as SWR from 'swr'
import { fetchWithToken } from '@/lib/fetchWithToken'

jest.spyOn(SWR, 'default')
jest.mock('@/lib/fetchWithToken')

const mockUseFetchWithToken = fetchWithToken as jest.MockedFunction<typeof fetchWithToken>
const token = '19Gd2g3!32d'
const realm = 'ox'
const response = { id: 2, name: 'name' }
mockUseFetchWithToken.mockResolvedValueOnce({
   response
})
describe('mockUseCustomerAccount hook', () => {

  it('should call fetchWithToken and return loading', async()=> {
    const {result} = renderHook(()=>
      useCustomerAccount(token, realm));
      
    expect(SWR.default).toBeCalled()
    expect(result.current.isLoading).toEqual(true)
  })

  it('should return account', async()=> {
    const {result} = renderHook(()=>
      useCustomerAccount(token, realm));
    expect(result.current.data['response']).toEqual(response)
    expect(result.current.isError).toEqual(undefined)
  })

})