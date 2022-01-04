(function(){

    "use strict";

    var detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        var destName = event.target.elements["name"].value;
        var destLocation = event.target.elements["location"].value;
        var destPhoto = event.target.elements["photo"].value;
        var destDesc = event.target.elements["description"].value;

    // 2. clear out the form
        for (var i=0; i<detailsForm.length; i++){
            detailsForm.elements[i].value = "";
        }

    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    // 3. run a function that creates the nwe card
    var wishListContainer = document.querySelector("#destinations_container");

    if (wishListContainer.children.length === 0){
        document.querySelector("#title").innerHTML = "My Wish List";
    }

    document.querySelector('#destinations_container').appendChild(destCard);
    }
    // 4. if needed, change the header at the top of the destination list
    // 5. add the card

    function createDestinationCard(name, location, photoURL, description){
        var card = document.createElement("div");
        card.className = "card";

        var img = document.createElement('img');
        img.setAttribute('alt', name);

        var constantPhotoUrl = "signpost.jpg";

        if(photoURL.length === 0){
            img.setAttribute('src', constantPhotoUrl);
        }
        else {
            img.setAttribute('src', photoURL);
        }


        card.appendChild(img);


        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardSubtilte = document.createElement("h4");
        cardSubtilte.innerHTML = location;
        cardBody.appendChild(cardSubtilte);

        if (description.length !== 0){
            var cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        var cardDeletBtn = document.createElement("button");
        cardDeletBtn.innerHTML = "Remove";

        cardDeletBtn.addEventListener("click", removeDesctination);
        cardBody.appendChild(cardDeletBtn);
        card.appendChild(cardBody);

        return card;

        
    }
    function removeDesctination(event){
        var card = event.target.parentElement.parentElement;
        card.remove();
    }
    })();
