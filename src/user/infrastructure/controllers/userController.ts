import { Request, Response } from 'express'; 
import { UserUseCase } from '../../application/userUseCase';

export class UserController {
	constructor(private userUseCase: UserUseCase) {}
	public listUsers = async (_req: Request, res: Response) => {
		const users = await this.userUseCase.listUsers();
		res.json(users);
	}
	public findUserById = async ({ params }: Request, res: Response) => {
		const { uuid } = params;
		const user = await this.userUseCase.findUserById(`${uuid}`);
		res.json(user);	
	};
	public registerUser = async ({ body }: Request, res: Response) => {
		const response = await this.userUseCase.registerUser(body);
		res.status(201).send(response);	
	};
	public updateUser = async ({ body, params }: Request, res: Response) => {
		const { uuid } = params;	
		body.uuid = uuid; // De lo contrario el body llegará a dominio sin este valor y generará un uuid aleatorio automáticamente				
		const response = await this.userUseCase.updateUser(uuid, body); 
		res.json(response);
	}
	public deleteUser = async ({ params }: Request, res: Response) => {
		const { uuid } = params;
		const response = await this.userUseCase.deleteUser(uuid); 
		res.status(204).send(response);	
	}
}