export const displayEnv=(dotenv)=>{
    let relevantEnvList = {}
    Object.keys(dotenv).forEach(function(key) {
      relevantEnvList[key]= process.env[key]
    });
    console.log(JSON.stringify(relevantEnvList));
}