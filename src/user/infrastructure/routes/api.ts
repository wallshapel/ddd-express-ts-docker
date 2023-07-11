import { Router } from 'express';
import { MongoRepository } from '../repository/mongo.repository';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from '../controllers/userController';

const router = Router();

const mongoRepository = new MongoRepository();
const userUseCase = new UserUseCase(mongoRepository);
const userController = new UserController(userUseCase);

router.get('/users', userController.listUsers);
router.get('/user/:uuid', userController.findUserById);
router.post('/user', userController.registerUser);
router.put('/user/:uuid', userController.updateUser);
router.delete('/user/:uuid', userController.deleteUser);

export default router;