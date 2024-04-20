import { z } from 'zod';

// Define Zod schemas for nested objects (userName, guardian, localGuardian)
const userNameSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().nonempty('Last name is required'),
});

const guardianSchema = z.object({
  fatherName: z.string().nonempty('Father name is required'),
  fatherOccupation: z.string().nonempty('Father occupation is required'),
  fatherContactNo: z.string().nonempty('Father contact number is required'),
  motherName: z.string().nonempty('Mother name is required'),
  motherOccupation: z.string().nonempty('Mother occupation is required'),
  motherContactNo: z.string().nonempty('Mother contact number is required'),
});

const localGuardianSchema = z.object({
  name: z.string().nonempty('Local guardian name is required'),
  contactNo: z.string().nonempty('Local guardian contact number is required'),
  occupation: z.string().nonempty('Local guardian occupation is required'),
  address: z.string().nonempty('Local guardian address is required'),
});

// Define Zod schema for the main student object
export const studentValidationSchema = z.object({
  id: z.string().optional(),
  password: z.string().optional(),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email('Valid email address is required'),
  contactNo: z.string().nonempty('Contact number is required'),
  emergencyContactNo: z.string().nonempty('Emergency contact number is required'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().nonempty('Present address is required'),
  permanentAddress: z.string().nonempty('Permanent address is required'),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']),
  isDeleted: z.boolean().default(false),
});
