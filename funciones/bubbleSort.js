function bubbleSort(arr) {
    var len = arr.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 1; i < len; i++) {
            if (arr[i - 1] > arr[i]) {
                // Intercambiar elementos
                var temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return arr; // Devolver el arreglo ordenado
}

export default bubbleSort