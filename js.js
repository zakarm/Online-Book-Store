window.onscroll = function () {

    if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.padding = "0px 10px";

    }
    else {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.padding = "10px 10px";
      
    }


}

function validation()
{
    if(document.form1.Email.value == "" || document.form1.Password.value == "" || document.form1.Adresse.value == "" || document.form1.Message.value == "" )
    {
        alert("Remplir Tous Les Champ");
    }
}


