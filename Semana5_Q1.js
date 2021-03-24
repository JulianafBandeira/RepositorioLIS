function createList(vlr,msg) {
    
    let qtd = window.prompt("Qtd de listas:");

    let nm = window.prompt("n lista: ");

    for(i = 0; i < qtd; i++) {

        let lista = document.createElement("LI");
        let textnode = document.createTextNode(nm, qtd);


        lista.appendChild(textnode);
        document.getElementById("mylist").appendChild;
    };

}
