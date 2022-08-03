let title = document.querySelector("#info .container .card h1");
// console.log(title);
let spaceNumber = document.querySelector(".flight-number");
let launchDate = document.querySelector(".launch-date");
let fireDate = document.querySelector(".fire-date");
let statusFlight = document.querySelector(".status");
let details = document.querySelector(".details");
let youtubeLink = document.querySelector(".Yout-link");
let wikiLink = document.querySelector(".wiki-link");
let articleLink = document.querySelector(".news-link");
let image = document.querySelector("#info .container img");

function showDetails(dataArr) {
  if (dataArr) {
    title.textContent = dataArr["name"];
    spaceNumber.textContent = dataArr["flightNumber"];
    launchDate.textContent = dataArr["launchDate"];
    fireDate.textContent = dataArr["Fire"];
    details.textContent = dataArr["details"];
    image.src = dataArr["image"];
    youtubeLink.href = dataArr["youtubeLink"];
    wikiLink.href = dataArr["wiki"];
    articleLink.href = dataArr["article"];

    if (dataArr["success"]) {
      statusFlight.textContent = "success";
      statusFlight.style.color = "green";
      statusFlight.style.fontWeight = "500";
    }else {
        statusFlight.textContent = "Failed";
        statusFlight.style.color = "red";
        statusFlight.style.fontWeight = "500";
    }
  }
}
