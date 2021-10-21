const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

//MOVIE WRAPPING ARROW
arrows.forEach((arrow,i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(innerWidth/300);
        clickCounter++;
        if(itemNum - (ratio+clickCounter) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
        }
        else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    })
})

//TOGGLE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar, .navbar-container, .sidebar, .left-menu-icon, .toggle, .featured-content");
ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
