//creamos una promesa en javascript
const myPromesa = new Promise((resolve, reject) => {
    if (true) {
        resolve();
    } else {
        reject();
    }
})

//Codigo en Javascript
async function getUser() {
    try {
        const promesa = fetch("https://jsonplaceholder.typicode.com/users")
        const data = (await promesa).json;
        console.log("usuarios", data)

    } catch (error) {
        console.log("error : ", error);
    }

}

//desde React codigo clasico
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsuarios(data))
        .catch(err => setError(err.message));
}, []);

//desde React nueva forma usando TryCatch
useEffect(() => {
    const cargarUsuarios = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            setError(error.message);
        }
    };

    cargarUsuarios();
}, []);

