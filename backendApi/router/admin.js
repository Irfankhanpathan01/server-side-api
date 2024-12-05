import express from 'express'
import { LoginAdmin } from '../controller/admin.js'

const routerAdmin  =  express.Router()


routerAdmin.route('/LoginAdmin').post(LoginAdmin)

export default routerAdmin;
