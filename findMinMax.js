function findMinMax(array){
  var sortedArray = array.sort(function(a,b){ return a - b}); //The array is being sorted in ascending
                                                     //order
  var firstElement = sortedArray[0];       //store the first element in sorted array 
  var lastElement= sortedArray[(sortedArray.length - 1)];    //store yhe last element in sorted array 
  if (firstElement === lastElement){
    return [firstElement];
  }
  else{
    return [firstElement,lastElement];
  }
}