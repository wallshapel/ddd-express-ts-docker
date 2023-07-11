import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserModel from '../models/UserModel';

export class MongoRepository implements UserRepository {
	public listUsers = async (): Promise<any> => {
		return await UserModel.find();
	}
	public findUserById = async (uuid: string): Promise<any> => {
		return await UserModel.findOne({ uuid });	
	}
	public registerUser = async (user: UserEntity): Promise<any> => {
		return await UserModel.create(user);
	}
	public updateUser = async (uuid: string, user: UserEntity): Promise<any> => {
		return await UserModel.findOneAndUpdate({ uuid }, user, { new: true });
	}
	public deleteUser = async (uuid: string): Promise<void> => {
		await UserModel.findOneAndDelete({ uuid });
	}		
}