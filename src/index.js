import app from './app';

async function main(){
    await app.listen(6000);
    console.log("server");
};

main();