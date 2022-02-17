//fontion factorielle en mode récurssive
function fact(x) {
    if (x == 0)
        return 1
    else return fact(x - 1) * x
}

//fonction qui calcule la combinaison en dénombrement 
function c(n, p) {
    return (fact(n) / (fact(p) * fact(n - p)))
}

//fonction qui calcule la probabilité grâce aux variables aléatoires
//n = nombre tour de jeu
//p = probabilité d'un succès
//k = kème succès 
function varX(k, n, p) {
    return (c(n, k) * (p ** k) * ((1 - p) ** (n - k)))
}
