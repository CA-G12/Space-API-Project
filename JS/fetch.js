let url1 = "https://api.spacexdata.com/v5/launches";
let url2 = "https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY";

const fetch = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      cb(data);
    }
  };
  xhr.open("GET", url);
  xhr.send();
};

