

let bar = document.querySelector('#bar')
let liste = document.querySelector('#bar_liste')

if (bar)
{
    bar.addEventListener("click",(e)=>{
        e.preventDefault();
        if (bar.classList.contains("fa-bars"))
        {
            liste.style.display = "flex" ; 
            bar.classList.remove("fa-bars");
            bar.classList.add("fa-x");
        }else
        {
            liste.style.display = "none";
            bar.classList.remove("fa-x");
            bar.classList.add("fa-bars");
        }
    })
}