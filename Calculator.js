function Addition(num1,num2)
{
    var sum = num1 + num2;
    console.log('Addition :'+ sum);
    return sum;
}

function Substraction(num1,num2)
{
    var subs = num2 - num1;
    console.log('Substraction :' + subs);
    return subs;
}

function Division(num1,num2)
{
    var div = num2 / num1;
    console.log('Division :'+ div);
    return div;
}

//We have find the indexes of vowels
function FindVowelsIndex()
{
    var alphebets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var vowels = ['a','e','i','o','u'];
    var vowelsIndex = [];
    alphebets.filter(function(ele,index){
            if(vowels.indexOf(ele.toLowerCase())>=0)
            {
                console.log(index);
                vowelsIndex.push(index);
                return index.toString();
            }
    });
    console.log(vowelsIndex);
}