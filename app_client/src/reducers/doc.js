const initialState = {
  message: ''
}

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ATTENDESS_SUCCESS':
      return {
        ...state,
        message: 'Berhasil Menambahkan Data Tamu'
      }

    case 'CREATE_ATTENDEES_ERROR':
      return {
        ...state,
        message: 'Gagal Menambahkan Data Tamu'
      }

    default:
      return state
  }
}

export default documentReducer;