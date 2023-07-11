// Aquí van las definiciones de los métodos del usuario
import { UserEntity } from './user.entity';

export interface UserRepository {
	listUsers(): Promise<UserEntity[] | null>; // Retorna una promesa de tipo array de UserEntity o nulo en caso que no encuentre nada 
	findUserById(uuid: string): Promise<UserEntity | null>; // Recibe un uuid de tipo string y devuelve una promesa de tipo UserEntity o nulo si no encuentra nada.
	registerUser(user: UserEntity): Promise<UserEntity | null>;
	updateUser(uuid: string, user: UserEntity): Promise<UserEntity | null>;
	deleteUser(uuid: string): Promise<void>;
}