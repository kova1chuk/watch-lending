// novaPoshtaGetCitiesAPI.ts

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = process.env.NEXT_PUBLIC_NEW_POST_API_KEY;

export interface GetCitiesRequestData {
  Ref?: string;
  FindByString: string;
  Page: string;
  Limit: string;
}

export interface CityData {
  Description: string;
  DescriptionRu: string;
  Ref: string;
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;
  Area: string;
  SettlementType: string;
  IsBranch: string;
  PreventEntryNewStreetsUser: string | null;
  Conglomerates: string | null;
  CityID: string;
  SettlementTypeDescriptionRu: string;
  SettlementTypeDescription: string;
}

export interface GetCitiesResponseData {
  success: boolean;
  data: CityData[];
  errors: any[];
  warnings: any[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export async function callNovaPoshtaGetCitiesAPI(
  requestData: GetCitiesRequestData
): Promise<GetCitiesResponseData> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey,
        modelName: "Address",
        calledMethod: "getCities",
        methodProperties: {
          Ref: requestData.Ref,
          FindByString: requestData.FindByString,
          Page: requestData.Page,
          Limit: requestData.Limit,
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
