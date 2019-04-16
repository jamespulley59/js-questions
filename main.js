// question 1
//printInt
function printInt(n) {
    for(var i=1; i<=n; i++){
        console.log(i);
    }
}
//printInt(10);

//quetsion 2
//printIntRev(n)
function printIntRev(n) {
    for(var i=n; i>=1; i--) {
        console.log(i);  
    }
}
//printIntRev(8);

// question 3
// checkInput(x)
// return string 'number' if 'x' is number
// string if string
//boolean if boolean
// otherwise '-1'
function checkInput(x) {
    if (typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean') {
       return typeof x;  
    } else {
        return -1;
    }
}
//console.log(checkInput(false));

//question 4
//simpleEvenAdding(num)
function simpleEvenAdding(num) {

    var solution = 0;

    for(var i=1; i<=num; i++) {
        
        if(i % 2 ===0) {
            solution += i;
        }
    }
    return solution;
}
//console.log(simpleEvenAdding(6));

// question 5
// letterCapitalize(str)  
function letterCapitalize(str) {
var words = str.split(" ");
var solution = "";
    for(var i=0; i<words.length; i++) {
        var upperWord = words[i].replace(words[i][0], words[i][0].toUpperCase());
        solution += " " + upperWord;
    }
    
    return solution.slice(1);
}
//console.log(letterCapitalize("hello world"));

//question 6
// simpleReverse
function simpleReverse(str) {
    var strArray = str.split('');
    var revArray = strArray.reverse();
return revArray.join('');
}
//console.log(simpleReverse('hello'));

//question 7
// findDiff(arr)
function findDiff(arr) {
    var max = Math.max(... arr);
    var min = Math.min(... arr);
return max - min;
}
//console.log(findDiff([1,2,3,5,4,10,2]));

// question 8
// timeConvert(num)
function timeConvert(num) {
  var hour = parseInt(num/60);
  var minutes = num % 60
return hour + ':' + minutes
}
//console.log(timeConvert(150));

// question 9
// findString(str, long)
function findStr(str, long) {
    var splitedArray = long.split(str);
return splitedArray.length - 1;    
}
console.log(findString('hello, ' + 'goodbye', 8));
