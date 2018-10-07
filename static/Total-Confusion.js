window.onload = function () {

    document.getElementById('hamburger').addEventListener('click', function(){
        var nav = document.getElementById("myNavibar");
        if (nav.className === "navibar") {
            nav.className += " responsive";
        } else {
            nav.className = "navibar";
        }
    });



    var contactMap = function(){

        var postion = {lat: -32.955, lng: 27.931}

        var contactMap = new google.maps.Map(document.getElementById("contactMap"), {
            center: postion,
            zoom: 10

        });

        var myMarker = new google.maps.Marker(
        {
            position: postion,
            map: contactMap,
            title: "Beacon Bay Retail Park"
        });

    };

    contactMap()


    var footerMap = function(){

        var postion = {lat: -32.955, lng: 27.931}

        var footerMap = new google.maps.Map(document.getElementById("footerMap"), {
            center: postion,
            zoom: 10,
            styles: [
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#3b4555'}]
                }
            ]

        });

        var myMarker = new google.maps.Marker(
        {
            position: postion,
            map: footerMap, contactMap,
            title: "Beacon Bay Retail Park"
        });


    };

    footerMap()




}
