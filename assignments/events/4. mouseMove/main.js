let box = document.querySelector(".box");




box.addEventListener("mousemove",showPosition);

        function showPosition(event) {
            let screenX = document.querySelector(".screenX");
            screenX.innerHTML = event.screenX;  

            let screenY = document.querySelector(".screenY");
            screenY.innerHTML = event.screenY;  

            let clientX = document.querySelector(".clientX");
            clientX.innerHTML = event.clientX;

            let clientY = document.querySelector(".clientY");
            clientY.innerHTML = event.clientY;
        }