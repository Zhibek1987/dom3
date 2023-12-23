const container = document.querySelector('.container');
let n =30000;
for (let i=1; i< n;i++) {
    const a = document.createElement('div');
    a.setAttribute('class', 'a');
    container.append(a)
    a.addEventListener('mouseover', ()=>{
        a.style.background= randomColor()
    })
    a.addEventListener('mouseleave', ()=>{
        a.style.background=''
    })
}
const randomColor=()=> {
    let b = '#'
    for (let i=1; i<=6;i++){
        b += Math.floor(Math.random()* 10)

    }
    return b
}