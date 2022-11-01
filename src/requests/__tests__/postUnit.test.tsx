import { postUnit } from '@/requests/postUnit'
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('request postUnit', () => {
  it('request should get valid params', async () => {
    const name = ''
    const token = ''
    const realm = ''
    const errorMessage = 'either token, name or realm is missing.'
    const error = postUnit(name, token, realm)

    await expect(error).rejects.toEqual(errorMessage)
  })

  it('request should succeed', async () => {
    const name = 'UnitA'
    const token = '7373g3j1llLs4'
    const realm = 'ox'
    const response = { data: ['UnitA'] }

    mockedAxios.post.mockImplementationOnce(() => Promise.resolve(response))

    const postResponse = await postUnit(name, token, realm)

    expect(postResponse).toEqual(response.data)
    expect(mockedAxios.post).toHaveBeenCalledTimes(1)
    expect(mockedAxios.post).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/units`,
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      }
    )
  })
})
