/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express'
import { studentServices } from './student.services'
import { sendResponse } from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'

//  const createStudent = async (req:Request, res:Response)=>{
//     try{
//         const {student:studentData} = req.body
//         const {value} = studentJoiValidationSchema.validate(studentData)
//         // const zodparseData = studentValidationSchema.parse(studentData)
//     const result = await studentServices.createStudentIntoDB(value)

//     res.status(200).json({
//         success: true,
//         message: 'Student is create successfully!',
//         data: result
//     })
//     }catch(err:any){
//         res.status(500).json({
//             success:false,
//             message: err.message || 'Student is create failed!',
//             error: err,
//         })
//     }
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllStudent = catchAsync(async (req, res, next) => {

  const result = await studentServices.getAllStudentFromDB()

  res.status(200).json({
    success: true,
    message: 'Student are retrieve successfully!',
    data: result,
  })

})
const getSingleStudent = catchAsync(async (req, res, next) => {

  const { studentId } = req.params
  const result = await studentServices.getSingleStudentFromDB(studentId)
  sendResponse(res, {
    statuscode: httpStatus.OK,
    success: true,
    message: 'Single student is retrieve successfully!',
    data: result,
  })

})

const deleteStudent = catchAsync(async (req, res, next) => {

  const { studentId } = req.params
  const result = await studentServices.deleteStudentFromDB(studentId)
  sendResponse(res, {
    statuscode: httpStatus.OK,
    success: true,
    message: 'Student is delete successfully! ',
    data: result,
  })

})
export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
}
