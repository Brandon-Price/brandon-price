function goToGithub(){
    window.open("https://github.com/Brandon-Price").focus();
    return;
}

function goToLinkedIn(){
    window.open('https://www.linkedin.com/in/brandonprice-/').focus();
    return;
}

function goToRepo(url){
    if(url == 'Ecommerce'){
        window.open("https://github.com/Brandon-Price/SWE-Project").focus();
        return;
    }
    else{
        window.open("https://github.com/Brandon-Price").focus();
        return;
    }
}