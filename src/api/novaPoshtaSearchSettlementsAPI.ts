const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = process.env.NEXT_PUBLIC_NEW_POST_API_KEY;

export interface NovaPostSearchSetelmentsAddress {
  Warehouses: string;
  MainDescription: string;
  Area: string;
  Region: string;
  SettlementTypeCode: string;
  Ref: string;
  DeliveryCity: string;
  Present: string;
}

export interface NovaPostSearchSetelmentsData {
  TotalCount: string;
  Addresses: NovaPostSearchSetelmentsAddress[];
  Warehouses: string;
  MainDescription: string;
  Area: string;
  Region: string;
  SettlementTypeCode: string;
  Ref: string;
  DeliveryCity: string;
}
[];

export interface NovaPoshtaSearchSettlementsResponse {
  success: boolean;
  data: NovaPostSearchSetelmentsData[];
  errors: any[];
  warnings: any[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export async function callNovaPoshtaSearchSettlementsAPI(methodProperties: {
  CityName: string;
  Limit: number;
  Page: number;
}): Promise<NovaPoshtaSearchSettlementsResponse> {
  const modelName = "Address";
  const calledMethod = "searchSettlements";

  const requestData = {
    apiKey,
    modelName,
    calledMethod,
    methodProperties,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error calling Nova Poshta API:", error);
    throw error;
  }
}
