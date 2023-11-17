import React, { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

export const Input = forwardRef(
	({ children, onChange, value, label, error, fullWidth, ...rest }, ref) => {
		return (
			<MyStyledInput
				label={label}
				variant='outlined'
				value={value}
				onChange={onChange}
				error={error}
				inputRef={ref}
				fullWidth={fullWidth}
				{...rest}
				InputProps={{ inputProps: { min: 0, max: 1000 } }}
			>
				{children}
			</MyStyledInput>
		)
	}
)

const MyStyledInput = styled(TextField)(props => ({
	'& .MuiOutlinedInput-notchedOutline': {
		border: 'none'
	},
	'& .MuiInputBase-input': {
		padding: `${props.padding ? props.padding : '1rem 1.4rem'}`,
		lineHeight: '1.5rem',
		color: '#757575',
		border: `${props.border ? props.border : '1.3px solid #47399f'}`,
		borderRadius: '8px',
		height: '10px'
	},
	'& .MuiOutlinedInput-root': {
		'&.Mui-focused fieldset': {
			border: 'none',
			borderRadius: '8px'
		},
		'&:hover fieldset': {
			border: 'none',
			borderRadius: '8px'
		}
	}
}))
