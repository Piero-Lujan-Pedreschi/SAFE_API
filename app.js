function validate(event){


    var username =  document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "" ){
            alert("Please fill in all fields");
    
        }   
        if (username === "admin" && password === "1234"){
            alert("sucessful");
           

           
            } 

        else{
            alert("Invalid username or password");
          
            
        }


}