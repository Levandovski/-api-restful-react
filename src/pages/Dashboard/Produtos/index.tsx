import React, { useState } from 'react';
import Buttons from '../../../components/Buttons';

import Inputs from '../../../components/Inputs';

import { Container } from './styles';

const Produtos: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [price, setPrice] = useState<number>(0);

	const handleChange = (e: any, setState: any) => {
		setState(e.target.value);
	}

	return (
		<Container>
			<h1>Produtos</h1>
			<Inputs onChange={(e: string) => handleChange(e, setName)} value={name} type='text' />
			<Inputs onChange={(e: string) => handleChange(e, setPrice)} value={price} type='number' />
			<Buttons name={'Cadastrar'} />
		</Container>
	)

}

export default Produtos;
