function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const BASE_URL = "https://www.youtube-nocookie.com/embed/";

var selected_list;
var index;
var total;

function categoryClickLogic(e) {
    e.preventDefault(); // Override href to do a smooth scroll
    
    document.querySelector("#video-container").style.display = "flex";
    
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
    
	var listFactory = new ListFactory(this.id); // Chooses the correct list based on id
	
	total = listFactory.list.length;
	selected_list = listFactory.list;
        
    index = getRandomInt(0, total);
    var embed_url = BASE_URL + selected_list[index].link;
    
    document.querySelector("#vid-index").innerText = (index + 1) + "/" + total;
    document.querySelector("#creator").innerText = selected_list[index].creator;
    document.querySelector("#workout-video").setAttribute("src", embed_url);
}

const categoryButton = document.querySelectorAll(".exercise");

for (var i = 0; i < categoryButton.length; i++) {
    categoryButton[i].addEventListener("click", categoryClickLogic, event);
}

document.querySelector("#reroll-btn").addEventListener("click", function(){
    index = getRandomInt(0, total);
    var embed_url = BASE_URL + selected_list[index].link;
    
    document.querySelector("#vid-index").innerText = (index + 1) + "/" + total;
    document.querySelector("#creator").innerText = selected_list[index].creator;
    document.querySelector("#workout-video").setAttribute("src", embed_url);
});


document.querySelector("#left-vid").addEventListener("click", function(){
    if (index == 0) {
        index = selected_list.length - 1;
    } else {
        index = index - 1;     
    }
    
    var embed_url = BASE_URL + selected_list[index].link;
    
    document.querySelector("#vid-index").innerText = (index + 1) + "/" + total;
    document.querySelector("#creator").innerText = selected_list[index].creator;
    document.querySelector("#workout-video").setAttribute("src", embed_url);
});

document.querySelector("#right-vid").addEventListener("click", function(){
    index = (index + 1) % selected_list.length;
    var embed_url = BASE_URL + selected_list[index].link;
        
    document.querySelector("#vid-index").innerText = (index + 1) + "/" + total;
    document.querySelector("#creator").innerText = selected_list[index].creator;
    document.querySelector("#workout-video").setAttribute("src", embed_url);
});
