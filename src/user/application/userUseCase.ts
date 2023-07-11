// Aquí van los casos de usos del usuario
import { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';

export class UserUseCase {
	constructor(private readonly userRepository: UserRepository) {}
	public listUsers = async () => {
		return await this.userRepository.listUsers();
	}
	public findUserById = async (uuid: string) => {
		return await this.userRepository.findUserById(uuid);
	}
	public registerUser = async ({ name, email, description }: { name: string; email: string; description: string }) => {
		const user = new UserValue({ name, email, description });
		return await this.userRepository.registerUser(user);
	}
	public updateUser = async (uuId: string, { uuid, name, email, description }: { uuid: string; name: string; email: string; description: string }) => {
		const user = new UserValue({ uuid, name, email, description });
		return await this.userRepository.updateUser(uuId, user);
	}
	public deleteUser = async (uuid: string) => {
		return await this.userRepository.deleteUser(uuid);	
	}
}