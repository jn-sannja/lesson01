const array= [];

for(let i = 1; i <= 9 ; i++){
  for(let j=1; j <=9 ; j++){
    array[j-1]=i*j;
  }
  console.log(...array);
  //console.log('\n');
}