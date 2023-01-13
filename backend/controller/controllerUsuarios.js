function guardarUsuario(usuario){
    try {
        //des estructuramos 
        const {id, name, email, password} = usuario;
        //obtenemos la hoja del libro donde se va guardar el usuario
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        //guardamos el usuario
        sheetUsuarios.appendRow([id, name, email, password])
        return{
            titulo: "Registro exitoso",
            descripcion: "Ya se encuentra el usuario en la base de datos",
        }
    } catch (error) {
        return{
            titulo: "Ha ocurrido un error" + error,
            descripcion: "Contacte a un administrador",

        }
    }
}

function listarUsuarios(){
    return obtenerDatos(env_().SH_REGISTRO_USUARIOS)
}