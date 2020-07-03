describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const sut = new AxiosHttpClient()
    sut.post({ url: 'any_url' })
  })
})
