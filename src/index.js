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

    // 4-dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = '';
    })

    // 5-keydown
    window.addEventListener('keydown', evt => {
        //console.log(evt);
        if(evt.key == 6) {
            document.body.innerHTML =  "<h1>PAGED DESTROYED</h1>";
        }
    })

    // 6-mousemove 
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY } = evt;
        //console.log(`mouse is at ${clientX}, ${clientY}`);
    })

    // 7-mouseenter
    // 8-mouseleave
    const destinations = document.querySelectorAll('.destination');
    //console.log(destinations);
    for(let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            //console.log(destinations);
            destination.style.fontWeight = 'bold';
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
            destination.style.fontWeight = 'initial';
            }, 500)
        })
    }

    // 9-mouseover
    document.body.addEventListener('mouseover', event => {
        event.target.style.color = 'pink';
        setTimeout(() => {
            event.target.style.color = '';
        }, 500)
    }, false);
})
