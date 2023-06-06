function massege (){
    let user = prompt('Как вас зовут?')
    alert('Здравствуйте ' + user)
}
massege()

function app(){
    m = document.getElementById("massege").value;
    console.log(m)
    document.getElementById("massege").value = '';
}