function convertToRoman(num) {
 let answer = ''
 if (num >= 1000){
   let times = Math.floor(num / 1000)
   for (let i = 0; i < times; i++){
     answer += 'M'
   }
   num = num - (1000 * times)
 }
 if (num >= 900){
   answer += 'CM'
   num = num - 900
 }
 if (num >= 500){
   answer += 'D'
   num = num - 500
 }
 if (num >= 400){
   answer += 'CD'
   num = num - 400
 }
 if (num >= 100){
   let times = Math.floor(num / 100)
   for (let i = 0; i < times; i++){
     answer += 'C'
   }
   num = num - (100 * times)
 }
 if (num >= 90){
   answer += 'XC'
   num = num - 90
 }
 if (num >= 50){
   answer += 'L'
   num = num - 50
 }
 if (num >= 40){
   answer += 'XL'
   num = num - 40
 }
 if (num >= 10){
   let times = Math.floor(num / 10)
   for (let i = 0; i < times; i++){
     answer += 'X'
   }
   num = num - (10 * times)
 }
 if (num >= 9){
   answer += 'IX'
   num = num - 9
 }
 if (num >= 5){
   answer += 'V'
   num = num - 5
 }
 if (num >= 4){
   answer += 'IV'
   num = num - 4
 }
 if (num >= 1){
   for (let i = 0; i < num; i++){
     answer += 'I'
   }
   num = 0 
 }
 return answer;
}