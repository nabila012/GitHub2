function formValidation(){
    
    var fname=document.getElementById("ifname").value;
    var lname=document.getElementById("ilname").value;
    var email=document.getElementById("iemail").value;
    var mobile=document.getElementById("imob").value;
    var pass=document.getElementById("ipass").value;

    var namePattern= /^[a-zA-Z. ]+$/
    var emailPattern= /(cse|eee|law)_\d{10}@lus\.ac\.bd/
    var mobilePattern= /^(\+88-|+88)?01[3-9]\d{8}$/
    var passPattern= /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%$&_*><+])).{6,20}/
    //First Name

    if(!fname.match(namePattern)){
        document.getElementById("efname").innerHTML="only character is allowed";
        return false;
    }
    else{
        document.getElementById("efname").innerHTML="";
    }
    //Last Name
    
    if(!lname.match(namePattern)){

        document.getElementById("elname").innerHTML="only character is allowed";
        return false;
    }
    else{
        document.getElementById("elname").innerHTML="";
    }
    //email
    if(!email.match(emailPattern)){
        document.getElementById("eemail").innerHTML="Only lus email is allowed";
        return false;

    }
    else{
    document.getElementById("eemail").innerHTML="";
}
//mobile
if(!mobile.match(mobilePattern)){
    document.getElementById("emob").innerHTML="Only BD phone number is allowed";
    return false;
}
else{
    document.getElementById("emob").innerHTML="";
}
//password

if(!pass.match(passPattern)){
document.getElementById("epass").innerHTML="Input valid password";
   return false;
    alert("false");
}
else{
    documentt.getElementById("epass").innerHTML="";

}
}