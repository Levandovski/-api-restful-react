import React from 'react';

import { InputsText } from './styles';

interface InputProps {
	value: string | number;
	onChange: any;
	type?: string;
}

const Inputs = (props: InputProps) => {

	if (props.type === 'text') {
		return (
			<InputsText>
				<input type={props.type} className='input-text' onChange={props.onChange} value={props.value} />
			</InputsText>
		)
	} else if (props.type === 'number') {
		return (
			<InputsText>
				<input type={props.type} className='input-text' onChange={props.onChange} value={props.value} />
			</InputsText>
		)
	}

	return (
		<InputsText>
			<input type={props.type} className='input-text' onChange={props.onChange} value={props.value} />
		</InputsText>
	)

}

export default Inputs;
