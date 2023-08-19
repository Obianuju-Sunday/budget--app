// BUDGET CONTROLLER

var budgetController = (function () {

    // Code goes here


})();


// UI CONTROLLER
var UIController = (function () {

    return {
        getinput: function () {

            // In order to return three properties same time , we have to make it an object.
            
            return {
                type: document.querySelector('.add__type').value, // Will be either inc or exp
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }
        }
    }

})


// GLOBAL APP CONTROLLER
var AppController = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI 

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function (event) {

        // Some older browsers don't use the 'keyCode' property here. They use another property called 'which'.

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);




































