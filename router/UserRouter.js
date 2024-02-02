// UserRouter.js
import { getUser,createUser,index,index1,getUsersByDepartment} from "../controller/UserController.js";
import express from 'express';

const router = express.Router();

router.get('/', getUser);
router.get('/index', getUser);
router.get('/buscar',index );
router.post("/save", createUser );
router.post('/users', getUsersByDepartment);
router.get('/calcular', index1);

export default router;



