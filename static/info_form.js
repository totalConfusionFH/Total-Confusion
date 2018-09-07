$(window).on("load", function() {

    console.log("window loaded");

    var isValidForm = function(){

        var name = document.getElementById('name').value;
        var price = document.getElementById('price').value;
        var size = document.getElementById('size').value;
        var image = document.getElementById('image').value;
        var category = document.getElementById('category').value;

        if (name != "" && price != "" && size != "" && image != "" && category != "Default") {
            return true;
        }

        return false;

    };

    var update = function(){

        if(isValidForm()){
            document.getElementById("save_button").classList.remove("disabled");
        }else{
            document.getElementById("save_button").classList.add("disabled");
        }

    };

    document.getElementById('name').addEventListener('blur', function(){
        var name = document.getElementById('name').value;

        if (name.length == 0) {
            document.getElementById('name').className = 'form_error';
            document.getElementById('name_error').innerHTML = 'Name compulsory';

        } else if (isNaN(name) == false) {
            document.getElementById('name').className = 'form_error';
            document.getElementById('name_error').innerHTML = 'Invalid entry';

        } else {
            document.getElementById('name').className = 'form_input';

        }
    });

    document.getElementById('name').addEventListener('focus', function(){
        document.getElementById('name').className = 'form_fill';
        document.getElementById('name_error').innerHTML = '';
    });

    document.getElementById('price').addEventListener('blur', function(){
        var price = document.getElementById('price').value;

        if (price.length == 0 || isNaN(price)) {
            document.getElementById('price').className = 'form_error';
            document.getElementById('price_error').innerHTML = 'Price must be numerical';

        } else {
            document.getElementById('price').className = 'form_input';

        }
    });

    document.getElementById('price').addEventListener('focus', function(){
        document.getElementById('price').className = 'form_fill';
        document.getElementById('price_error').innerHTML = '';
    });


    document.getElementById('size').addEventListener('blur', function(){
        var size = document.getElementById('size').value;

        if (size.length == 0 || isNaN(size)) {
            document.getElementById('size').className = 'form_error';
            document.getElementById('size_error').innerHTML = 'Size must be numerical';

        } else {
            document.getElementById('size').className = 'form_input';

        }
    });

    document.getElementById('size').addEventListener('focus', function(){
        document.getElementById('size').className = 'form_fill';
        document.getElementById('size_error').innerHTML = '';
    });


    document.getElementById('image').addEventListener('blur', function(){
        var image = document.getElementById('image').value;

        if (image.length == 0) {
            document.getElementById('image').className = 'form_error';
            document.getElementById('image_error').innerHTML = 'Image URL compulsory';

        } else if (isNaN(image) == false) {
            document.getElementById('image').className = 'form_error';
            document.getElementById('image_error').innerHTML = 'Invalid entry';

        } else {
            document.getElementById('image').className = 'form_input';

        }
    });

    document.getElementById('image').addEventListener('focus', function(){
        document.getElementById('image').className = 'form_fill';
        document.getElementById('image_error').innerHTML = '';
    });


    document.getElementById('category').addEventListener('blur', function(){
        var category = document.getElementById('category').value;

        if (category == 'Default') {
            document.getElementById('category').className = 'form_error';
            document.getElementById('category_error').innerHTML = 'Please select category';

        } else {
            document.getElementById('category').className = 'form_input';

        }
    });

    document.getElementById('category').addEventListener('focus', function(){
        document.getElementById('category').className = 'form_fill';
        document.getElementById('category_error').innerHTML = '';
    });


    document.querySelectorAll("form[name = 'info'] input").forEach((el) => {

        el.addEventListener("focus", () => {
            update();
        });

        el.addEventListener("blur", () => {
            update();
        });

        el.addEventListener("keydown", () => {
            update();
        });

        el.addEventListener("keyup", () => {
            update();
        });

        el.addEventListener("change", () => {
            update();
        });

        el.addEventListener("paste", () => {
            update();
        });

    });

    document.querySelectorAll("form[name = 'info'] select").forEach((el) => {

        el.addEventListener("focus", () => {
            update();
        });

        el.addEventListener("blur", () => {
            update();
        });

        el.addEventListener("keydown", () => {
            update();
        });

        el.addEventListener("keyup", () => {
            update();
        });

        el.addEventListener("change", () => {
            update();
        });

        el.addEventListener("paste", () => {
            update();
        });

    });

    document.getElementById('save_button').addEventListener('click', function(){

        if(isValidForm()){

            var name = document.getElementById('name').value;
            var price = document.getElementById('price').value;
            var size = document.getElementById('size').value;
            var image = document.getElementById('image').value;
            var category = document.getElementById('category').value;

            var product = {
                name : name,
                price : price,
                size : size,
                image : image,
                category : category
            };


            // alert(JSON.stringify(product));

            $.ajax({
                type: 'POST',
                url: '/api/products/',
                data: JSON.stringify(product),
                contentType: "application/json",
                dataType: 'json',
                success: function(data) { alert('data: ' + data); }
            });



        }

    });

    update();

});
