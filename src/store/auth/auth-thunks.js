import { setAuthUserData } from './auth-actions'


export const setAuthUserDataWithThunk = (value) => {
	return (dispatch) => {
		dispatch(setAuthUserData(value))
	}
}