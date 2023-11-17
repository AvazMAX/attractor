import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { SignIn } from '../pages/auth/SignIn'
import { UserLayout } from '../layout/UserLayout'
import { Public } from '../pages/repository/Public'
import { Layout } from '../layout/Layout'
import { Users } from '../pages/users/Users'
import { useSelector } from 'react-redux'

export const AppRoutes = ({ token }) => {
	const { isAuth } = useSelector(state => state.auth)

	return (
		<Routes>
			<Route
				path='/'
				element={isAuth ? <Navigate to='/layout' /> : <SignIn />}
			/>
			<Route path={`/${token}`} element={<Navigate to='/layout' />} />
			<Route path='/layout' element={<Layout />}>
				<Route index element={<Navigate to='profile' />} />
				<Route path='users' element={<Users />} />
				<Route path='users/:login' element={<UserLayout variant />}>
					<Route index element={<Navigate to='publicrepos' />} />
					<Route path='publicrepos' element={<Public variant />} />
				</Route>
				<Route path='profile' element={<UserLayout variant={false} />}>
					<Route index element={<Navigate to='publicrepos' />} />
					<Route path='publicrepos' element={<Public variant={false} />} />
				</Route>
			</Route>
		</Routes>
	)
}
