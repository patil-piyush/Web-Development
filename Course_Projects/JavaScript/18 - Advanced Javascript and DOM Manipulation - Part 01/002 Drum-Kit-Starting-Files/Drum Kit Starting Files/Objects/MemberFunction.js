function houseKeeper(name , age , lang , exp , shift){
    this.Name = name;
    this.Age = age;
    this.Language = lang;
    this.Exp = exp;
    this.Shift = shift;
    this.clean = function(){
        alert("cleaning in progress!!");
    }
}

/*
 To call the member function
    1) Defining new Object using constructor function
            var HK = new houseKeeper("Lana" , 50 , "eng" , 20 , 8);
    2) Calling the Member function by using the '.' sign 
            HK.clean();
*/