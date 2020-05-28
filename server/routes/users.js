import express from 'express';
import { getAllUsers, saveAllUsers } from '../controllers/users';
const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', saveAllUsers);

export default router;
