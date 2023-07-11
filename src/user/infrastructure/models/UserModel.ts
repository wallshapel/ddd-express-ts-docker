import { Schema, model } from 'mongoose';

const UserSchema = new Schema (
	{
		uuid: {
      		type: String,
      		unique: true,
    	},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true
		},		
		description: {
			type: String,
			default: 'I\'m the description'
		}			
	},
	{
		timestamps: true,
		versionKey: false
	}
);

const UserModel = model('users', UserSchema);

export default UserModel;