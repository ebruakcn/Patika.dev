const cardData = [
    {
        title: "DeadPool",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/deadpool.jfif",
        type: "comedy",
        isFavorited: false
    },
    {
        title: "Karayip Korsanlar",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/karayipkorsanlar.jfif",
        type: "thriller",
        isFavorited: false
    },
    {
        title: "Korku Kapanı",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/korkukapani.jfif",
        type: "science fiction",
        isFavorited: false
    },
    {
        title: "Korkunç bir Film",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/korkuncbirfilm.jfif",
        type: "Comedy",
        isFavorited: false
    },
    {
        title: "Kill Bill",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/killbill.jfif",
        type: "science fiction",
        isFavorited: false
    },
    {
        title: "Assassin's Creed",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/AssassinsCreed.jfif",
        type: "science fiction",
        isFavorited: false
    },
   
    {
        title: "Harley Quinn",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/harleyquinn.jfif",
        type : "drama",
        isFavorited: false
    },
    {
        title: "Harry Potter",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi numquam sapiente dolore nihil corrupti magni neque hic vero porro.",
        image: "./images/harrypotter.jfif",
        type: "science fiction",
        isFavorited: false
    },
    
    
    ];
    
    const cardsContainer = document.getElementById("card-container");
    
    function renderCards(data) {
        cardsContainer.innerHTML = "";
        data.forEach(cardDataItem => {
            const cardHTML = `
                <div class="card mx-4 mt-2" style="width: 18rem;">
                    <div style="position: relative;">
                        <img class="card-img-top" src="${cardDataItem.image}" alt="Card image cap">
                        <i style="position: absolute; top: 10px; right: 10px;" class="fa-solid fa-star star-icon ${cardDataItem.isFavorited ? 'favorited' : ''}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${cardDataItem.title}</h5>
                        <p class="card-text">${cardDataItem.description}</p>
                        <a href="#" class="btn btn-primary" id="getDetails">Get Details</a>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += cardHTML;
        });
    
        document.querySelectorAll('.star-icon').forEach(starIcon => {
            starIcon.addEventListener('mouseover', function() {
                this.classList.remove('fa-solid');
                this.classList.add('fa-regular');
            });
            starIcon.addEventListener('mouseout', function() {
                this.classList.remove('fa-regular');
                this.classList.add('fa-solid');
            });
            starIcon.addEventListener('click', function() {
                const isFavorited = !this.classList.contains('favorited');
                this.classList.toggle('favorited', isFavorited);
                const title = this.parentElement.nextElementSibling.querySelector('.card-title').innerText;
                updateCardData(title, isFavorited);
            });
        });
    }
    
    renderCards(cardData);
    
    function updateCardData(title, isFavorited) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
        if (isFavorited) {
            if (!favorites.includes(title)) {
                favorites.push(title);
            }
        } else {
            favorites = favorites.filter(fav => fav !== title);
        }
    
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    
    document.getElementById('favBtn').addEventListener('click', function() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const favoriteCards = cardData.filter(card => favorites.includes(card.title));
        renderCards(favoriteCards);
    });
    
    document.getElementById("drama").addEventListener('click', function() {
        const dramaCards = cardData.filter(data => data.type === "drama");
        renderCards(dramaCards);
    });
    
    document.getElementById("sci-fi").addEventListener('click', function() {
        const scifiCards = cardData.filter(data => data.type === "science fiction");
        renderCards(scifiCards);
    });
    
    document.getElementById("comedy").addEventListener('click', function() {
        const comedyCards = cardData.filter(data => data.type === "comedy");
        renderCards(comedyCards);
    });
    
    document.getElementById("thriller").addEventListener('click', function() {
        const thrillerCards = cardData.filter(data => data.type === "thriller");
        renderCards(thrillerCards);
    });
    
    
    document.getElementById("getDetails").addEventListener("click", () => {
        localStorage.setItem("selectedCard", JSON.stringify(cardData));
        window.location.href = "product.html";
    });
    
    document.addEventListener("DOMContentLoaded", () => {
        const cardDataItem = JSON.parse(localStorage.getItem("selectedCard"));
    
        if (cardDataItem) {
            const cardHTML = `
            <div class="card mx-4 mt-2" style="width: 18rem;">
                    <div style="position: relative;">
                        <img class="card-img-top" src="${cardData.image}" alt="Card image cap">
                        <i style="position: absolute; top: 10px; right: 10px;" class="fa-solid fa-star star-icon ${cardData.isFavorited ? 'favorited' : ''}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${cardData.title}</h5>
                        <p class="card-text">${cardData.description}</p>
                        <a href="#" class="btn btn-primary" id="getDetails">Get Details</a>
                    </div>
                </div>
            `;
            document.getElementById("card-container").innerHTML = cardHTML;
        }
    });