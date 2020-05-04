import app from './';
import '@babel/polyfill';

async function main(){
    await app.listen(5432);
    console.log("server");
};

main();