const container = document.querySelector('.container');
let n =30000;
for (let i=1; i< n;i++) {
    const a = document.createElement('div');
    a.setAttribute('class', 'a');
    container.append(a)
    a.addEventListener('mouseover', ()=>{
        a.style.background='greenyellow'
    })
    a.addEventListener('mouseleave', ()=>{
        a.style.background=''
    })
}
