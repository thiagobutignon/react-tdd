import { AccountResultModel } from '../models'
import { AuthenticationParams } from '../usecases'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountResultModel = (): AccountResultModel => ({
  accessToken: faker.random.uuid()
})
