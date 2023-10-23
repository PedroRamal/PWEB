function transformaMaiusc(){
    document.getElementById("texto").value = document.getElementById("texto").value.toUpperCase();
    document.forms.form.maiuscula.checked = true;
    document.forms.form.minuscula.checked = false;
}    

function transformaMinusc(){
    document.getElementById("texto").value = document.getElementById("texto").value.toLowerCase();
    document.forms.form.maiuscula.checked = false;
    document.forms.forma.minuscula.checked = true;
}