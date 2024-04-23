
import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router()


router.post('/create-academic-semester',validateRequest(AcademicSemesterValidations.createAcdemicSemesterValidationSchema), academicSemesterController.createAcademicSemester)

router.get('/', academicSemesterController.getAllAcademicSemester)
router.get('/:semesterId', academicSemesterController.getSingleAcademicSemester)

router.patch(
    '/:semesterId',
    validateRequest(
      AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
    ),
    academicSemesterController.updateAcademicSemester,
  );



export const academicSemesterRoutes = router