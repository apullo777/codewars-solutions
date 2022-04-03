function isPangram(str){
    let regex = /([a-z])(?!.*\1)/gi
    return (str.match(regex) || []).length == 26
  }