export function fetchData() {
    const requestOptions = {
      method: "GET"
    };
    return fetch("https://striveschool-api.herokuapp.com/books", requestOptions)
      .then((response) => response.json())
      .catch(function (err) {
        console.error(err);
      });
  }