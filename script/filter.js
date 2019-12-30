/* Mogelijk het dynamisch maken m.b.v. innerHTML in Javascript. toegevoegd op 13 dec 2019 */

const books = [
    {
        id: 0,
        name: "Verdwaald",
        leestijd: 20,
        genre: "drama",
        background: "../assets/img/procesverbaal.card.png",
        link: "pages/procesverbaal.html"
    },
    {
        id: 1,
        name: "Pijnlijk",
        leestijd: 20,
        genre: "horror",
        background: "../assets/img/procesverbaal.card.png",
        link: "pages/procesverbaal.html"
    },
    {
        id: 2,
        name: "Onbekende omgeving",
        leestijd: 20,
        genre: "amusement",
        background: "../assets/img/procesverbaal.card.png",
        link: "pages/procesverbaal.html"
    },
]





/* Mogelijk het dynamisch maken m.b.v. innerHTML in Javascript. Bij onderstaand gedeelte hulp gekregen van Eric Roos https://www.linkedin.com/in/ericroos/ */

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main")
    books.forEach(book => {
        const article = document.createElement("article");
        if (book.name.toLocaleLowerCase().indexOf("") < 0) {
            return
        }
        const liked = JSON.parse(localStorage.getItem(`${book.id}-liked`))
        article.style.backgroundImage = `url(${book.background})`
        article.innerHTML = `
            <a href=${book.link}></a>
            <h3>${book.name}</h3>

            <button type="button" class="top ${liked ? "liked" : ""}"><img src=${liked ? "../assets/icons/Icon-heart.svg":"../assets/icons/Icon-heart.svg"} alt="Hartjes icoon"></button>
            <button type="button" class="bottom beoordeling" id="alliteratie"><img src="../assets/icons/Icon-like.svg" alt="Hartjes icoon"></button> 
            <footer>
                <p>Leestijd - ${book.leestijd}</p>
                <p>Genre - ${book.genre}</p>
            </footer>
        `
        const likebutton = article.querySelector(".top")
        article.querySelector(".top").addEventListener("click", () => {
            const liked = !JSON.parse(localStorage.getItem(`${book.id}-liked`))
            localStorage.setItem(`${book.id}-liked`, liked)
            // also change class here

            likebutton.classList.toggle("liked")

        })
        main.appendChild(article)
    })

})
