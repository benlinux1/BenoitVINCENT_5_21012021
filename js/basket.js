// Récupérer l'id du produit cliqué dans l'Index grâce à Search Params
let params = (new URL(document.location)).searchParams;
let id = params.get("id");

// Pointage vers la section "basket"
const basket = document.getElementById("basket");
basket.classList.add("col-12");
basket.classList.add("text-center");

// Message concernant le détail du panier
const message = document.createElement("p");
message.innerText = "Voici le détail de votre panier :";
message.classList.add("basket-message");
message.classList.add("col-12")
basket.append(message);

// Création d'un tableau contenant la liste des produits + append à la section Basket
const productList = document.createElement("table");
productList.classList.add("col-md-12");
productList.classList.add("table");
basket.append(productList);

// Création d'un "tr" contenant la description des produits + append au tableau
let productDescription = document.createElement("tr");
productDescription.classList.add("col-md-12");
productList.append(productDescription);

// Création d'un "td" contenant l'image du produit
let productImage = document.createElement("td");
document.createElement("productImage");
productImage.classList.add("col-md-2");
productImage.innerText = "Photo du produit";
productDescription.appendChild(productImage);

// Récupération du nom de produit dans le localStorage
let productName = document.createElement("td");
document.createElement("productName");
productName.classList.add("col-md-2");
productName.innerText = "Nom";
productDescription.append(productName);

// Récupération de la couleur dans le localStorage
let productColor = document.createElement("td");
document.createElement("productColor");
productColor.classList.add("col-md-1");
productColor.innerText = "Couleur";
productDescription.append(productColor);

// Création d'un "td" contenant le prix du produit
let productPrice = document.createElement("td");
document.createElement("productPrice");
productPrice.classList.add("col-md-2");
productPrice.innerText = "Prix unitaire";
productDescription.appendChild(productPrice);

// Création d'un "td" contenant la quantité du produit
let productQuantity = document.createElement("td");
document.createElement("productQuantity");
productQuantity.classList.add("col-md-1");
productQuantity.innerText = "Quantité";
productDescription.appendChild(productQuantity);

// Création d'un "td" contenant le prix du produit
let totalPrice = document.createElement("td");
let totalPriceAmount = `${productQuantity}` * `${productPrice}`;
document.createElement("totalPrice");
totalPrice.classList.add("col-md-2");
totalPrice.innerText = "Prix total";
productDescription.appendChild(totalPrice);

// Consultation du local Storage
window.onload = () => {
    if(localStorage.basketContent != null) {
        let basketContent = JSON.parse(localStorage.getItem("basketContent"));
        console.log(basketContent);
        basketContent.forEach(productInBasket => {
            // Création de la ligne article dans un TR
            let ligneArticle = document.createElement("tr");
            document.createElement("ligneArticle");
            productList.append(ligneArticle);

            // Création de la colonne Image dans un TD
            let imageColumn = document.createElement("td");
            let imageProduct = document.createElement("img")
            document.createElement("imageColumn");
            document.createElement("imageProduct");
            imageProduct.src = productInBasket.articleImage;
            imageColumn.append(imageProduct);
            ligneArticle.append(imageColumn);

            // Création de la colonne Name dans un TD
            let nameColumn = document.createElement("td");
            document.createElement("nameColumn");
            nameColumn.append(productInBasket.articleName);
            ligneArticle.append(nameColumn);
            
            // Création de la colonne Color dans un TD
            let colorColumn = document.createElement("td");
            document.createElement("colorColumn");
            colorColumn.append(productInBasket.articleColor);
            ligneArticle.append(colorColumn);

            // Création de la colonne Price dans un TD
            let priceColumn = document.createElement("td");
            document.createElement("priceColumn");
            priceColumn.append(productInBasket.articlePrice/100 + " €");
            ligneArticle.append(priceColumn);

            // Création de la colonne Quantity dans un TD
            let quantityColumn = document.createElement("td");
            document.createElement("quantityColumn");
            quantityColumn.append(productInBasket.articleQuantity);
            ligneArticle.append(quantityColumn);

            // Création de la colonne Prix Total dans un TD
            let totalPriceColumn = document.createElement("td");
            let totalPriceColumnAmount = productInBasket.articleQuantity * productInBasket.articlePrice/100;
            document.createElement("totalPriceColumn");
            totalPriceColumn.append(totalPriceColumnAmount + " €");
            ligneArticle.append(totalPriceColumn);
        })
    } else {
        message.innerText = "Votre panier est vide";
    }
};

// Création d'une ligne pour le total de la commande
let totalOrderPrice = document.createElement("p");
document.createElement("totalPrice");
totalOrderPrice.classList.add("col-md-12");
totalOrderPrice.innerText = "Montant total de votre commande :" + " ";
totalOrderPrice.style.fontWeight = 'bold';
basket.append(totalOrderPrice);

// Création du formulaire


///////////      VERIFIER POSSIBILITÉ D'AJOUTER PLUSIEURS FOIS LE MEME ARTICLE      \\\\\\\\\\\\\\\\\\\\\\\
