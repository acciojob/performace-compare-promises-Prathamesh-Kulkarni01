// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
let promises=apiUrls.map((url)=>{
	return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error(`Failed to fetch data from ${url}:`, error);
      throw error;
    });
})
function calculate(p){
	const start=performance.now()
	return p.then(()=>performance.now()-start)
}
const t1=calculate(Promise.all(promises))
const t2=calculate(Promise.any(promises))
console.log(t1)
Promise.all([t1,t2]).then(([t11,t22])=>{
	  const outputAll = document.getElementById("output-all");
  const outputAny = document.getElementById("output-any");
	console.log("aaaaa",outputAll)
	// let b=document.getElementById("output-any")
	outputAll.innerText=t11.toFixed(2)
	outputAny.innerText=t22.toFixed(2)
	
})
