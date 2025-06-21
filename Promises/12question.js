const promise = new Promise((res, rej) => {
  res("Data fetched successfully");
});

function fetchData() {
  promise
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

fetchData();

async function fetchDataHandler(){
    try {
        let data=await promise
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

fetchDataHandler();
