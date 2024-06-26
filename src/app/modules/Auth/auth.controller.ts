import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse";
import { AuthServices } from "./auth.service"
import config from "../../config";



const loginUser = catchAsync(async(req, res)=>{
    const result = await AuthServices.loginUser(req.body);

    const {refreshToken, accessToken, needPasswordChange } = result;

    res.cookie('refreshToken', refreshToken,{
        secure: config.NODE_ENV === 'production',
        httpOnly: true
    })

    sendResponse(res,{
        statuscode: httpStatus.OK,
        success: true,
        message: 'User is logged in successfully',
        data: {
            accessToken,
            needPasswordChange,
        }
    })

})
const changePassword = catchAsync(async(req, res)=>{
    
    const user = req.user;
    const {...passwordData} = req.body
    const result = await AuthServices.changePassword(user, passwordData)

    sendResponse(res,{
        statuscode: httpStatus.OK,
        success: true,
        message: 'User is logged in successfully',
        data: result,
    })

})

const refreshToken = catchAsync(async(req, res, )=>{
    const {refreshToken} = req.cookies;

    const result = await AuthServices.refreshToken(refreshToken);
   

    sendResponse(res,{
        statuscode: httpStatus.OK,
        success: true,
        message: 'User is logged in successfully',
        data: result
    })
})


const forgetPassword = catchAsync(async(req, res, )=>{
    const userId = req.body.id

    const result = await AuthServices.forgetPassword(userId);
   

    sendResponse(res,{
        statuscode: httpStatus.OK,
        success: true,
        message: 'Reset link is generated successfully',
        data: result
    })
})
const resetPassword = catchAsync(async(req, res, )=>{
    const token = req.headers.authorization;

    const result = await AuthServices.resetPassword(req.body, token);
   

    sendResponse(res,{
        statuscode: httpStatus.OK,
        success: true,
        message: ' Password reset successfully',
        data: result
    })
})

export const AuthController ={
    loginUser,
    changePassword,
    refreshToken,
    forgetPassword,
    resetPassword,
}