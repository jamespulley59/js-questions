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

//question 10
// selfDividingNu,bers

function selfDividingNumbers(left, right) {
    var solution = [];
    for(var i=left; i<=right; i++) {
        if(isSelfDividing(i)) {
            solution.push(i)
        }
    }
    return solution;
}

function isSelfDividing(num) {
    var digits = num.toString().split('');
    for(var i=0; i<digits[i].length; i++) {
        if(num % digits[i] !== 0) {
            return false
        }
    }
    return true;
}

// question 11
// moveZeroes

function moveZeros(nums) {
    var counter = 0;
    var solution = [];
for(var i=0; i<nums.length; i++) {
    if(nums[i] === 0) {
        counter++;
    } else {
        solution.push(nums[i]);
    }
}

//add back xeroes on end

for(var j=counter; j>0; j--) {
    solution.push(0);
}
return solution
}
//console.log(moveZeros([1,0,21,4,0,0,4]));

//question 12
// average()

function average(nums) {
    if(nums.length === 0) {
            return 0;
    }
    var sum = 0;
    for(var i=0; i<nums.length; i++) {
        sum += nums[i];
    }
    return sum/nums.length
}

// console.log(average([]));