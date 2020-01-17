// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	//elements
	let header = document.createElement("div");
	let date = document.createElement("span");
	let h1 = document.createElement("h1");
	let temp = document.createElement("span");

	//append
	header.append(date);
	header.append(h1);
	header.append(temp);

	//classes
	header.classList.add("header");
	date.classList.add("date");
	temp.classList.add("temp");

	//content
	date.textContent = "SMARCH 28, 2019";
	h1.textContent = "Lambda Times";
	temp.textContent = "98°";

	return header;
}

let container = document.querySelector(".header-container").append(Header());
