// // ================= Untuk ganti gambar tiap pindah list lates-project ========================

let content_LatestProject = document.querySelectorAll(".content-group-latest-project");
let list_LatestProject = document.querySelectorAll(".list-latest-project");
const listAll = list_LatestProject[0];
const listNature = list_LatestProject[1];
const listIndustrial = list_LatestProject[2];
const listMore = list_LatestProject[3];

for (let i = 0; i < list_LatestProject.length; i++){
    if (i === 0){
        content_LatestProject[i].classList.add("elementToFade", "Zindex", "display-appear");            
    }
    else{
        content_LatestProject[i].classList.add("display-none");
    }
}

// latest project = ALL
listAll.addEventListener("click", function(){
    for (let i = 0; i < list_LatestProject.length; i++){
        if (i === 0){
            content_LatestProject[i].classList.add("elementToFade", "Zindex", "display-appear");            
        }
        else{
            content_LatestProject[i].classList.add("display-none");
            content_LatestProject[i].classList.remove("elementToFade", "Zindex", "display-appear");
        }
    }
});

// // latest project = NATURE
listNature.addEventListener("click", function(){
    for (let i = 0; i < list_LatestProject.length; i++){
        if (i === 1){
            content_LatestProject[i].classList.add("elementToFade", "Zindex", "display-appear");            
        }
        else{
            content_LatestProject[i].classList.add("display-none");
            content_LatestProject[i].classList.remove("elementToFade", "Zindex", "display-appear");
        }
    }
});

// // latest project = INDUSTRIAL
listIndustrial.addEventListener("click", function(){
    for (let i = 0; i < list_LatestProject.length; i++){
        if (i === 2){
            content_LatestProject[i].classList.add("elementToFade", "Zindex", "display-appear");            
        }
        else{
            content_LatestProject[i].classList.add("display-none");
            content_LatestProject[i].classList.remove("elementToFade", "Zindex", "display-appear");
        }
    }
});

// // latest project = MORE
listMore.addEventListener("click", function(){
    for (let i = 0; i < list_LatestProject.length; i++){
        if (i === 3){
            content_LatestProject[i].classList.add("elementToFade", "Zindex", "display-appear");            
        }
        else{
            content_LatestProject[i].classList.add("display-none");
            content_LatestProject[i].classList.remove("elementToFade", "Zindex", "display-appear");
        }
    }
});

// // ======================================================================================
