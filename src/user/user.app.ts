// Imports
    import 'dotenv/config';
    import express from 'express';
    import morgan from 'morgan';
    import cors from 'cors';
    import router from './infrastructure/routes/api';
    import dbConnect from './infrastructure/db/mongo';

// Initializations
    const app = express();
    dbConnect().then();;

// Settings
    const { HOST, PORT } = process.env;

// Middlewares
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());

// Routes
    app.use(router);

// Startup
    app.listen(PORT, () => console.log('User on http://' + HOST + ':' + PORT));