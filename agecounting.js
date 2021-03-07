const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let datum = [];
  let datas = ''

  resp.on('data', (body)=>{
    datum.push(body)
    //console.log(body)
  })

  resp.on('end',()=>{
    let {data} = JSON.parse(Buffer.concat(datum).toString())
    let dataArr = data.split(',')
    // console.log(dataArr)
    let greaterFifty = 0;
    for(i = 0; i < dataArr.length; i++){
      //console.log(dataArr[i].includes("age"))
      if(dataArr[i].includes("age")){
        let age = dataArr[i].split("=")[1]
        let newage = parseInt(age);

        if(newage >= 50){
          greaterFifty += 1;
        }
      }
    }
    console.log(greaterFifty)
  })
  

  // parse json data here...
  
  // console.log(datas);

});
