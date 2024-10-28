
let promise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("operation successful!");
    } else {
        reject("operation failed.");
    }
});


promise.then((message) => { console.log("Success:", message); })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Completed");
    });

