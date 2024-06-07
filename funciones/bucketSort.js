

function bucketSort(A, n) {
    var B = [];
    var sortedArray = [];

    // Inicializar las listas B
    for (var i = 0; i < n; i++) {
        B[i] = [];
    }

    // Insertar elementos en las listas B
    for (var i = 0; i < n; i++) {
        var bucketIndex = Math.floor(n * A[i]);
        B[bucketIndex].push(A[i]);
    }

    // Ordenar las listas B usando insertion sort
    for (var i = 0; i < n; i++) {
        insertionSort(B[i]);
    }

    // Concatenar las listas B
    for (var i = 0; i < n; i++) {
        sortedArray = sortedArray.concat(B[i]);
    }

    return sortedArray;
}
export default bucketSort