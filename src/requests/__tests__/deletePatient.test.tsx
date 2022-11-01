import { deletePatient } from '@/requests/deletePatient'
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('request deletePatient', () => {
  it('request should get valid params', async () => {
    const patientId = ''
    const token = ''
    const realm = 'ox'
    const errorMessage = 'either token, patientId, or realm missing.'
    const error = deletePatient(patientId, token, realm)

    await expect(error).rejects.toEqual(errorMessage)
  })

  it('request should succeed', async () => {
    const patientId = '412'
    const token = '7373g3j1llLs4'
    const realm = 'ox'

    mockedAxios.delete.mockImplementationOnce(() => Promise.resolve())

    const deleteResponse = await deletePatient(patientId, token, realm)

    expect(deleteResponse).toEqual(undefined)
    expect(mockedAxios.delete).toHaveBeenCalledTimes(1)
    expect(mockedAxios.delete).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/patients/${patientId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      }
    )
  })
})
