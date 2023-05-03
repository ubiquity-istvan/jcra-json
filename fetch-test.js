// To  run this on the server just run "node fetch-test.js" in the terminal

async function fetchData() {
  // Change the URL to where you host the JSON
  const response = await fetch(
    "https://ubiquity-istvan.github.io/json/jcra-data.json"
  );
  const data = await response.json();
  return data;
}

async function main() {
  const jsonData = await fetchData();

  const details = jsonData.map((singleFile) => {
    return singleFile;
  });

  details.forEach((detail) => {
    console.log(detail.Name);

    const fetch = require("node-fetch");

    // You'll need to change the collection id here in the URL and update the bearer token as well.
    // Create a function that generates suitable slugs (lowercase and hyhens instead of spaces.)

    const url =
      "https://api.webflow.com/collections/64400178b7e55bbe894b5545/items";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:
          "Bearer 60a4f4710d83f90a9d67706f08e1c148e9759042b7e7f0fa0573f7df8e27fc01",
      },
      body: JSON.stringify({
        fields: {
          slug: "fetch-yolo",
          name: detail.Name,
          _archived: false,
          _draft: false,
          pdf: detail.PDF,
        },
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  });
}

// Calling the main fucntion that initiates the whole process

main();
