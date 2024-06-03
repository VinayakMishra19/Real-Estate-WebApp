import express from 'express';
import { deleteUser, test, updatedUser, getUserListing } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updatedUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListing)

export default router;