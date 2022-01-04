(function(){
    'use strict';
    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    //😥응?? K, M 왜 키누르는데도 반응이 없음???
    document.addEventListener('keydown', function(event){
        const key = event.code;
        //alert(key);
        if (key === 'keyK'){
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
            // change the heading.
            // change the intro paragraph.
            // change the value of the convertType variable.
        }
        else if (key === 'keyM'){
            convertType = 'miles';
            heading.innerHTML = "miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to Kilometers.";

        }
    });
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        if ( distance ){
            //convert M to K 1.609344
            //convert K to M 0.621371192
            if(convertType == "miles"){
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            }
            else{
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;
                
            }
        }
        else{
            answerDiv.innerHTML = "<h2>Please provide a number!</h2>"
        }

    });


})();