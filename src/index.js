import app from './';
import '@babel/polyfill';
import regeneratorRuntime from "regenerator-runtime";

async function main(){
    await app.listen(5432);
    console.log("server");
};

main();