
import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";



const createStudentIntoDB = async (studentData:TStudent)=>{
    // const result = await StudentModel.create(studentData) //build in static method
  
    const student = new StudentModel(studentData) // build in instant method
    const result = await student.save()
    return result;
}

const getAllStudentFromDB = async()=>{
    const result = await StudentModel.find()
    return result;
}
const getSingleStudentFromDB = async(id:string)=>{
    const result = await StudentModel.findOne({id})
    return result;
}

export const studentServices = {
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
}