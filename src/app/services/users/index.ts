import { findUser } from '@app/services/users/find-user'
import { findManyUsers } from '@app/services/users/find-many-users'
import { createUser } from '@app/services/users/create-user'
import { updateUser } from '@app/services/users/update-user'
import { removeUser } from '@app/services/users/remove-user'

export const usersService = {
	findUser,
	findManyUsers,
	createUser,
	updateUser,
	removeUser,
}
