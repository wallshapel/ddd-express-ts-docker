import { connect } from 'mongoose';

const { MONGO_HOST, MONGODB_PORT, MONGODB_DB } = process.env;

const dbConnect = async () => {
	const DB_URI: string = 'mongodb://' + MONGO_HOST + ':' + MONGODB_PORT + '/' + MONGODB_DB;
	await connect(DB_URI);	
	console.log('Connection successfully');
};

export default dbConnect;