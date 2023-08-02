// API file: novaPoshtaGetWarehousesAPI.ts

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = process.env.NEXT_PUBLIC_NEW_POST_API_KEY;

export interface GetWarehousesRequestData {
  CityName?: string;
  CityRef: string;
  Page?: string;
  Limit?: string;
  Language?: string;
  TypeOfWarehouseRef?: string;
  WarehouseId?: string;
}

export interface WarehouseData {
  // Define the interface for the warehouse data based on the response
  // from the Nova Poshta API
  Ref: string;
  SiteKey: string;
  Description: string;
  DescriptionRu: string;
  // Add more properties as needed
}

export interface GetWarehousesResponseData {
  success: boolean;
  data: WarehouseData[];
  errors: any[];
  warnings: any[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export async function callNovaPoshtaGetWarehousesAPI(
  requestData: GetWarehousesRequestData
): Promise<GetWarehousesResponseData> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: requestData,
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
