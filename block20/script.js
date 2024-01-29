document.addEventListener("DOMContentLoaded", function () {
    const freelancers = [];

    // Function to render the initial freelancer data
    function renderInitialFreelancers() {
        // Your initial freelancers data
        const initialFreelancers = [
            { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
            { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
        ];

        // Render initial freelancers
        initialFreelancers.forEach(freelancer => freelancers.push(freelancer));
        updateFreelancersList();
    }

    // Function to generate a new random freelancer
    function generateRandomFreelancer() {
        const names = ['John', 'Jane', 'David', 'Emma', 'Michael'];
        const occupations = ['Designer', 'Developer', 'Photographer', 'Artist'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
        const randomStartingPrice = Math.floor(Math.random() * 100) + 20; // Random starting price between $20 and $120

        return { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
    }

    // Function to calculate the average starting price of freelancers
    function calculateAveragePrice() {
        const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
        return freelancers.length === 0 ? 0 : totalStartingPrice / freelancers.length;
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

    // Function to simulate the continuous addition of new freelancers
    function addNewFreelancer() {
        const newFreelancer = generateRandomFreelancer();
        freelancers.push(newFreelancer);
        updateFreelancersList();
    }

    // Call the renderInitialFreelancers function to display the initial data
    renderInitialFreelancers();

    // Call addNewFreelancer function every 5 seconds to simulate continuous addition of new freelancers
    setInterval(addNewFreelancer, 5000);
});
