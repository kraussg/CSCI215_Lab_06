
    document.getElementById("name").onkeyup = function() {
        var name = document.getElementById('name');
        var regEx = new RegExp('<');
        if(regEx.test(document.getElementById('name').value)){
            name.style.backgroundColor = "red";
        }
        else{
           name.style.backgroundColor = "white";
        }

    };

    function checkEmail(email) {

        var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
        //var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(email);



        if(regExp){
            alert("Imput is not good");
        }
        else{

        }

    }


    document.getElementById("age").onkeypress= function () {
        var age = document.getElementById("age");

        var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    
        if(regEx.test(document.getElementById("age").value)) {
            age.style.backgroundColor= "white";

        } else {

            document.getElementById("age").style.backgroundColor = "red";
        }
        };

    document.getElementById("email").onclick = function () {
        var check = checkEmail(document.getElementById("email").value);

        if(check == false){
            alert("Invalid Email! Try again");
            document.getElementById("email").style.backgroundColor = "red";

        }else{
            document.getElementById("email").style.backgroundColor = "red";
            ajax();
        }



    }

    function ajax() {
        alert("info passed to ajax!");
    }