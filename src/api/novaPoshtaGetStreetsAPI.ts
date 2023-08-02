const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = process.env.NEXT_PUBLIC_NEW_POST_API_KEY;

export interface GetStreetsRequestData {
  cityRef: string;
  searchQuery: string;
}

export interface StreetData {
  Ref: string;
  Description: string;
  StreetsTypeRef: string;
  StreetsType: string;
}

export interface GetStreetsResponseData {
  success: boolean;
  data: StreetData[];
  errors: any[];
  warnings: any[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export async function callNovaPoshtaGetStreetsAPI(
  requestData: GetStreetsRequestData
): Promise<GetStreetsResponseData> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey,
        modelName: "Address",
        calledMethod: "getStreet",
        methodProperties: {
          CityRef: requestData.cityRef,
          FindByString: requestData.searchQuery,
          Page: "1",
          Limit: "",
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error calling Nova Poshta API:", error);
    throw error;
  }
}
