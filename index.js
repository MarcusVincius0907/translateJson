const translate = require('@vitalets/google-translate-api');
const translateFile = require('./translate.json');

const fs = require('fs');

async function main(){
  for (let [key, value] of Object.entries(translateFile)) {
    
    try{
      const res = await translate(value, {to: 'pt'})
      translateFile[key] = res.text;
      console.log(res.text);
    }catch(e){
      console.log(e);
    }

  }

  fs.writeFile('output.json', JSON.stringify(translateFile), function(err){
    if(err)
      console.log(err);
  })
}

main()

