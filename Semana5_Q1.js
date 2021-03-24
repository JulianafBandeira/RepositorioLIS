function createList(quantidade, texto){
    console.log("criando a lista")
  
    for(var i =0;i<quantidadeLi;i++) {
  
      var node = document.createElement("li");
      var textnode = document.createTextNode(texto + " " +i);
      node.appendChild(textnode);
  
      document.getElementById("minhalista").appendChild(node);
    }
  }
  createList(5, "Item");