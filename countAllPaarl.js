function allPaarl(regNo){
    var array = [];
    var split = regNo.split(",");
    
    for(var i = 0; i < split.length; i++){
      if (split[i].includes("CJ")) {
        array.push(split[i].trim());
      }
      }
  return array;
  }
  