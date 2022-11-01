import { updatePatient } from '@/requests/updatePatient'
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('request updatePatient', () => {
  it('should get valid params', async () => {
    const patientId = null
    const patientInfo = null
    const token = ''
    const realm = 'ox'
    const errorMessage = 'either token, patientId, or realm is missing.'
    const error = updatePatient(patientId, patientInfo, token, realm)

    await expect(error).rejects.toEqual(errorMessage)
  })

  it('request should succeed', async () => {
    const token = 'dsf3saf33Haa0df3556'
    const patientId = '333'
    const realm = 'ox'
    const patientInfo = {
      id: 1,
      patientId: '333',
      firstName: 'Unit',
      lastName: 'Unit LN',
      healthSummary: {
        primaryDoctor: 'Lincoln',
        primaryNurse: 'Pablo',
      },
      tags: [
        {
          key: 'fall_risk',
          value: 'Medium',
        },
        {
          key: 'alert_sensitivity',
          value: 'BED_EXIT',
        },
      ],
    }
    const response = {
      data: [
        {
          id: 1,
          patientId: '333',
          firstName: 'Test',
          lastName: 'Test LN',
          dateOfBirth: '1900-03-27',
          sex: 'Male',
          unitId: '23444',
          bedId: '2443566',
          roomId: '86633',
          healthSummary: {
            primaryDoctor: 'Lincoln',
            primaryNurse: 'Pablo',
          },
          tags: [
            {
              key: 'fall_risk',
              value: 'Medium',
            },
            {
              key: 'alert_sensitivity',
              value: 'BED_EXIT',
            },
          ],
        },
      ],
    }

    mockedAxios.put.mockImplementationOnce(() => Promise.resolve(response))

    const updateResponse = await updatePatient(patientId, patientInfo, token, realm)

    expect(updateResponse).toEqual(response.data)
    expect(mockedAxios.put).toHaveBeenCalledTimes(1)
    expect(mockedAxios.put).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/patients/${patientId}`,
      patientInfo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Realm: realm,
        },
      }
    )
  })
})
