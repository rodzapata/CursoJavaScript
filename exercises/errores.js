function dividir(a, b) {
    if (b === 0) {
        throw new Error("Error al dividir entre cero. ");
    }
    return a / b;
}

//console.log(dividir(8, 0));
// para probarlos usamos un try/casth

try {
    console.log(dividir(8, 0));
} catch (error) {
    console.log(error.message)
}

//manejor de erroes en las API
async function obtenerUsuarios() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error capturado:", error.message);
  }
}

obtenerUsuarios();
