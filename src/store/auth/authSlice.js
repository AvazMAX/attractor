import { createSlice } from '@reduxjs/toolkit'

const getInitialState = () => {
	return {
		isAuth: false,
		token: ''
	}
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: getInitialState(),
	reducers: {
		login: (state, action) => {
			if (action.payload) {
				state.token = action.payload
				state.isAuth = true
			}
		},
		logout: (state, action) => {
			state.isAuth = false
			state.token = ''
			localStorage.removeItem('token')
			action.payload('/')
		}
	}
})

export const authActions = authSlice.actions
