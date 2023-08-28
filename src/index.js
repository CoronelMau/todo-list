import connectDB from './config/db.js';
import httpServer from './config/http.js';
import './config/env.js';

const bootstrap = async ()=> {
  await connectDB(process.env.MONGODB_URL);

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening in port: ${process.env.PORT}`);
  });
};

bootstrap();