document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  let button1 = document.querySelector(".button1");
  let button2 = document.querySelector(".button2");
  let button3 = document.querySelector(".button3");
  let button4 = document.querySelector(".button4");
  let mainDiv = document.querySelector(".mainBody");
  let posts = "";
  // button1.addEventListener("click",(event) => {
  //   debugger;
  // })
  const restaurants = {
    tacoMix: "tacoMix",
    chipotle: "chipotle",
    halalGuys: "halalGuys",
    fiveGuys: "5Guys",
    misoyaRamen: "misoyaRamen",
    houseOfThai: "houseOfThai",
    nyonya: "nyonya",
    auxEpices: "auxEpices",
    griddles: "griddles",
    theBaronessBarAndKitchen: "theBaronessBar&Kitchen",
    elReyDelTacoTruck: "elReyDelTacoTruck",
    bareBurgers: "bareBurgers",
    bodai: "bodai",
    smileOfTheBeyond: "smileOfTheBeyond",
  };
  let val = Object.keys(restaurants);
//
//   const display = val => {
//
//       val.forEach(el => {
//         button1.addEventListener("click", event => {
//         if (event.target.innerText === "burgers") {
//           posts = `<p>${val[3]} <br /> ${val[11]} <br /> ${val[8]} <br />${
//             val[9]
//           }</p>`;
//           mainDiv.innerHTML = posts;
//         }  button2.addEventListener("click", event => {
//         if(event.target.innerText === "international foods"){
//           posts = `<p>${val[2]} <br /> ${val[4]} <br /> ${val[0]} <br />
//           ${val[5]} <br /> ${val[6]} <br /> ${val[7]}</p> `;
//         }
//       }); //forEach loop
//     }); //button1 event listener
//   })
//   }; //closing display function
//   display(newArr);
// });
    button1.addEventListener("click", event => {
        if (event.target.innerText === "Burgers") {
          posts = `<p class="food">${val[3]} <br /> ${val[11]} <br /> ${val[8]} <br /> ${val[9]}</p>`;
          mainDiv.innerHTML = posts;
          }
        })
        button2.addEventListener("click", event => {
            if (event.target.innerText === "International foods") {
              posts = `<p class="food">${val[2]} <br /> ${val[4]} <br /> ${val[0]} <br /> ${val[5]} <br />
              ${val[6]} <br> ${val[7]} </p>`;
              mainDiv.innerHTML = posts;
              }
            })
            button3.addEventListener("click", event => {
                if (event.target.innerText === "Vegetarian") {
                  posts = `<p class="food">${val[12]} <br /> ${val[13]} </p>`;
                  mainDiv.innerHTML = posts;
                  }
                })
                button4.addEventListener("click", event => {
                    if (event.target.innerText === "Spicy") {
                      posts = `<p class="food">${val[1]} <br /> ${val[4]} <br /> ${val[5]} <br /> ${val[9]} </p>`;
                      mainDiv.innerHTML = posts;
                      console.log(posts);
                      }
                    })
})//DOMContentLoaded
