// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel

function replace(){
    let vowel = aeiouAEIOU

}

// corrections

function replace(s){
    var newS = ''
    var vowels = "aAeEiIoOuU"
    for (var i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) === -1) {
        newS += s[i]
      }  else {
        newS += '!'
      }
    }
    return newS
  }

function replace(s){
    let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        if(a.includes(arr[i])){
             arr[i] = '!'
        }
    }
    return arr.join('')
}

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
}

const replace = s => s.replace(/[aeiou]/gi, '!');