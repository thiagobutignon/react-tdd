import { AccountResultModel } from '@/domain/models/account-result-model'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountResultModel>
}
