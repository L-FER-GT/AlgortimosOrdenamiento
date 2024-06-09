function selectionSort(A, n = A.length) {
    for (var i = 0; i < n - 1; i++) {
        var min = i; // Inicializa el índice del mínimo como i
        for (var j = i + 1; j < n; j++) {
            if (A[j] < A[min]) {
                min = j; // Actualiza el índice del mínimo si se encuentra un elemento más pequeño
            }
        }
        // Intercambia A[i] con A[min] si el mínimo encontrado es diferente de i
        if (min !== i) {
            var temp = A[i];
            A[i] = A[min];
            A[min] = temp;
        }
    }
    return A; // Devuelve el arreglo ordenado
}
export default selectionSort