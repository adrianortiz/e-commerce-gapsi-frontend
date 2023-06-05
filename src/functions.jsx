import Swal from "sweetalert2";
import storage from './Storage/storage';
import axios from "axios";

// Alerta personalizada
export const show_alerta = (msj, icon) => {
    Swal.fire({ title:msj, icon:icon, buttonsStyling:true});
}

export const sendRequest = async(method, params, url, redir='', token=true) => {
    if(token) {
        const authToken = storage.get('authToken');
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
    }

    let res;
    await axios({ method:method, url:url, data:params}).then(
        response => {
            res = response.data,
            // (method != 'GET') ? show_alerta(response.data.message, 'success'):'',
            (method != 'GET') ? show_alerta('Operación exitosa', 'success'):'',
            setTimeout( () => 
            (redir !=='') ? window.location.href = redir : '',2000)
        }).catch( (errors) => {
            // let desc='';
            // res = errors.response.data,
            // errors.response.data.errors.map( (e) => {desc = desc + ' '+e})
            // show_alerta(desc, 'error')
            res = errors
            show_alerta('Error al realizar la Operación', 'error')
        })

        return res;
}

export const confirmation = async(name, url, redir) => {
    const alert = Swal.mixin({buttonsStyling:true});
    alert.fire({
        title:'¿Esta seguro de eliminar ['+name+'] ?',
        html: 'Está acción no se puede deshacer.',
        icon:'question', showCancelButton:true,
        confirmButtonText:'<span class="fa-solid fa-check"></span> Si, eliminar',
        cancelButtonText:'<span class="fa-solid fa-ban"></span> Cancelar',
        allowOutsideClick: () => {
            const popup = Swal.getPopup()
            popup.classList.remove('swal2-show')
            setTimeout(() => {
              popup.classList.add('animate__animated', 'animate__headShake')
            })
            setTimeout(() => {
              popup.classList.remove('animate__animated', 'animate__headShake')
            }, 500)
            return false
          }
    }).then( (result) => {
        if(result.isConfirmed) {
            sendRequest('DELETE',{},url,redir);
        }
    });
}

export default show_alerta;