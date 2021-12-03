 /* global d3, scrollama */

 var main = document.querySelector("main");
 var scrolly = main.querySelector("#scrolly");
 var sticky = scrolly.querySelector(".sticky-thing");
 var article = scrolly.querySelector("article");
 var steps = article.querySelectorAll(".step");

 // initialize the scrollama
 var scroller = scrollama();

 // scrollama event handlers
 function handleStepEnter(response) {
   // response = { element, direction, index }
   var el = response.element;

   // remove is-active from all steps
   // then add is-active to this step
   steps.forEach(step => step.classList.remove('is-active'));
   el.classList.add('is-active');

   // update graphic based on step
   sticky.querySelector("p").innerText = el.dataset.step;
   // sticky.querySelector("observablehq-chart2-b51b1c03").innerText = el.dataset.step;
    
 }

 function init() {
   scroller
     .setup({
       step: "#scrolly article .step",
       offset: 0.5,
       debug: true
     })
     .onStepEnter(handleStepEnter);

   // setup resize event
   window.addEventListener("resize", scroller.resize);
 }

var scrolly_1 = main.querySelector("#scrolly_1");
var sticky_1 = scrolly_1.querySelector(".sticky-thing_1");
var article_1 = scrolly_1.querySelector("article_1");
var steps_1 = article_1.querySelectorAll(".step_1");

// initialize the scrollama
var scroller_1 = scrollama();

// scrollama event handlers
function handleStepEnter_1(response) {
// response = { element, direction, index }
var el = response.element;

// remove is-active from all steps
// then add is-active to this step
steps_1.forEach(step_1 => step_1.classList.remove('is-active'));
el.classList.add('is-active');

// update graphic based on step
sticky_1.querySelector("p").innerText = el.dataset.step;
}

function init_1() {
scroller_1
 .setup({
   step: "#scrolly_1 article_1 .step_1",
   offset: 0.5,
   debug: false
 })
 .onStepEnter(handleStepEnter_1);

// setup resize event
window.addEventListener("resize", scroller_1.resize);
}

// using d3 for convenience
// var main = document.querySelector("main");
var scrolly_2 = main.querySelector("#scrolly_2");
var sticky_2 = scrolly_2.querySelector(".sticky-thing_2");
var article_2 = scrolly_2.querySelector("article_2");
var steps_2 = article_2.querySelectorAll(".step_2");

// initialize the scrollama
var scroller_2 = scrollama();

// scrollama event handlers
function handleStepEnter_2(response) {
// response = { element, direction, index }
var el = response.element;

// remove is-active from all steps
// then add is-active to this step
steps_2.forEach(step_2 => step_2.classList.remove('is-active'));
el.classList.add('is-active');

// update graphic based on step
sticky_2.querySelector("p").innerText = el.dataset.step;
}

function init_2() {
scroller_2
 .setup({
   step: "#scrolly_2 article_2 .step_2",
   offset: 0.5,
   debug: false
 })
 .onStepEnter(handleStepEnter_2);

// setup resize event
window.addEventListener("resize", scroller_2.resize);

//TEST SCROLL
 /**
* Animation on scroll
*/
window.addEventListener('load', () => {
 AOS.init({
   duration: 1000,
   easing: "ease-in-out",
   once: true,
   mirror: false
 });
});


}

var scrolly_3 = main.querySelector("#scrolly_3");
var sticky_3 = scrolly_3.querySelector(".sticky-thing_3");
var article_3 = scrolly_3.querySelector("article_3");
var steps_3 = article_3.querySelectorAll(".step_3");

// initialize the scrollama
var scroller_3 = scrollama();

// scrollama event handlers
function handleStepEnter_3(response) {
// response = { element, direction, index }
var el = response.element;

// remove is-active from all steps
// then add is-active to this step
steps_3.forEach(step_3 => step_3.classList.remove('is-active'));
el.classList.add('is-active');

// update graphic based on step
sticky_3.querySelector("p").innerText = el.dataset.step;
}

function init_3() {
scroller_3
 .setup({
   step: "#scrolly_3 article_3 .step_3",
   offset: 0.5,
   debug: false
 })
 .onStepEnter(handleStepEnter_3);

// setup resize event
window.addEventListener("resize", scroller_3.resize);
}

var scrolly_4 = main.querySelector("#scrolly_4");
var sticky_4 = scrolly_4.querySelector(".sticky-thing_4");
var article_4 = scrolly_4.querySelector("article_4");
var steps_4 = article_4.querySelectorAll(".step_4");

// initialize the scrollama
var scroller_4 = scrollama();

// scrollama event handlers
function handleStepEnter_4(response) {
// response = { element, direction, index }
var el = response.element;

// remove is-active from all steps
// then add is-active to this step
steps_4.forEach(step_4 => step_4.classList.remove('is-active'));
el.classList.add('is-active');

// update graphic based on step
sticky_4.querySelector("p").innerText = el.dataset.step;
}

function init_4() {
scroller_4
 .setup({
   step: "#scrolly_4 article_4 .step_4",
   offset: 0.5,
   debug: false
 })
 .onStepEnter(handleStepEnter_4);

// setup resize event
window.addEventListener("resize", scroller_4.resize);
}

// kick things off
init();
init_1()
init_2();
init_3();
init_4();