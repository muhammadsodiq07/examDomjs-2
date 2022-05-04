const pokemons = [{
    id: 1,
    img: "https://www.serebii.net/pokemongo/pokemon/001.png"
  },
  {
    id: 2,
    img: "https://www.serebii.net/pokemongo/pokemon/013.png"
  },
  {
    id: 3,
    img: "https://www.serebii.net/pokemongo/pokemon/002.png"
  },
  {
    id: 4,
    img: "https://www.serebii.net/pokemongo/pokemon/014.png"
  },
  {
    id: 5,
    img: "https://www.serebii.net/pokemongo/pokemon/004.png"
  },
  {
    id: 6,
    img: "https://www.serebii.net/pokemongo/pokemon/015.png"
  },
  {
    id: 7,
    img: "https://www.serebii.net/pokemongo/pokemon/005.png"
  },
  {
    id: 8,
    img: "https://www.serebii.net/pokemongo/pokemon/016.png"
  },
  {
    id: 9,
    img: "https://www.serebii.net/pokemongo/pokemon/006.png"
  },
  {
    id: 10,
    img: "https://www.serebii.net/pokemongo/pokemon/017.png"
  },
  {
    id: 11,
    img: "https://www.serebii.net/pokemongo/pokemon/007.png"
  },
  {
    id: 12,
    img: "https://www.serebii.net/pokemongo/pokemon/025.png"
  },
  {
    id: 13,
    img: "https://www.serebii.net/pokemongo/pokemon/008.png"
  },
  {
    id: 14,
    img: "https://www.serebii.net/pokemongo/pokemon/019.png"
  },
  {
    id: 15,
    img: "https://www.serebii.net/pokemongo/pokemon/009.png"
  }
];



let cardFirst = "";
let ulList = document.querySelector(".game__list");

let cardNewArr = [];
for (let i = 0; i < 4; i++) {
  cardNewArr.push(...pokemons);
}

// Random cards


let randomCount = 6;

function randomCards() {
  let arr_length = 60;
  randomCount--
  if (randomCount < 0) {
    randomCount = 0;
    randomCards().disabled
  }
  document.querySelector(".content__shuff").textContent = randomCount;
  for (let i = 0; i < 100; i++) {
    ulList.innerHTML = ""
    const idx1 = Math.floor(Math.random() * arr_length);
    const idx2 = Math.floor(Math.random() * arr_length);
    const temp = cardNewArr[idx1];
    cardNewArr[idx1] = cardNewArr[idx2];
    cardNewArr[idx2] = temp;
    console.log("fdfds");
  }

  // Creat cards
  // let elCount = document.querySelector(".game__count");
  let imgID = 0;
  let x = 1;
  let y = 1;

  for (let i = 0; i < cardNewArr.length; i++) {
    if (x > 10) {
      x = 1;
      y++;
    }

    imgID++;
    let li = document.createElement("li");
    li.classList.add("game__item");
    li.classList.add(`x-${x}`);
    li.classList.add(`y-${y}`);
    li.id = cardNewArr[i].id
    li.innerHTML = `
  <div class="game__div">
      <img class='img' id=${cardNewArr[i].id} src=${cardNewArr[i].img} alt='img'>
  </div>
  `;

    console.log(li);
    let count = 0;
    li.addEventListener("click", () => {
      if (!li.classList.contains("active")) {
        li.classList.add("active");
      }

      if (!cardFirst) {
        cardFirst = li;

      } else {
        let choiseFirstCard = cardFirst;
        let choiseSeconCard = li;

        if (choiseFirstCard.id == choiseSeconCard.id) {
          const gameCard = cardFirst;
          setTimeout(() => {
            gameCard.innerHTML = "";
            gameCard.style.background = "#1c1f41";
            li.innerHTML = "";
            li.style.background = "#1c1f41";
            count++;
            console.log(count);
            document.querySelector('.game__count').innerHTML = count;
          }, 600);

          cardFirst = undefined;

        } else if (choiseFirstCard.id != choiseSeconCard.id) {
          const gameCard = cardFirst;
          setTimeout(() => {
            gameCard.classList.remove("active");
            li.classList.remove("active");
          }, 1000);
        }
      }
    });
    ulList.appendChild(li);
    x++;
  }
}
randomCards();