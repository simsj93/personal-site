document.addEventListener('DOMContentLoaded', () => {

    let colorRando = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    let target1 = document.getElementsByClassName('color_target')[0];
    let target2 = document.getElementsByClassName('color_target')[1];
    let target3 = document.getElementsByClassName('color_target')[2];

    target1.addEventListener('click', function () {
       target1.style.color = colorRando (); 
    })
    target2.addEventListener('click', function () {
        target2.style.color = colorRando (); 
    })
    target3.addEventListener('click', function () {
        target3.style.color = colorRando ();
    })

    document.getElementById("button").onclick = function() {
       let style = document.getElementById('styles');
       style.disable = true; 
       
      }

}); 
