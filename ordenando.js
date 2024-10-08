// a) Função swap
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// b) Função shuffle
const shuffle = (arr, swaps) => {
  for (let i = 0; i < swaps; i++) {
    let j = Math.floor(Math.random() * arr.length);
    swap(arr, i, j);
  }
};

// c) Função bubble_sort
const bubble_sort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// d) Função selection_sort
const selection_sort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
};

// e) Função quick_sort
const quick_sort = (arr, start, end) => {
  if (start < end) {
    let pivotIndex = particionamento(arr, start, end);
    quick_sort(arr, start, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, end);
  }
};

// f) Função particionamento
const particionamento = (arr, start, end, pivotIndex = end) => {
  let pivot = arr[pivotIndex];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, pivotIndex);
  return i + 1;
};
  