// Aquí va una representación del modelo de usuarios, pero totalmente agnostico al gestor de base de datos que se emplee en infraesctructura
import { UserEntity } from './user.entity';
import { v4 as uuidGen } from 'uuid'; // Sirve para generar id aleatorios

export class UserValue implements UserEntity {
	uuid: string;
	name: string;
	email: string;	
	description: string;
	constructor({ uuid, name, email, description }: { uuid?: string; name: string; email: string; description?: string }) { // El parámetro description es opcional
		this.uuid = uuid ?? uuidGen(); // Si llega esta propiedad entonces asignale un valor aleatorio
		this.name = name;
		this.email = email;
		this.description = description ?? 'default'; // So description no existe entonces asignale al miembro description el valor 'default'
	}
}