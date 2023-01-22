var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }


var itemDiv = document.getElementById("itemDiv");

var largeImageDiv = document.createElement("div");
largeImageDiv.id = "imageLargeDiv";

var imageLarge = document.createElement("img");
imageLarge.className = "largeImage";
imageLarge.src = productData.preview;

largeImageDiv.append(imageLarge);

var detailsDiv = document.createElement("div");
detailsDiv.id = "detailsDiv";

var productNameHeading = document.createElement("h1");
productNameHeading.id = "name";
productNameHeading.innerHTML = productData.name;
var productBrandNameHeading = document.createElement("h4");
productBrandNameHeading.id = "brand";
productBrandNameHeading.innerHTML = productData.brand;
var productPriceSpan = document.createElement("span");
productPriceSpan.id = "price";
productPriceSpan.innerHTML = productData.price;
var productPriceHeading = document.createElement("h3");
productPriceHeading.innerHTML = "Price: Rs ";
productPriceHeading.append(productPriceSpan);
var productDescriptionHeading = document.createElement("h3");
productDescriptionHeading.innerHTML = "Description";
var productDescription = document.createElement("p");
productDescription.id = "description";
productDescription.innerHTML = productData.description;
var productPreviewHeading = document.createElement("h3");
productPreviewHeading.id = "pp";
productPreviewHeading.innerHTML = "Product Preview";

var previewImagesDiv = document.createElement("div");
previewImagesDiv.id = "smallImages";

var previewImages = productData.photos;

for (var i = 0; i < previewImages.length; i++) {
  var smallImage = document.createElement("img");
  smallImage.className = "smallImg";
  smallImage.id = "si" + (i + 1);
  smallImage.src = previewImages[i];
  if (smallImage.id == "si1") {
    smallImage.className = "smallImg active";
  }
  smallImage.addEventListener("click", function () {
    document.getElementsByClassName("smallImg active")[0].className =
      "smallImg";
    this.className = "smallImg active";
    imageLarge.src = this.src;
  });
  previewImagesDiv.append(smallImage);
}

var addToCartButton = document.createElement("div");
addToCartButton.id = "button";
addToCartButton.innerHTML = "Add to Cart";

detailsDiv.append(productNameHeading);
detailsDiv.append(productBrandNameHeading);
detailsDiv.append(productPriceHeading);
detailsDiv.append(productDescriptionHeading);
detailsDiv.append(productDescription);
detailsDiv.append(productPreviewHeading);
detailsDiv.append(previewImagesDiv);
detailsDiv.append(addToCartButton);

itemDiv.append(largeImageDiv);
itemDiv.append(detailsDiv);
