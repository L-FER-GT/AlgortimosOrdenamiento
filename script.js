//Proyect A
document.addEventListener("DOMContentLoaded", () => {
  //--------------SECCION DE LA TABLA DE COMPARACION-------------------
  container_TablaComparacion = document.getElementById(
    "tablaComparacionContainer"
  );
  container_TablaComparacion.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Bubble Sort
  });
  //--------------SECCION ALGORITMO BUBBLESORT-------------------
  container_BubbleSort = document.getElementById("bubbleSortContainer");
  container_BubbleSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Bubble Sort
  });

  //--------------SECCION ALGORITMO SELECTIONSORT-------------------
  container_SelectionSort = document.getElementById("selectionSortContainer");
  container_SelectionSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Selection Sort
  });

  //--------------SECCION ALGORITMO INSERTIONSORT-------------------
  container_InsertionSort = document.getElementById("insertionSortContainer");
  container_InsertionSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Insertion Sort
  });

  //--------------SECCION ALGORITMO MERGESORT-------------------
  container_MergeSort = document.getElementById("mergeSortContainer");
  container_MergeSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Merge Sort
  });

  //--------------SECCION ALGORITMO QUICKSORT-------------------
  container_QuickSort = document.getElementById("quickSortContainer");
  container_QuickSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Quick Sort
  });

  //--------------SECCION ALGORITMO QUICKSORT RANDOMIZED-------------------
  container_RandomizedQuickSort = document.getElementById(
    "randomizedQuickSortContainer"
  );
  container_RandomizedQuickSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Quick Sort Randomizado
  });

  //--------------SECCION ALGORITMO HEAPSORT-------------------
  container_HeapSort = document.getElementById("heapSortContainer");
  container_HeapSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Heap Sort
  });

  //--------------SECCION ALGORITMO COUNTSORT-------------------
  container_CountSort = document.getElementById("countSortContainer");
  container_CountSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Count Sort
  });

  //--------------SECCION ALGORITMO RADIXSORT-------------------
  container_RadixSort = document.getElementById("radixSortContainer");
  container_RadixSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Radix Sort
  });

  //--------------SECCION ALGORITMO BUCKETSORT-------------------
  container_BucketSort = document.getElementById("bucketSortContainer");
  container_BucketSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Bucket Sort
  });
});

function openModule(evt, moduleName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(moduleName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
