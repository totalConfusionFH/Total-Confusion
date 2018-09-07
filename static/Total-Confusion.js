window.onload = function () {

    document.getElementById('hamburger').addEventListener('click', function(){
        var nav = document.getElementById("myNavibar");
        if (nav.className === "navibar") {
            nav.className += " responsive";
        } else {
            nav.className = "navibar";
        }
    });



}
