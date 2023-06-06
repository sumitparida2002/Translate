"use strict";
const header = document.querySelector(".originalH");
const body = document.querySelector(".originalB");
const dropDownMenu = document.querySelector(".dropdownMT");
const handleClick = (e) => {
    dropDownMenu.classList.toggle("visible");
    body.classList.toggle("hidden");
    console.log(dropDownMenu);
    console.log(body);
};
header.onclick = handleClick;
//# sourceMappingURL=scripts.js.map