import { Router } from 'express';

const userRouter = Router();

userRouter.post('/sign-up');
userRouter.post('/login');
userRouter.get('/profile');
userRouter.patch('/change-pwd')

export default userRouter;