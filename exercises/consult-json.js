// Endpoint de ejemplo (cámbialo por el tuyo)
const url = "https://serviparamo.midasoft.co/APIS/integracion/api/v1/IntegracionNominaServiparamo";

// Token de autenticación Bearer
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkpDQUxWTyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiJCZ0QrTmw0cHlXL25zd0xMQmZacHRURVVUbE04SWVXTEg3S1J1NG50M0xQZGpJZnVnUDBrQ2oveVJkNUJ0V2JuZjNMdlI4ek5IRFdrUndjNnR1eTZUbnF4SUdlYjVxRlhtNlBnaU5Xb1BOYytiNS80eE16MGlXcVNTWmYyczlPQmx3K2dTRkVicGlMS0JHZ2ZuamRGOGxpSmtUaWl1R2d5Lzl2TUJPemNGaXBMSUdPZmZVaVZTTWh3Z0pabGtvcVE1dW84QXZuN0JjTGVTd0FhdVVKSUJCbzA3bjVqTDBITDQwaVpGWFltQTd6eFJ1TmpjZm9zRTA4UHBqbmt1bjUyVnZzTkx5c2J0dExvU2luTGNxemNlRDRrcFloSkFYOTFwMTVoSUs3QTI0d0VVMUFqamtweHhoTStGOXZOVk5Ka3pVM3ZJblFXaXNTNDBWWlhndUJxeGU3OGJxRHNPSmcyZ0dGa0xzUEdqMU55NVoxUWJLaVdoTWF3b3kxVVJOM05VQTNVeDNVRW1BN1N1b0VTeGhkQlM5bzdzR01CdU8yTktSNVU1d2YzSmE5ZjdEMVovMW9FeEFyaW1pMW9TNTZYeWdyR2t5ZkVZZnNkcEVzY3JFWWsvQT09IiwibmJmIjoxNzYxOTM3NDAyLCJleHAiOjE3NjE5NDgyMDIsImlhdCI6MTc2MTkzNzQwMn0.fSECNM3fGXdeSG9ik20gTq66gbLPOrHo9TY11fy1WsA";

// Cuerpo de la solicitud (JSON)
const body = {
    "Ano": "2025",
    "Mes": "10",
    "Division": "SP",
    "Periodo_N": "19",
    "Comprobante": "09"
};

// Función que realiza la solicitud
async function consultarAPI() {
    try {
        const response = await fetch(url, {
            method: "POST", // puede ser GET, POST, PUT, DELETE
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Respuesta JSON recibida:", data);
        return data;
    } catch (error) {
        console.error("❌ Error en la solicitud:", error.message);
    }
}

// Llamada a la función
consultarAPI();
