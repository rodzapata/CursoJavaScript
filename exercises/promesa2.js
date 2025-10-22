const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        //resolve("ok");
        reject("error");
    }, 1000)
})


mypromise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
