/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import { TUser } from './user.interface'
import config from '../../config'
import bcrypt from 'bcrypt'
const userSchema = new Schema<TUser >(
  {
    id: {
      type: String,
      required: true,
      unique:true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique:true,
    // },
    password: {
      type: String,
    },
    needsPasswordChange: {
      type: Boolean,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)


//pre same middleware
userSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  )

  next()
})
userSchema.post('save', function (doc, next) {
  doc.password = ''

  next()
})

export const User = model<TUser>('User', userSchema)