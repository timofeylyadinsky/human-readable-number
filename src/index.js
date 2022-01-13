module.exports = function toReadable (number) {
    let num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let num3 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    let rez='';
    if(number >= 100) {
        rez += num3[Math.floor(number/100)-1];
    }
    if(number%100 >= 20){
        if(number > 100) {rez+=' ';}
        rez+=num2[Math.floor(number/10)%10-2];
        if(number%10!=0)rez+=' '+num1[number%10];
    }
    
    if((number%100 < 20)){
        if((number > 100)&&(number%100!=0)) {rez+=' '+num1[number%100];}
        else if((number < 100)) rez+=num1[number%100];
    }
    return rez;
}
