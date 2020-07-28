import { login } from './login'

test('Login ok', async () => {
    const user = await login('women', '123')
    expect(user?.username).toEqual('Women')
})

test('Login error', async () => {
    const user = await login('women', '321')
    expect(user).toBeNull()
})