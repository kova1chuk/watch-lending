const apiKey = process.env.NEXT_PUBLIC_UKR_POST_API_KEY;

export default async function callUkrPoshtaGetWarehousesByLocation(
  lat: number,
  long: number,
  maxdistance = 5
) {
  if (!apiKey) {
    return console.log({ error: "API key is missing." });
  }

  if (!lat || !long || !maxdistance) {
    return console.log({ error: "Missing required parameters." });
  }

  const headers = new Headers({
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  });

  console.log(headers);

  const requestOptions = {
    method: "GET",
    mode: "no-cors" as RequestMode,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      // "Content-Type": "application/json",
      // Connection: "keep-alive",
    },
  };

  // const url = `https://www.ukrposhta.ua/address-classifier-ws/get_postoffices_by_geolocation?lat=${lat}&long=${long}&maxdistance=${maxdistance}`;
  // console.log(url);
  // const url = `https://www.ukrposhta.ua/address-classifier-ws/get_regions_by_region_ua?region_name=київ`;
  // const url = `https://www.ukrposhta.ua/address-classifier-ws/get_city_by_name?city_name=Раф&lang=UA&fuzzy=1`;
  const url = `https://www.ukrposhta.ua/address-classifier-ws/get_regions_by_region_ua?region_name=${encodeURIComponent(
    "Рів"
  )}`;
  console.log(url);

  // const url =
  // "https://www.ukrposhta.ua/address-classifier-ws/get_city_by_name?city_name=р&lang=UA&fuzzy=1";

  try {
    const response = await fetch(url, requestOptions);
    console.log(response);
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
}

// import axios from "axios";

// const apiKey = process.env.NEXT_PUBLIC_UKR_POST_API_KEY;

// export default async function callUkrPoshtaGetWarehousesByLocation(
//   lat: number,
//   long: number,
//   maxdistance = 5
// ) {
//   if (!apiKey) {
//     return console.log({ error: "API key is missing." });
//   }

//   if (!lat || !long || !maxdistance) {
//     return console.log({ error: "Missing required parameters." });
//   }

//   const headers = {
//     Authorization: `Bearer ${apiKey}`,
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   };

//   const url = `https://www.ukrposhta.ua/address-classifier-ws//get_regions_by_region_ua?region_name=Рів`;

//   try {
//     const response = await axios(url, {
//       method: "GET",
//       // mode: "no-cors",
//       headers,
//     });
//     console.log(response);
//     const data = response.data;

//     console.log(data);

//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
