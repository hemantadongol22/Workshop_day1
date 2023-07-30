async function displayProduct(){
    // fetch('https://dummyjson.com/products').then((values) =>{
    //     return values.json()
    // }).then((products) =>{
    //     console.log('products',products)
    // })

    const response = await fetch('https://dummyjson.com/products');
    const{ products } = await response.json();
    
    products.forEach((product)=>{
        const mainDiv = document.createElement("div");
        mainDiv.className = "card";
        mainDiv.style.width = "30%";
        mainDiv.style.height = "300px";

        const image = document.createElement("img");
        image.src = product.thumbnail;
        image.className = "card-img-top";
        image.className = "h-75";

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";

        const cardTitle = document.createElement("h4");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = product.title;
        
        const cardDesc = document.createElement("p");
        cardDesc.className = "card-text";
        cardDesc.innerHTML = product.description.length > 30? product.description.slice(0,30)+'...':product.description ;
        
        cardBodyDiv.append(cardTitle)
        cardBodyDiv.append(cardDesc)

        mainDiv.append(image)
        mainDiv.append(cardBodyDiv)
        mainDiv.append(cardTitle)
        mainDiv.append(cardDesc)

        document.getElementById("container").append(mainDiv);
    
    })
}

displayProduct();
