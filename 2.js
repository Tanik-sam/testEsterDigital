function sort(arr){
    function compareBit(a,b){
         if (a.toString(2)<b.toString(2)){return -1};
         if (a.toString(2)>b.toString(2)){return 1};
         if (a.toString(2)===b.toString(2)){
             if (a<b){return -1};
             if (a<b){return 1}
            }
          
}
return( arr.sort(compareBit))
}
let array=[7, 6, 15, 8];
console.log (sort(array))


/*Отсортировать массив 32-битных целых чисел в порядке возрастания количество бит в этих числах.

Исходный массив: [7, 6, 15, 8]
	7 - 3 бита (000...0111)
 	6 - 2 бита (000...0011)
15 - 4 бита (000...1111)
8 - 1 бит (000...1000)
Отсортированный массив: [8, 6, 7, 15].

	В случае, если 2 числа имеют одинаковое количество бит, вместо бит сравниваются сами числа. Например 10 (...1010) и 12 (...1100) оба имеют одинаковое количество бит (2), но 10 < 12, поэтому в отсортированном массиве оно будет перед 12 ([..., 10, 12, …]).
	
	Необходимо написать функцию которая принимает массив целых чисел и сортирует его, функция должна изменять входящий массив, а не создавать новый.*/