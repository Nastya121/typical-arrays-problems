exports.min = function min (array) {
  try{  let count=0;
for(let i=0;i<array.length;i++){
if(array[i]<count){count=array[i];}
}
return count;}
catch{return 0;}
}


exports.max = function max (array) {
try{
 let count=0;
for(let i=0;i<array.length;i++){
if(array[i]>count){count=array[i];}
}
return count;}
  catch{return 0;}
}

exports.avg = function avg (array) {
try{
  let count=0;
for(let i=0;i<array.length;i++){
count+=array[i];
p=count/array.length;
}

  return p;}
 

   catch{return 0;}
 }
