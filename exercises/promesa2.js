const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("ok");
    }, 1000)
})


mypromise.then((response) => {
    console.log(response);
})