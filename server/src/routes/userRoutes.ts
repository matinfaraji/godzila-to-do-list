import { Router } from 'express';
import { getUsers, createUser, getTasks, createTask } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/tasks', getTasks);
router.post('/tasks', createTask);

export default router;
