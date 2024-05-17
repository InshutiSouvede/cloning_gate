const pages = document.getElementById('navbar2')

function showMore1(){
    const newNav = document.getElementById('navbarsm')
    newNav.classList.add('block')
    newNav.classList.add('bg-white')
    newNav.classList.remove('hidden')
    pages.classList.add('hidden')
    setTimeout(()=>pages.classList.remove('block'),0)    
}
function hide(){
    const newNav = document.getElementById('navbarsm')
    newNav.classList.add('hidden')
    newNav.classList.remove('block')
    pages.classList.add('block')
    setTimeout(()=>pages.classList.remove('hidden'),0)  
}
function showMore2(){
    const newNav = document.getElementById('navbarxs')
    newNav.classList.add('block')
    newNav.classList.add('bg-white')
    newNav.classList.remove('hidden')
    pages.classList.add('hidden')
    setTimeout(()=>pages.classList.remove('block'),0)    
}
function hide2(){
    const newNav = document.getElementById('navbarxs')
    newNav.classList.add('hidden')
    newNav.classList.remove('block')
    pages.classList.add('block')
    setTimeout(()=>pages.classList.remove('hidden'),0)  
}