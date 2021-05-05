//const x = 1;
const x = process.argv[2];
//console.log(x);
//console.log(typeof x);
switch (parseInt(x,10)){

  case 2:
  case 3:
  case 4:
    console.log('春');
    break;
  
  case 5:
  case 6:
  case 7:
    console.log('夏');
    break;

  case 8:
  case 9:
  case 10:
    console.log('秋');
    break;

  case 11:
  case 12:
  case 1:
    console.log('冬');
    break;

  default:
   console.log('0から12を入力してください');
   break;
}
