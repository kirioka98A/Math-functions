//on applique ici la division d'Eclude pour trouver de pgcd d'un nombre
//ceci est en mode réccursif
function pgcd(input) {
    //on définit la condition d'arret :
    //quand le reste de la division du nombre numéro un par le second est égale à 0
    // on return le nombre numéro deux car c'est à ce momment là le pgcd
    if (input[0] % input[1] == 0)
        return input[1]
    //sinon, on réappelle la fonction pgct avec une tableau comme paramètre
    //première élément => le second nombre
    //second élément => le reste de la division du premier nombre par le second
    return pgcd([input[1], (input[0] % input[1])])
}
