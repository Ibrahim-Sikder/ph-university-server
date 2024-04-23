import express from 'express';
import { userControllers } from './user.controller';
import validateRequest from '../../middlwares/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';

const router = express.Router()

router.post('/create-student', validateRequest(createStudentValidationSchema), userControllers.createStudent)


// router.post('/create-student', userControllers.createStudent)



export const userRoutes = router;