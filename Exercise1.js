function validates()
{
    let p1=document.getElementById("password").value
    let p2=document.getElementById("password2").value
    if (p1!=p2)
    {
        alert("Password does not match.")
    }
    else if (p1.length<8)
    {
        alert("Password needs to be atleast 8 characters long.")
    }
    else{
        alert("Acceptable!")
    }

}