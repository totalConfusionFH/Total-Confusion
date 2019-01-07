$(window).on("load", function() {

    console.log("window loaded");

    var getCheckedSizes = function() {

      var checkedSizes = []

      var checkedValue = document.querySelectorAll('.size-checkbox:checked');

      for (var i = 0; i < checkedValue.length; i++) {
        checkedSizes.push(parseInt(checkedValue[i].value));
      }

      for (var i = 0; i < checkedSizes.length; i++) {
      }

      return checkedSizes;

    }

    var isValidForm = function(){

        var name = document.getElementById('name').value;
        var price = document.getElementById('price').value;
        var size = getCheckedSizes();
        var image = document.getElementById('image').value;
        var category = document.getElementById('category').value;

        if (name != "" && price != "" && size != "" && image != "" && category != "Default") {
            return true;
        }

        return false;

    };

    var update = function(){

        if(isValidForm()){
            document.getElementById("save-button").classList.remove("disabled");
        }else{
            document.getElementById("save-button").classList.add("disabled");
        }

    };

    document.getElementById('name').addEventListener('blur', function(){
        var name = document.getElementById('name').value;

        if (name.length == 0) {
            document.getElementById('name').className = 'form-error';
            document.getElementById('name-error').innerHTML = 'Name compulsory';

        } else if (isNaN(name) == false) {
            document.getElementById('name').className = 'form-error';
            document.getElementById('name-error').innerHTML = 'Invalid entry';

        } else {
            document.getElementById('name').className = 'form-input';

        }
    });

    document.getElementById('name').addEventListener('focus', function(){
        document.getElementById('name').className = 'form-fill';
        document.getElementById('name-error').innerHTML = '';
    });

    document.getElementById('price').addEventListener('blur', function(){
        var price = document.getElementById('price').value;

        if (price.length == 0 || isNaN(price)) {
            document.getElementById('price').className = 'form-error';
            document.getElementById('price-error').innerHTML = 'Price must be numerical';

        } else {
            document.getElementById('price').className = 'form-input';

        }
    });

    document.getElementById('price').addEventListener('focus', function(){
        document.getElementById('price').className = 'form-fill';
        document.getElementById('price-error').innerHTML = '';
    });


    document.getElementById('image').addEventListener('blur', function(){
        var image = document.getElementById('image').value;

        if (image.length == 0) {
            document.getElementById('image').className = 'form-error';
            document.getElementById('image-error').innerHTML = 'Image URL compulsory';

        } else if (isNaN(image) == false) {
            document.getElementById('image').className = 'form-error';
            document.getElementById('image-error').innerHTML = 'Invalid entry';

        } else {
            document.getElementById('image').className = 'form-input';

        }
    });

    document.getElementById('image').addEventListener('focus', function(){
        document.getElementById('image').className = 'form-fill';
        document.getElementById('image-error').innerHTML = '';
    });


    document.getElementById('category').addEventListener('blur', function(){
        var category = document.getElementById('category').value;

        if (category == 'Default') {
            document.getElementById('category').className = 'form-error';
            document.getElementById('category-error').innerHTML = 'Select category';

        } else {
            document.getElementById('category').className = 'form-input';

        }
    });

    document.getElementById('category').addEventListener('focus', function(){
        document.getElementById('category').className = 'form-fill';
        document.getElementById('category-error').innerHTML = '';
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




    document.getElementById('save-button').addEventListener('click', function(){

        var sizes = getCheckedSizes();

        if(isValidForm()){

            var name = document.getElementById('name').value;
            var price = document.getElementById('price').value;
            var size = sizes;
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

            console.log("function started");

            $.ajax({
                type: 'POST',
                url: '/api/products/',
                data: JSON.stringify(product),
                contentType: "application/json",
                success: function(data) {
                    saving = false;
                    console.log('Saved');
                },

                error: function (request, status, error) {

                    saving = false;

                    document.getElementById('save-button').value = 'Save';

                    alert("something went wrong saving this item.");

                }

            });

        }

    });

    update();

});

// $(window).on("load", function() {
//
//     console.log("window loaded");
//
//
//     var getCheckedSizes = function() {
//
//       var checkedSizes = []
//
//       var checkedValue = document.querySelectorAll('.size-checkbox:checked');
//
//       for (var i = 0; i < checkedValue.length; i++) {
//         checkedSizes.push(parseInt(checkedValue[i].value));
//       }
//
//       for (var i = 0; i < checkedSizes.length; i++) {
//       }
//
//       return checkedSizes;
//
//     }
//
//
//     var isValidForm = function(){
//
//
//         var name = document.getElementById('name').value;
//         var price = document.getElementById('price').value;
//         var size = getCheckedSizes();
//         var image = document.getElementById('image').value;
//         var category = document.getElementById('category').value;
//
//         if (name != "" && price != "" && size != "" && image != "" && category != "Default") {
//             return true;
//         }
//
//         return false;
//
//     };
//
//     var update = function(){
//
//         if(isValidForm()){
//             document.getElementById("save-button").classList.remove("disabled");
//         }else{
//             document.getElementById("save-button").classList.add("disabled");
//         }
//
//     };
//
//     document.getElementById('name').addEventListener('blur', function(){
//         var name = document.getElementById('name').value;
//
//         if (name.length == 0) {
//             document.getElementById('name').className = 'form-error';
//             document.getElementById('name-error').innerHTML = 'Name compulsory';
//
//         } else if (isNaN(name) == false) {
//             document.getElementById('name').className = 'form-error';
//             document.getElementById('name-error').innerHTML = 'Invalid entry';
//
//         } else {
//             document.getElementById('name').className = 'form-input';
//
//         }
//     });
//
//     document.getElementById('name').addEventListener('focus', function(){
//         document.getElementById('name').className = 'form-fill';
//         document.getElementById('name-error').innerHTML = '';
//     });
//
//     document.getElementById('price').addEventListener('blur', function(){
//         var price = document.getElementById('price').value;
//
//         if (price.length == 0 || isNaN(price)) {
//             document.getElementById('price').className = 'form-error';
//             document.getElementById('price-error').innerHTML = 'Price must be numerical';
//
//         } else {
//             document.getElementById('price').className = 'form-input';
//
//         }
//     });
//
//     document.getElementById('price').addEventListener('focus', function(){
//         document.getElementById('price').className = 'form-fill';
//         document.getElementById('price-error').innerHTML = '';
//     });
//
//
//     document.getElementById('image').addEventListener('blur', function(){
//         var image = document.getElementById('image').value;
//
//         if (image.length == 0) {
//             document.getElementById('image').className = 'form-error';
//             document.getElementById('image-error').innerHTML = 'Image URL compulsory';
//
//         } else if (isNaN(image) == false) {
//             document.getElementById('image').className = 'form-error';
//             document.getElementById('image-error').innerHTML = 'Invalid entry';
//
//         } else {
//             document.getElementById('image').className = 'form-input';
//
//         }
//     });
//
//     document.getElementById('image').addEventListener('focus', function(){
//         document.getElementById('image').className = 'form-fill';
//         document.getElementById('image-error').innerHTML = '';
//     });
//
//
//     document.getElementById('category').addEventListener('blur', function(){
//         var category = document.getElementById('category').value;
//
//         if (category == 'Default') {
//             document.getElementById('category').className = 'form-error';
//             document.getElementById('category-error').innerHTML = 'Select category';
//
//         } else {
//             document.getElementById('category').className = 'form-input';
//
//         }
//     });
//
//     document.getElementById('category').addEventListener('focus', function(){
//         document.getElementById('category').className = 'form-fill';
//         document.getElementById('category-error').innerHTML = '';
//     });
//
//
//     document.querySelectorAll("form[name = 'info'] input").forEach((el) => {
//
//         el.addEventListener("focus", () => {
//             update();
//         });
//
//         el.addEventListener("blur", () => {
//             update();
//         });
//
//         el.addEventListener("keydown", () => {
//             update();
//         });
//
//         el.addEventListener("keyup", () => {
//             update();
//         });
//
//         el.addEventListener("change", () => {
//             update();
//         });
//
//         el.addEventListener("paste", () => {
//             update();
//         });
//
//     });
//
//     document.querySelectorAll("form[name = 'info'] select").forEach((el) => {
//
//         el.addEventListener("focus", () => {
//             update();
//         });
//
//         el.addEventListener("blur", () => {
//             update();
//         });
//
//         el.addEventListener("keydown", () => {
//             update();
//         });
//
//         el.addEventListener("keyup", () => {
//             update();
//         });
//
//         el.addEventListener("change", () => {
//             update();
//         });
//
//         el.addEventListener("paste", () => {
//             update();
//         });
//
//     });
//
//
//
//
//     document.getElementById('save-button').addEventListener('click', function(){
//
//         var sizes = getCheckedSizes();
//
//         if(isValidForm()){
//
//             var name = document.getElementById('name').value;
//             var price = document.getElementById('price').value;
//             var size = sizes;
//             var image = document.getElementById('image').value;
//             var category = document.getElementById('category').value;
//
//             var product = {
//                 name : name,
//                 price : price,
//                 size : size,
//                 image : image,
//                 category : category
//             };
//
//             // alert(JSON.stringify(product));
//
//             console.log("function started");
//
//             $.ajax({
//                 type: 'POST',
//                 url: '/api/products/',
//                 data: JSON.stringify(product),
//                 contentType: "application/json",
//                 success: function(data) {
//                     saving = false;
//                     console.log('Saved');
//                 },
//
//                 error: function (request, status, error) {
//
//                     saving = false;
//
//                     document.getElementById('save-button').value = 'Save';
//
//                     alert("something went wrong saving this item.");
//
//                 }
//
//             });
//
//         }
//
//     });
//
//     update();
//
// });
