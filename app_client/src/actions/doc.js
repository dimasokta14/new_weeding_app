export const createTamu = (data) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    const ref = firebase.database().ref('/attendees')
    ref.push().set({
      nama: data.nama,
      ucapan: data.ucapan,
      jumlah: data.jumlah,
      status: data.status,
      whatsapp: data.whatsapp
    }).then(() => {
      dispatch({type: 'CREATE_ATTENDEES_SCC'})
    }).catch(() => {
      dispatch({type: 'CREATE_ATTENDEES_ERROR'})
    })
  }
}