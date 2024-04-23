
import config from '../../config'
import { AcademicSemester } from '../academicSemester/academicSemester.model'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUser } from './user.interface'
import { User } from './user.model'
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create  student role
  const userData : Partial<TUser> = {}

  // if is not given password , use default password
  userData.password = password || (config.default_pass as string)

  // set user role 
  userData.role = 'student'



  // find academic semester info 
  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)


  // set manually generated id 
  userData.id = await generateStudentId(admissionSemester)

  // create a user 
  const newUser = await User.create(userData)

  // create a student 
  if(Object.keys(newUser).length){
    // set id , _id as user
    payload.id = newUser.id; // embeded id
    payload.user = newUser._id // reference _id
  }

  const newStudent = await Student.create(payload)


  return newStudent
}

export const userServices = {
  createStudentIntoDB,
}