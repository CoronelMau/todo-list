import { Router } from 'express';
import userRegisterDTO from '../dto/user-register.dto.js';
import userLoginDTO from '../dto/user-login.dto.js';
import userChangePwdDTO from '../dto/user-change_pwd.dto.js';
import userUpdateDataDTO from '../dto/user-update_data.dto.js';
import userJWTDTO from '../dto/user-jwt.dto.js';

const userRouter = Router();

userRouter.post('/sign-up', userRegisterDTO);
userRouter.post('/login', userLoginDTO);
userRouter.get('/profile', userJWTDTO);
userRouter.patch('/change-pwd',userJWTDTO, userChangePwdDTO)
userRouter.patch('/update-data',userJWTDTO, userUpdateDataDTO)

export default userRouter;