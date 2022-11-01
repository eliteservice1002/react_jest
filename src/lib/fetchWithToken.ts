export const fetchWithToken = async <T>(
  input: RequestInfo,
  token: string,
  realm: string
): Promise<T> => {
  const res = await fetch(input, {
    headers: { Authorization: `Bearer ${token}`, Realm: realm },
  })

  const text = await res.text()
  try {
    const data = JSON.parse(text)
    return data
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return text as any
  }
}
