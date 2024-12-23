import dotenvFlow from 'dotenv-flow';


dotenvFlow.config();

console.log(process.env);

export default {
    
ENV   : process.env.NODE_ENV || 'development',
PORT : process.env.PORT || 3000,
SERVER_URL  : process.env.SERVER_URL || 'http://localhost:3000',


DATABASE_URL  : process.env.DATABASE_URL 

}