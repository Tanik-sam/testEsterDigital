
function returnValues (){
    setTimeout(() => {for (var i = 0; i < 5; i++) {console.log(i)}}, 1000);
    }
  returnValues()
/*(дополнительная задача) Дана функция:

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

Необходимо изменить функцию так чтобы она возвращала все значения i (0,1,2,3,4). Нельзя использовать const и let для объявления переменных.
	
*/

