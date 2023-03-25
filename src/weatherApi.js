function Api() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "685f16a8d4mshcb1bb51ad3d14bap1b8e15jsn7eb2986fe934",
      "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
    },
  };

  fetch(
    "https://dark-sky.p.rapidapi.com/18.4241,33.9249?units=auto&lang=en",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response.daily.summary))
    .catch((err) => console.error(err));
}

export default Api;
