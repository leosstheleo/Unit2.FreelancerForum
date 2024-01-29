document.addEventListener("DOMContentLoaded", function () {
    // Initial freelancers and average starting price
    const freelancers = [
        { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
        { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
    ];

    // Function to calculate the average starting price
    function calculateAveragePrice() {
        const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
        return totalStartingPrice / freelancers.length;
    }

    // Function to update the HTML with the current freelancers and average starting price
    function updateFreelancersList() {
        const freelancersList = document.getElementById('freelancers-list');
        const averagePriceElement = document.getElementById('average-price');

        // Clear existing list items
        freelancersList.innerHTML = '';

        // Display current freelancers
        freelancers.forEach(freelancer => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${freelancer.name} | Occupation: ${freelancer.occupation} | Starting Price: $${freelancer.startingPrice}`;
            freelancersList.appendChild(listItem);
        });

        // Update average starting price
        const averagePrice = calculateAveragePrice();
        averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
    }

    // Simulate the addition of a new freelancer (Carol) after a few seconds
    setTimeout(() => {
        freelancers.push({ name: 'Carol', occupation: 'Programmer', startingPrice: 70 });
        updateFreelancersList();
    }, 3000);


    // Initial update of the HTML
    updateFreelancersList();
});