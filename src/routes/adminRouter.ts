import { AdminsController } from './../controllers/adminsController'
import { Router } from "express"

const router = Router()
const adminsController = new AdminsController()

router.get('/get', adminsController.OnGetAdmin)
router.post('/adminRegister', adminsController.OnRegisterAdmin)

export const adminRouter = router