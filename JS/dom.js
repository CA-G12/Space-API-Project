const spaceContainer = document.querySelector("#space-container .container");
const state = [];
const OFFSET = 10;
let limit = OFFSET;

function handleDom(data) {
  let createDiv = document.createElement("div");
  createDiv.classList = "card";
  spaceContainer.appendChild(createDiv);

  let img = document.createElement("img");
  img.src = data["links"]["patch"]["small"];
  img.setAttribute("referrerpolicy", "no-referrer");
  img.alt = data["name"];
  createDiv.appendChild(img);

  let heading = document.createElement("h3");
  heading.textContent = data["name"];
  createDiv.appendChild(heading);
  createDiv.setAttribute("data-id", data.id);

  createDiv.addEventListener("click", () => {
    let id = data.id;
    let sendData = data;

    let obj = {
      name: sendData.name,
      success: sendData.success,
      image: sendData.links.patch.small,
      flightNumber: sendData.flight_number,
      details: sendData.details,
      Fire: sendData.static_fire_date_utc,
      launchDate: sendData.date_local,
      youtubeLink: sendData.links.webcast,
      article: sendData.links.article,
      wiki: sendData.links.wikipedia,
    };
    document.querySelector("#info").style.display = "flex";
    document.querySelector("#space-container").style.display = "none";
    showDetails(obj);
    let dataArr = JSON.parse(localStorage.getItem("flights") || "[]");
    dataArr[0] = obj;

    localStorage.setItem("flights", JSON.stringify(dataArr));
  });
}
const input = document.getElementById("search");
input.addEventListener("input", (e) => {
  const { value } = e.target;

  if (value) {
    const filteredResults = state.filter(({ name }) =>
      name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    limit = OFFSET;
    generateCards(filteredResults.slice(0, limit));
  }
});

const show = document.querySelector("#show-more");
show.addEventListener("click", () => {
  limit += OFFSET;
  generateCards(state.slice(0, limit));
});


let loader = document.querySelector('.loader')
window.addEventListener('load', () => {
  setTimeout(() =>{
    loader.style.display = 'none'
  }, 2000)
})

const generateCards = (data) => {
  spaceContainer.textContent = "";
  // return randomized list
  data
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
    .forEach((element) => {
      handleDom(element);
    });
};

fetch(url1, (res) => {
  state.push(...res);
  generateCards(res);
});
