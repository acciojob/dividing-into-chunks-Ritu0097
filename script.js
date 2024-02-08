const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let k={};
  for(let i=0;i<arr.length();i++){
	  for(let j=i+1;j<arr.length;j++){
		  if(arr[i]+arr[j]===n&&n<0){
			  k=(i,j);
		  }
	  }
	  return k;
  }
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
