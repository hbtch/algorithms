//Бинарный поиск
//массив чисел,отсортированный по порядку:
const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0 ;

function binarySearch(array, item) {
//в первую очередь нам необходимо найти центральный элемент в массиве,для этого нам нужно знать позицию первого и последнего элемента
    let start = 0;
    let end = array.length;
    let middle;
//переменная found будет отображать,нашли мы элемент в массиве или нет
    let found = false;
//переменная position это позициця самого элемента,который мы будем возвращать из функции, если элемент не был найден,мы вернем -1
    let position = -1;
//в цикле крутимся до тех пор пока либо не нашли элемент,либо стартовая и конечная позиция не стали равны
    while (found === false && start <= end) {
//считаем количество итераций
        count +=1;
//внутри цикла высчитываем позицию центрального элемента
        middle = Math.floor((start+end) / 2);
//если это полученное среднее значение равно тому,которое мы ищем, цикл остановится
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
//если же на этой итерации мцы не нашли элемент,тогда необходимо проверить
        if(item < array[middle]) {
//тогда нас интересует только левая часть массива,тогда:
            end = middle - 1;
//если же искомый элемент больше центрального,тогда меняем стартовую позицию:
        } else {
            start = middle + 1; 
        }
    }
    return position;
}
console.log(binarySearch(array, 8));
console.log(count);
//Сложность алгоритма: О(log2n) у нас 16 элементов,  2 в 4 степени равен 16, значит 4 максимальное количество операций.

//Сделаем то же самое с помощью рекурсивной функции:
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start+end) / 2)
    count +=1;
    if (item === array[middle]) {
        return middle
    }
    if(item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle-1)
    } else {
        return recursiveBinarySearch(array, item, middle+1, end)
    }
}
console.log(recursiveBinarySearch(array, 12, 0, array.length))
console.log(count)