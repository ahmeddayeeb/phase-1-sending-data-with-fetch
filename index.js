function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const id = object.id;
      document.body.innerHTML += `<p>New ID: ${id}</p>`;
    })
    .catch(function (error) {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
