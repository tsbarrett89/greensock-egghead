import { TweenMax, gsap } from 'gsap'

const divs = Array.from({length: 100}, () => 
    document.createElement('div')
)

divs.forEach(div => {
    TweenMax.set(div, {
        position: "absolute",
        x: `${Math.random() * window.innerWidth}px`,
        y: `${Math.random() * window.innerHeight}px`,
        width: 20,
        height: 20,
        backgroundColor: 'green',
        border: "3px solid black"
    })
    
    document.body.appendChild(div)
})

gsap.to(divs, 10, { x: 100, y: 100 })

document.addEventListener("click", event => {
    gsap.killTweensOf(event.target)
})


// TweenMax.set("#box", {
//     backgroundColor: "green",
//     width: "50px",
//     height: "50px",
//     x: "50px",
//     y: "50px"
// })

// const timeline = new TimelineMax({ repeat: -1 })

// timeline.pause()

// timeline.to("#box", 0.5, { x: 100 })
// timeline.to("#box", 0.5, { y: 100 })
// timeline.to("#box", 0.5, { x: 50 })
// timeline.to("#box", 0.5, { y: 50 })

// document.getElementById("box").addEventListener('click', (e) => {
//     e.stopPropagation()
//     if(timeline.isActive()){
//         timeline.pause()
//     }else{
//         timeline.resume()
//     }
// })

// document.addEventListener('wheel', event => {
//     if(event.wheelDelta > 0){
//         TweenMax.to(timeline, .25, {progress: "+=0.1"})
//     } else {
//         TweenMax.to(timeline, .25, {progress: "-=0.1"})
//     }
    
// })

// document.addEventListener('click', event => {
//     const { x, y } = event
//     TweenMax.fromTo('#box', 1, { x, y }, { x: 200, y: 200 })
// })