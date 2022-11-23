function validacion(evento){
    evento.preventDefault();
    nome=document.getElementById('nombre').value
    if (nome.lenght<10){
        alert("Debe ingresar un nombre")
        return false
    } else {
        meil=document.getElementById('mail').value
        if (meil==null){
            alert("Debe ingresar un mail valido")
            return false
        } else {
            mens=document.getElementById('mensaje').value
            if (mens.lenght< 10){
                alert("El mensaje debe contener minimo 10 caracteres")
                return false
            } else {
                return true
                location.reload
            }
        }
    }
}