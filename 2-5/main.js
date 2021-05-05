const input = process.argv[2];

console.log('100円玉'+parseInt(input/100)+'枚, 10円玉'+parseInt(input%100/10)+'枚, 1円玉'+parseInt(input%10)+'枚');