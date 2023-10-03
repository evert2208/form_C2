var usuarios = [{
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        email: "juan@email.com",
        usuario: "juan123"
    },
    {
        id: 2,
        nombre: "María",
        apellido: "López",
        email: "maria@correo.com",
        usuario: "maria456"
    },
    {
        id: 3,
        nombre: "Pedro",
        apellido: "Gómez",
        email: "pedro@emaile.com",
        usuario: "pedro789"
    },
    {
        id: 4,
        nombre: "Laura",
        apellido: "Rodríguez",
        email: "laura@corero.com",
        usuario: "laura101"
    },
    {
        id: 5,
        nombre: "Carlos",
        apellido: "Fernández",
        email: "carlos@mail.com",
        usuario: "carlos2022"
    }
];

document.addEventListener("DOMContentLoaded", function() {

    var tablaUsuarios = document.getElementById("tablaUsuarios");
    var tbody = tablaUsuarios.querySelector("tbody");

    tbody.innerHTML = "";

    usuarios.forEach(function(usuario) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.email}</td>
                <td>${usuario.usuario}</td>
            `;
        tbody.appendChild(fila);
    });
});

document.getElementById("listarUsuarios").addEventListener("click", function() {


    var tablaUsuarios = document.getElementById("tablaUsuarios");
    var tbody = tablaUsuarios.querySelector("tbody");

    tbody.innerHTML = "";

    usuarios.forEach(function(usuario) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellido}</td>
                <td>${usuario.email}</td>
                <td>${usuario.usuario}</td>
            `;
        tbody.appendChild(fila);
    });
});

document.getElementById("formNuevoUsuario").addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtener los datos del formulario
    var nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        usuario: document.getElementById('usuario').value

    };

    usuarios.push(nuevoUsuario);

    document.getElementById("formNuevoUsuario").reset();


    getTablaUsuarios();
    console.log(usuarios);
});

function getTablaUsuarios() {
    var tablaUsuarios = document.getElementById("tablaUsuarios");
    var tbody = tablaUsuarios.querySelector("tbody");

    tbody.innerHTML = "";

    usuarios.forEach(function(usuario) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.usuario}</td>
        `;
        tbody.appendChild(fila);
    });
}