import firebase from "firebase";

export const signIn = (email, password, cb) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(
      email,
      password
    ).then(() => {
      dispatch({type: 'SIGNIN_SUCCESS'})
      cb()
    }).catch((err) => {
      dispatch({type: 'SIGNIN_ERROR', err})
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'})
    }).catch(() => {
      dispatch({type: 'SIGNIN_ERROR'})
    })
  }
}

export const resetPassword = email => async dispatch => {
  try {
    firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() =>
      dispatch({
        type: 'RESET_SUCCESS',
        payload: "Reset email sent. Go check your inbox."
      })
    )
    .catch(err => {
      dispatch({
        type: 'RESET_ERROR',
        payload: "...some message for the user..."
      });
    });
  } catch (err) {
    dispatch({
      type: 'RESET_ERROR',
      payload: "...some message for the user..."
    });
  }
};