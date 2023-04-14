import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { APICore, setAuthorization } from 'helpers/api/apiCore'
import { bake_cookie, delete_cookie } from 'sfcookies'
import {
  login as loginApi,
  logout as logoutApi,
  signup as signupApi,
  forgotPassword as forgotPasswordApi,
} from 'helpers'
import { authApiResponseSuccess, authApiResponseError } from './actions'
import { AuthActionTypes } from './constants'
import Swal from 'sweetalert2'

type UserData = {
  payload: {
    password: string
    email: string
  }
  type: string
}

const api = new APICore()
const cookie_key = 'crsftoken'

/**
 * Login the user
 * @param {*} payload - email and password
 */
function* login({ payload: { email, password } }: UserData): SagaIterator {
  const successfulUserLogged = {
    id: 1,
    email: email,
    username: email,
    password: password,
    name: ' ',
    role: 'Nenhum',
    league_external_id: null,
    tokenExpiration: 0,
    token: '',
    photo: '',
    customer: {
      id: '',
      logo: '',
      primary_color: '',
      sms_credit: 0,
    },
  }

  try {
    const response = yield call(loginApi, { email, password })
    let user: any = {}
    if (response) user = response?.data

    if (user?.token && response?.status === 200) {
      const tokenExpiration = Date.now() / 1000 + 18000 // 5 horas
      successfulUserLogged.token = user?.token
      successfulUserLogged.tokenExpiration = tokenExpiration
      successfulUserLogged.id = user?.id
      successfulUserLogged.name = user?.name
      successfulUserLogged.photo = user?.photo
      successfulUserLogged.role = user?.role
      successfulUserLogged.league_external_id = user?.league
      successfulUserLogged.customer.logo = user?.customer.logo
      successfulUserLogged.customer.primary_color = user?.customer.primary_color
      successfulUserLogged.customer.id = user?.customer.id
      successfulUserLogged.customer.sms_credit = user?.customer.sms_credit

      bake_cookie(cookie_key, String(successfulUserLogged.token))
      api.setLoggedInUser(successfulUserLogged)
      setAuthorization(successfulUserLogged['token'])
      yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, successfulUserLogged))
    }
  } catch (e) {
    yield put(
      authApiResponseError(AuthActionTypes.LOGIN_USER, 'Seu email ou senha estão inválidos'),
    )
    api.setLoggedInUser(null)
    setAuthorization(null)
  }
}

/**
 * Logout the user
 */
function* logout(): SagaIterator {
  try {
    delete_cookie(cookie_key)
    //yield call(logoutApi);
    api.setLoggedInUser(null)
    setAuthorization(null)
    yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}))
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error))
  }
}

function* signup({ payload: { email, password } }: UserData): SagaIterator {
  try {
    const response = yield call(signupApi, { email, password })
    const user = response.data
    api.setLoggedInUser(user)
    setAuthorization(user['token'])
    yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user))
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error))
    api.setLoggedInUser(null)
    setAuthorization(null)
  }
}

function* forgotPassword({ payload: { email } }: UserData): SagaIterator {
  try {
    const response = yield call(forgotPasswordApi, { email })
    Swal.fire({
      icon: 'success',
      text: 'E-mail enviado com sucesso!',
      confirmButtonColor: '#727cf5',
    })
    yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, response.data))
  } catch (error: any) {
    Swal.fire({
      icon: 'error',
      text: 'Ocorreu um erro ao tentar enviar o e-mail! Favor tentar novamente.',
      confirmButtonColor: '#727cf5',
      allowEscapeKey: true,
    })
    yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error?.message))
  }
}
export function* watchLoginUser() {
  yield takeEvery(AuthActionTypes.LOGIN_USER, login)
}

export function* watchLogout() {
  yield takeEvery(AuthActionTypes.LOGOUT_USER, logout)
}

export function* watchSignup() {
  yield takeEvery(AuthActionTypes.SIGNUP_USER, signup)
}

export function* watchForgotPassword() {
  yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword)
}

function* authSaga() {
  yield all([fork(watchLoginUser), fork(watchLogout), fork(watchSignup), fork(watchForgotPassword)])
}

export default authSaga
