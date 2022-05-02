import React from 'react';

import { ButtonsChange } from './styles';

interface buttonProps{
	onChange?: any;
	name: string;
}

const Buttons = (props: any) => {
  return (
		<ButtonsChange>
			<input type="button" className='btn' value={props.name} />
		</ButtonsChange>
	);
}

export default Buttons;
