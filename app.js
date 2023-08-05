let mobiles = {
    iphones: {
        v13promax: {
            storage: "256gb",
            ram: "8gb",
            price: "400,000"
        },
        v13: {
            storage: "256gb",
            ram: "8gb",
            price: "370,000"

        },
        v12: {
            storage: "64gb",
            ram: "8gb",
            price: "175,000"


        }

    },
    samsung: {
        a13: {
            storage: "128gb",
            ram: "4gb",
            price: "40,000"
        },
        a32: {
            storage: "128gb",
            ram: "6gb",
            price: "46,000"

        },
        a73: {

            storage: "256gb",
            ram: "8gb",
            price: "115,000"
        }

    },
    infinix: {
        smart6: {
            storage: "64gb",
            ram: "3gb",
            price: "23,000"
        },
        note12g96: {
            storage: "128gb",
            ram: "8gb",
            price: "41,000"

        },
        zeroxpro: {

            storage: "128gb",
            ram: "8gb",
            price: "46,000"

        }

    },
    xiomi: {
        realme: {
            storage: "64gb",
            ram: "3gb",
            price: "23,000"
        },
        readme: {
            storage: "128gb",
            ram: "8gb",
            price: "41,000"

        },
        myme: {

            storage: "128gb",
            ram: "8gb",
            price: "46,000"

        }
    }
};

function filterMobiles() {
    var filterOption = document.getElementById("filterOption").value;
    var filterValue = document.getElementById("filterValue").value.toLowerCase();

    var filteredMobiles = Object.keys(mobiles).map(company => {
        var models = Object.keys(mobiles[company]).map(model => {
            return {
                company: company,
                model: model,
                ...mobiles[company][model]
            };
        });
        return models;
    }).flat().filter(mobile => {
        if (filterOption === "model") {
            return mobile.model.toLowerCase().includes(filterValue);
        } else if (filterOption === "company") {
            return mobile.company.toLowerCase().includes(filterValue);
        } else if (filterOption === "price") {
            return mobile.price.toLowerCase().includes(filterValue);
        }
        // Add more cases for other filter criteria (e.g., camera) if needed
    });

    displayFilteredMobiles(filteredMobiles);
}

function displayFilteredMobiles(filteredMobiles) {
    if (filteredMobiles.length === 0) {
        para.innerHTML = "No matching mobiles found.";
    } else {
        para.innerHTML = "";
        filteredMobiles.forEach(mobile => {
            para.innerHTML += `
                <p>
                    Company: ${mobile.company}, Model: ${mobile.model}, 
                    Storage: ${mobile.storage}, RAM: ${mobile.ram}, Price: ${mobile.price}
                </p>
            `;
        });
    }
}