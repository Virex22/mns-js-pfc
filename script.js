const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";

const coups = [P,F,C];

function joueCoupAleatoire(){
    return parseInt(Math.random() * coups.length);
}

let score = {
    user : 0,
    bot : 0
}

function refresh(){
    document.querySelector("#player-score").innerHTML = score.user;
    document.querySelector("#ia-score").innerHTML = score.bot;
    if (score.user >= 3 || score.bot >= 3){
        if (score.user >= 3)
        alert("vous avez gagner");
        else if (score.bot >= 3)
        alert("le robot à gagner");
        score.user = 0;
        score.bot = 0;
        document.querySelector("#player-score").innerHTML = score.user;
        document.querySelector("#ia-score").innerHTML = score.bot;
    }
}
refresh();

document.querySelector("#pierre").addEventListener('click',()=>{
    let botPlay = coups[joueCoupAleatoire()];
    if (botPlay == P) return;
    else if (botPlay == F) score.bot++;
    else score.user++;
    refresh();
})
document.querySelector("#feuille").addEventListener('click',()=>{
    let botPlay = coups[joueCoupAleatoire()];
    if (botPlay == F) return;
    else if (botPlay == C) score.bot++;
    else score.user++;
    refresh();
})
document.querySelector("#ciseaux").addEventListener('click',()=>{
    let botPlay = coups[joueCoupAleatoire()];
    if (botPlay == C) return;
    else if (botPlay == P) score.bot++;
    else score.user++;
    refresh();
})