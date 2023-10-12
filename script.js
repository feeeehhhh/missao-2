function swap(array, para, de) {
    array.splice(de, 0, array.splice(para, 1)[0])
    return array
  }
  
  
  function shuflle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  
  
  function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }
      }
    }
    console.log(array);
  }
  
  
  function select_sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      var aux = array[i]
      array[i] = array[minIndex]
      array[minIndex] = aux
    }
    console.log(array)
  }
  
  function quick_sort(array) {
    if (array <= 1) return array;
    const pivot = array[0];
    const esquerda = [];
    const direita = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        esquerda.push(array[i]);
      } else {
        direita.push(array[i]);
      }
    }
    console.log(quick_sort(esquerda).concat(pivot, quick_sort(direita)));
  }
  
  
  /* input do vetor */
  let arr = []
  function pushData() {
    let input = document.getElementById("input").value;
    arr.push(input);
    let node = document.createElement("li")
    let pval = "";
  
    for (i = 0; i < arr.length; i++) {
      pval = pval + ("<li>" + arr[i]);
    }
    input.value="";
    document.getElementById('text').innerHTML = pval;
  }
  
  
  let selectedObj = {
    bubble_sort: () => { bubble_sort(arr) },
    select: () => { select_sort(arr) },
    quick_sort: () => { quick_sort(arr) }
  }
  
  function selectedOn() {
    let select01 = document.getElementById('select');
  
    console.log(select01.value)
    console.log(selectedObj)
    return selectedObj[select01.value]();
}