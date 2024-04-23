import express from 'express'
import { userRoutes } from '../modules/user/user.route'
import { studentRouters } from '../modules/student/student.route'
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'

const router = express.Router()

const modulesRoutes = [
    {
        path: '/users',
        route: userRoutes,
    },
    {
        path: '/students',
        route: studentRouters,
    },
    {
        path: '/academic-semesters',
        route: academicSemesterRoutes,
    },
]

modulesRoutes.forEach(route=>router.use(route.path, route.route ))

export default router;