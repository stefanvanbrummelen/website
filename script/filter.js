var storie1 = ["horor", "duitsland", 20];
var storie2 = ["ali", "duitsland", 12];
var storie3 = ["djfgjh", "nederland", 15];

var stories = [storie1, storie2, storie3];

landFilter = "";
tijd = "";
thema = "";


var filterdStories = [];
for (var i = 0; i < stories.length; i++) {
    storie = stories[i]
    if(storie[0] == thema || thema == ""){
        if(storie[1] == landFilter || landFilter == ""){
            if(storie[2] == tijd || tijd == ""){
                filterdStories.push(storie)
            }
        }
    }
}




/* toegevoegd op 13 dec 2019 */

const books = [
    {
        id:0,
        name: "Proces verbaal",
        leestijd: 20,
        genre: "drama",
        background:"../assets/img/procesverbaal.card.png",
        link: "procesverbaal.html" 
    },
    {
        id:1,
        name: "Alliteratie",
        leestijd: 20,
        genre: "horror",
        background:"../assets/img/procesverbaal.card.png",
        link: "alliteratie.html"
    },
    {
        id:2,
        name: "Jules Deelder",
        leestijd: 20,
        genre: "amusement",
        background:"../assets/img/procesverbaal.card.png",
        link: "julesdeelder.html"
    },
]

document.addEventListener("DOMContentLoaded",()=>{
    const main = document.querySelector("main")
    books.forEach(book => {
        const article = document.createElement("article");
        if(book.name.toLocaleLowerCase().indexOf("") < 0 ){
            return 
        }
        const liked = JSON.parse(localStorage.getItem(`${book.id}-liked` ))
        article.style.backgroundImage=`url(${book.background})`
        article.innerHTML=`
            <a href=${book.link}></a>
            <h3>${book.name}</h3>

            <button type="button" class="top ${liked ? "liked" : ""}"><img src=${liked ? "../assets/icons/Icon-heart_fill.svg":"../assets/icons/Icon-heart.svg"} alt="Hartjes icoon"></button>
            <button type="button" class="bottom beoordeling" id="alliteratie"><img src="../assets/icons/Icon-like.svg" alt="Hartjes icoon"></button> 
            <footer>
                <p>Leestijd - ${book.leestijd}</p>
                <p>Genre - ${book.genre}</p>
            </footer>
        `
        const likebutton =    article.querySelector(".top")
        article.querySelector(".top").addEventListener("click",()=>{
            const liked = !JSON.parse(localStorage.getItem(`${book.id}-liked` ))
            localStorage.setItem(`${book.id}-liked`, liked)
            // also change class here
            
                likebutton.classList.toggle("liked")
            
        })
        main.appendChild(article)
    })

})