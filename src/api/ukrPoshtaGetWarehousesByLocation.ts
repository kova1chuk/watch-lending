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
    Accept: "application/json",
  });

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  //   const url = `https://www.ukrposhta.ua/address-classifier-ws/get_postoffices_by_geolocation?lat=${lat}&long=${long}&maxdistance=${maxdistance}`;
  const url = `https://www.ukrposhta.ua/address-classifier-ws/get_city_by_name?city_name=Рафа&lang=UA&fuzzy=1`;

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    throw "An error occurred.";
  }
}
