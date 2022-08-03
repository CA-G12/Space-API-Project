//Accessing the HTML elements
let spaceContainer = document.querySelector("#space-container .container");

const handleDom = (dataRandom, index, data) => {
  //Create the card div
  let createDiv = document.createElement("div");
  createDiv.classList = "card";
  spaceContainer.appendChild(createDiv);

  //Create the card elements
  let img = document.createElement("img");
  img.src = dataRandom["links"]["patch"]["small"];
  img.setAttribute("referrerpolicy", "no-referrer");
  img.alt = dataRandom["name"];
  createDiv.appendChild(img);

  let heading = document.createElement("h3");
  heading.textContent = dataRandom["name"];
  createDiv.appendChild(heading);
  createDiv.setAttribute("data-id", index);

  //Add eventListener to the createDiv
  createDiv.addEventListener("click", () => {
    let id = index;
    let sendData = data[id];
    let obj = {
      name: sendData.name,
      success: sendData.success,
      image: sendData.links.patch.small,
      flightNumber: sendData.flight_number,
      details: sendData.details,
      Fire: sendData.static_fire_date_utc,
      launchDate: sendData.date_local,
      youtubeLink: sendData.webcast,
      article: sendData.article,
      wiki: sendData.wikipedia,
    };

    let dataArr = JSON.parse(localStorage.getItem("flights") || "[]");
    dataArr.push(obj);
    localStorage.setItem("flights", JSON.stringify(dataArr));
  });
};
