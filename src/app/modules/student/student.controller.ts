import { Request, Response } from "express";
import { studentServices } from "./student.services";
import { studentJoiValidationSchema } from "./student.joiValidationSchema";


 const createStudent = async (req:Request, res:Response)=>{
    try{
        const {student:studentData} = req.body
        const {value} = studentJoiValidationSchema.validate(studentData)
        // const zodparseData = studentValidationSchema.parse(studentData)
    const result = await studentServices.createStudentIntoDB(value)

    res.status(200).json({
        success: true,
        message: 'Student is create successfully!',
        data: result
    })
    }catch(err){
        res.status(500).json({
            success:false,
            message: 'Student is create failed!',
            error: err,
        })
    }
}

const getAllStudent = async(req:Request, res:Response )=>{
    try{
        const result = await studentServices.getAllStudentFromDB();

        res.status(200).json({
            success:true,
            message: 'Student are retrieve successfully!',
            data: result
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message: 'Student is not retrieve!',
            error:err
        })
    }
}
const getSingleStudent = async(req:Request, res:Response)=>{
   try{
    const {studentId} = req.params
    const result = await studentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
        success:true,
        message: 'Single student is retrieve successfully!',
        data: result
    })
   }catch(err){
    res.status(500).json({
        success:false,
        message: 'Single student is not retrieve!',
        error:err
    })
   }
}

export const studentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
}