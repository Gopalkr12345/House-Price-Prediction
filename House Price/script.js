function predictPrice() {
    var area = document.getElementById("area").value;
    var bedrooms = document.getElementById("bedrooms").value;
    
    // Perform your prediction logic here
    // You can use machine learning libraries or algorithms to predict the house price
    
    // For the sake of simplicity, let's assume a simple linear regression model
    var predictedPrice = 50000 + (area * 100) + (bedrooms * 20000);
    
    document.getElementById("predictedPrice").textContent = "$" + predictedPrice;
}
