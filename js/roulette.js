const wheel = document.querySelector('.wheel')
const button = document.querySelector('.button')

let deg = 0;

function spin() {
    button.style.pointerEvents = 'none';
    deg = Math.floor(5000 + Math.random() * 5000);


    console.log(deg);
    wheel.style.transition = 'all 10s ease ';
    wheel.style.transform = `rotate(${deg}deg)`;
}

function result() {
    button.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';

    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`

    console.log(actualDeg)

    var result = document.querySelector('.result')

    if (actualDeg>=0 && actualDeg<10 ){
        document.getElementById("result").textContent="26 BLACK";
        result.classList.remove("green");
        result.classList.remove("red");
        result.classList.add("black");
    }
    if (actualDeg>=10 && actualDeg<20 ){
        document.getElementById("result").textContent="3 RED";
        result.classList.remove("green");
        result.classList.remove("black");
        result.classList.add("red");
    }
    if (actualDeg>=20 && actualDeg<30 ){
        document.getElementById("result").textContent="35 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=30 && actualDeg<39 ){
        document.getElementById("result").textContent="12 RED";
        result.classList.remove("green");
         result.classList.remove("black");
        result.classList.add("red");
      }
      if (actualDeg>=39 && actualDeg<49 ){
        document.getElementById("result").textContent="28 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=49 && actualDeg<59 ){
        document.getElementById("result").textContent="7 RED";
        result.classList.remove("green");
         result.classList.remove("black");
        result.classList.add("red");
      }
      if (actualDeg>=59 && actualDeg<69 ){
        document.getElementById("result").textContent="29 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=69 && actualDeg<78 ){
        document.getElementById("result").textContent="18 RED";
        result.classList.remove("green");
         result.classList.remove("black");
        result.classList.add("red");
      }
      if (actualDeg>=78 && actualDeg<88 ){
        document.getElementById("result").textContent="22 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=88 && actualDeg<98 ){
        document.getElementById("result").textContent="9 RED";
        result.classList.remove("green");
         result.classList.remove("black");
        result.classList.add("red");
      }
      if (actualDeg>=98 && actualDeg<107 ){
        document.getElementById("result").textContent="31 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=107 && actualDeg<117 ){
            document.getElementById("result").textContent="14 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=117 && actualDeg<127 ){
        document.getElementById("result").textContent="20 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=127 && actualDeg<137 ){
            document.getElementById("result").textContent="1 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=137 && actualDeg<146 ){
        document.getElementById("result").textContent="33 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=146 && actualDeg<156 ){
            document.getElementById("result").textContent="16 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=156 && actualDeg<166 ){
        document.getElementById("result").textContent="24 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=166 && actualDeg<176 ){
            document.getElementById("result").textContent="5 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=176 && actualDeg<185 ){
        document.getElementById("result").textContent="10 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=185 && actualDeg<195 ){
            document.getElementById("result").textContent="23 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=195 && actualDeg<205 ){
        document.getElementById("result").textContent="8 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=205 && actualDeg<215 ){
            document.getElementById("result").textContent="30 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=215 && actualDeg<224 ){
        document.getElementById("result").textContent="11 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=224 && actualDeg<234 ){
            document.getElementById("result").textContent="36 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=234 && actualDeg<244 ){
        document.getElementById("result").textContent="13 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=244 && actualDeg<253 ){
            document.getElementById("result").textContent="21 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=253 && actualDeg<263 ){
        document.getElementById("result").textContent="6 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=263 && actualDeg<273 ){
            document.getElementById("result").textContent="34 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=273 && actualDeg<283 ){
        document.getElementById("result").textContent="17 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=283 && actualDeg<292 ){
            document.getElementById("result").textContent="25 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=292 && actualDeg<302 ){
        document.getElementById("result").textContent="2 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=302 && actualDeg<312 ){
            document.getElementById("result").textContent="21 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=312 && actualDeg<322 ){
        document.getElementById("result").textContent="4 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
      }
      if (actualDeg>=322 && actualDeg<331 ){
            document.getElementById("result").textContent="19 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=331 && actualDeg<341 ){
        document.getElementById("result").textContent="15 BLACK";
        result.classList.remove("green");
         result.classList.remove("red");
        result.classList.add("black");
       }
      if (actualDeg>=341 && actualDeg<350 ){
            document.getElementById("result").textContent="32 RED";
            result.classList.remove("green");
             result.classList.remove("black");
            result.classList.add("red");
      }
      if (actualDeg>=350 && actualDeg<360 ){
        document.getElementById("result").textContent="0 GREEN";
        result.classList.remove("black");
        result.classList.remove("red");
        result.classList.add("green");
      }
}

button.addEventListener('click', spin)
wheel.addEventListener('transitionend', result)