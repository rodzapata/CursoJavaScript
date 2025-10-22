const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const multiplicar = (num1, num2) => {
    if (typeof num1 != "number" || typeof num2 != "number") {

        return Promise.reject("los parametros deben ser numericos");
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                num1,
                num2,
                producto: num1 * num2
            });
        }, random(500, 1500))
    })

}

multiplicar(2, "s")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
