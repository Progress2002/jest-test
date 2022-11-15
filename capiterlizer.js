const capitalize =(str) => {
    if(Object. prototype. toString. call(str)  !== '[object String]') {
      return; 
    } else {
      return str[0].toUpperCase() + str.slice(1);
    }
    
}

module.exports = capitalize;