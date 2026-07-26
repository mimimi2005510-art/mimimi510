const openBtn =
document.getElementById("openIllustrationLibrary");

const library =
document.getElementById("illustrationLibrary");

const closeBtn =
document.getElementById("closeLibrary");

openBtn.onclick=()=>{
    library.style.display="flex";
}

closeBtn.onclick=()=>{
    library.style.display="none";
}

library.onclick=(e)=>{
    if(e.target===library){
        library.style.display="none";
    }
}
