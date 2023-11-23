// var students = [];
// var students = ['musa','al','qadri'];
// var rollNumber =[23414,412332,213123];
// var bolain = [true,false];
// var maxValue = ['musa',239421,true]

var edu = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil.','PHD']

document.write('<h1>'+'Qualification'+'</h1>')
document.write('1)'+' '+ edu[0]+'<br>')
document.write('2)'+' '+ edu[1]+'<br>')
document.write('3)'+' '+ edu[2]+'<br>')
document.write('4)'+' '+ edu[3]+'<br>')
document.write('5)'+' '+ edu[4]+'<br>')
document.write('6)'+' '+ edu[5]+'<br>')
document.write('7)'+' '+ edu[6]+'<br>')
document.write('8)'+' '+ edu[7]+'<br>')

var nameStd = ['zain','musa','baqar']
var markObt = [320,230,480]
var percen1 = ((320/500)*100)
var percen2= ((230/500)*100)
var percen3= ((480/500)*100)

document.write ('<h3>'+'Score of' +' '+ nameStd[0]+' '+'is'+' '+markObt[0] +'.'+' '+'Percentage'+':'+' '+percen1 +'%'+'<h3>' );
document.write ('<h3>'+'Score of' +' '+ nameStd[1]+' '+'is'+' '+markObt[1] +'.'+' '+'Percentage'+':'+' '+percen2 +'%'+'<h3>' );
document.write ('<h3>'+'Score of' +' '+ nameStd[2]+' '+'is'+' '+markObt[2] +'.'+' '+'Percentage'+':'+' '+percen3 +'%'+'<h3>'+'<br>');


var colorName = ['Red','blue','Green'];
document.write('Array ='+' '+ colorName + ' <br>'+'<br>')
var addColor = prompt('what color want to add in the beginning','Orange' )
colorName.unshift(addColor)
document.write('1)'+'Updated Array After adding a color from Beginning ='+' '+colorName +'<br>'+'<br>')

var addColor = prompt('what color want to add in the Last','Purple' )
colorName.push(addColor)
document.write('2)'+'Updated Array After adding a color from Last ='+' '+colorName +'<br>'+'<br>')

var colors1 = prompt('what two color want to add in the beginning','black' )
var colors2 = prompt('what two color want to add in the beginning','white' )
colorName.splice(0,0,colors1,colors2)
document.write('3)'+'Updated Array After adding two color from Beginning ='+' '+colorName +'<br>'+'<br>')

colorName.shift(addColor)
document.write('4)'+'Updated Array After Deleting a color from Beginning ='+' '+colorName +'<br>'+'<br>')

colorName.pop(addColor)
document.write('5)'+'Updated Array After Deleting a color from last ='+' '+colorName +'<br>'+'<br>')

var addNum = +prompt('what color you want to add in your dasired index Number','0' )
var color = prompt('Enter a required color','Yellow' )
colorName.splice(addNum,0,color )
document.write('6)'+'Updated Array After adding a color from your dasired position/index ='+' '+colorName +'<br>'+'<br>')

var addNum = +prompt('Enter a Number you Want to Target in index','0' )
var addNum1= +prompt('Enter a Number you want to delete number quantity','0' )
colorName.splice(addNum,addNum1)
document.write('6)'+'Updated Array After deleting a color from index ='+' '+colorName +'<br>'+'<br>')

var studentScore = [320,230,480,120]
document.write('Score of Student :' +' '+studentScore+'<br>')

var studentScore = studentScore.sort();
document.write('Ordered Scores of Students :'+' '+studentScore+'<br>'+'<br>')

var citiesName = ['Karachi','Lahore','Islamabad','Quetta','Peshawer'];
document.write(citiesName+'<br>')

var citiesName = citiesName.splice(2,2)
document.write(citiesName+'<br>'+'<br>')

var arra = ['This','is','my','cat']
document.write('Array :'+arra+'<br>'+'<br>')

var string = ('This'+' '+'is'+' '+'my'+' '+'cat.');
document.write('string :'+' '+string +'<br>'+'<br>');

var newArr =[];
newArr.push('keyboard')
newArr.push('mouse')
newArr.push('printer')
newArr.push('moniter')

document.write(newArr+'<br>'+'<br>')

var newShift = newArr.shift();
var newShift1 = newArr.shift();
var newShift2 = newArr.shift();
var newShift3 = newArr.shift();

document.write('out :'+'<br>'+newShift+'<br>'+'out :'+'<br>'+newShift1+'<br>'+'out :'+'<br>'+newShift2+'<br>'+'out :'+'<br>'+newShift3+'<br>'+'<br>')


var newArr =[];
newArr.push('keyboard')
newArr.push('mouse')
newArr.push('printer')
newArr.push('moniter')

document.write(newArr+'<br>'+'<br>')

var newShift = newArr.pop();
var newShift1 = newArr.pop();
var newShift2 = newArr.pop();
var newShift3 = newArr.pop();

document.write('out :'+'<br>'+newShift+'<br>'+'out :'+'<br>'+newShift1+'<br>'+'out :'+'<br>'+newShift2+'<br>'+'out :'+'<br>'+newShift3+'<br>'+'<br>')


var companyName = ['Apple','Sumsang','Motorola','Nokia','Sony','Haier','infinix','Vivo','Redmi']

document.write( "<select name = '' id=''>"+
    
'<option value="option1">'+companyName[0]+'</option>'+
'<option value="option2">'+companyName[1]+'</option>'+
'<option value="option3">'+companyName[2]+'</option>'+
'<option value="option4">'+companyName[3]+'</option>'+
'<option value="option5">'+companyName[4]+'</option>'+
'<option value="option6">'+companyName[5]+'</option>'+
'<option value="option7">'+companyName[6]+'</option>'+
'<option value="option8">'+companyName[7]+'</option>'+
'<option value="option9">'+companyName[8]+'</option>'+

 '</select>') 