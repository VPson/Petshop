import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { PetsRepository } from '@modules/pets/infra/typeorm/repositories/PetsRepository';
import { IPetsRepository } from '@modules/pets/repositories/IPetsRepository';

import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
	'UsersRepository', 
	UsersRepository
);

container.registerSingleton<IPetsRepository>(
	'PetsRepository',
	PetsRepository
);