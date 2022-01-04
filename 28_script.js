(function(){


    'user strict';

    document.getElementById('convert').addEventListener('submit', function(event){
			
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');
        //distance = parseFloat(distance); //👈parseFloat이제없다면 str도 무조건 받아줌. 
        //alert(distance);

        if (distance){
            const conversion = (distance * 1.609344).toFixed(3);
            //var rounedConversion = conversion.toFixed(3); //(Math.round(conversion * 1000))/1000;
            //alert(conversion);
            
            //display
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;

        }
        else {
            //display error
            answer.innerHTML = `<h2>Please provide a number!</h2>`;
        }
    });
})();