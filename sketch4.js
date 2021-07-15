/*
let _canvas = document.querySelector("._canvas_0");
let _ctx = _canvas.getContext("2d");

_ctx.fillStyle = "hsl(0, 0%, 80%)";
_ctx.fillRect(10, 10, 200, 100);
*/

let _canvas_1 = document.querySelector("._canvas_1");
let _ctx_1 = _canvas_1.getContext("2d");

_ctx_1.fillStyle = "hsl(0, 0%, 50%)";
_ctx_1.fillRect(10, 10, 100, 100);




//




window.addEventListener("keydown", checkKeyPressDown, false);

function checkKeyPressDown(key)
{
      //  arr[parseInt(key.keyCode)] = true;
      console.log(key.keyCode);

      let _index = parseInt(key.keyCode);
      if (_index == 81)
      {
            let _word = document.querySelector("._txt_0_1");

            let _atrribute_value =
                  "color: green;" +
                  "font - style: italic;";


            _word.setAttribute("style", _atrribute_value);
      }
}


window.addEventListener("keyup", checkKeyPressUp, false);

function checkKeyPressUp(key)
{
      //  arr[parseInt(key.keyCode)] = true;
      console.log(key.keyCode);

      let _index = parseInt(key.keyCode);
      if (_index == 81)
      {
            let _word = document.querySelector("._txt_0_1");

            let _atrribute_value =
                  "color: red;" +
                  "font - style: italic;";


            _word.setAttribute("style", _atrribute_value);
      }
}