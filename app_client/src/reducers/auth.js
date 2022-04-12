const initialState = {
  authMsg: ""
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_ERROR':
      return {
        ...state,
        authMsg: 'Gagal melakukan login'
      }
    case 'SIGNIN_SUCCESS':
        console.log('login berhasil')
        return {
          ...state,
          authMsg: 'Login Berhasil'
        }

    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        authMsg: null
      }
    default:
      return state
  }
}

export default authReducer