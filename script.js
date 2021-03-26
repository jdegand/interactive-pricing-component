const checkbox = document.querySelector(".checkbox");
const duration = document.querySelector(".month");
const price = document.querySelector(".price");
const range = document.querySelector(".range");
const label = document.querySelector(".label");

label.onclick = function(){

  console.log(checkbox.checked)

    if(checkbox.checked == true){

        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;

    }else{

        refreshPrices();
        duration.textContent = `/month`;
    }
}

let pageViews = document.querySelector(".pageviews");
range.addEventListener('input', refreshPrices);

function refreshPrices(){

    if(range.value == 1){

        if(checkbox.checked == true){
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        }else{
            price.textContent = 8;
        }

        pageViews.textContent = "10k";

    }

    if(range.value == 2){

        if(checkbox.checked == true){
            price.textContent = 108;
        }else{
            price.textContent = 12;
        }

        pageViews.textContent = "50k";
    }

    if(range.value == 3){

        if(checkbox.checked == true){
            price.textContent = 144;
        }else{
            price.textContent = 16;
        }

        pageViews.textContent = "100k";
    }

    if(range.value == 4){

        if(checkbox.checked == true){
            price.textContent = 216;
        }else{
            price.textContent = 24;
        }

        pageViews.textContent = "500k";

    }

    if(range.value == 5){

        if(checkbox.checked == true){
            price.textContent = 324;
        }else{
            price.textContent = 36;
        }

        pageViews.textContent = "1M";
    }

}
