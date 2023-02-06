var bookMark = document.getElementById("sname");
var websiteUrl = document.getElementById("wurl");
var btn = document.querySelector(".user-inputs button");
var urlBox = [];
function create() {
  website = {
    mark: bookMark.value,
    url: websiteUrl.value,
  };
  urlBox.push(website);
  reset()
  display();
}

function display() {
  var data = ``;
  for (var i = 0; i < urlBox.length; i++) {
    data += `
        <div id="bookmark" class="row p-3">
                <div class="col-4">
                    <h4 class="fw-bolder">${urlBox[i].mark}</h4>
                </div>
                <div class="col-6">
                    <a href="https://${urlBox[i].url}" target="_blank"><button class="btn btn-primary">Visit</button></a>
                    <button class="btn btn-danger" onclick="remove(${i})">Delete</button>
                </div>
            </div>
        `;
  }
  document.getElementById("container").innerHTML = data;
}

function remove(index) {
    urlBox.splice(index, 1);
    display()
    console.log(urlBox)
}


function reset() {
  bookMark.value = ''
  websiteUrl.value=''
}

