



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
        //return re.test(email);

        return regExp.test(email);

        if(regExp){
            alert("Imput is not good");
        }
        else{

        }

    }

    function checkAge() {
        var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    
        if(true) {
       
        } else {
       
        }
    }
