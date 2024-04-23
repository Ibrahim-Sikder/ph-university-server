/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { userServices } from './user.service'
import { sendResponse } from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'

const createStudent = catchAsync(async (req, res, next) => {
 
  const { password, student: studentData } = req.body
  // const {value} = studentJoiValidationSchema.validate(studentData)
  const result = await userServices.createStudentIntoDB(password, studentData)
  sendResponse(res, {
    statuscode: httpStatus.OK,
    success: true,
    message: ' Student is create successfully!',
    data: result,
  })
  // res.status(200).json({
  //   success: true,
  //   message: 'Student is create successfully!',
  //   data: result,
  // })

})

export const userControllers = {
  createStudent,
}