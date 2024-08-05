function usuarioAutenticado()
{
    return new Promise((resolve, reject) => {
        const autenticado = true;
        setTimeout(() => {
        if(autenticado)
        {
            resolve('Usuario Autenticado');
        }
        else
        {
            reject('No se pudo iniciar sesión');
        }
    }
    , 3000);
    });
}

const login = async () => {
    try {
        const resultado = await usuarioAutenticado();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

login();


