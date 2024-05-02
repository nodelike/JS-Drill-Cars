// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function problem3(inventory){
    const carModels = []
    for(let i = 0; i < inventory.length; i++){
        carModels.push(inventory[i].car_model);
    }

    return carModels.sort();
}

module.exports.problem3 = problem3;