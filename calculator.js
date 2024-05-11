let calculation = localStorage.getItem('calculation') || '';

        document.querySelector('.js-display-calculation').value = localStorage.getItem('calculation');

        function updateCalculation(value){
            calculation += value;
            // console.log(calculation);
            document.querySelector('.js-display-calculation').value = calculation;

            localStorage.setItem('calculation',calculation);

            
        }