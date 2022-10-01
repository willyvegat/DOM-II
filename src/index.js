import './less/index.less'

// Your code goes here!

// 1-load
// window.onload = function (evt) {
//     console.log(`event ${evt.type} fired! Ready to go!`);
//     const heading = document.querySelector("h1");
//     heading.textContent = "READY TO GO!";
window.addEventListener("load", (event) => {
    console.log(`event ${event.type} is fully Loaded and Ready`);
    const heading = document.querySelector("h1");
    heading.textContent = "Here We GOO!";

    // 2-copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text;
                //console.log(text);
            })
    })

    // 3-click
    document.body.addEventListener("click", (evt) => {
        evt.target.classList.toggle("mirror");
    })
})
