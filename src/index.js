import app from './app';
import '@babel/polyfill';

async function main(){
    await app.listen(6000);
    console.log("server");
};

main();