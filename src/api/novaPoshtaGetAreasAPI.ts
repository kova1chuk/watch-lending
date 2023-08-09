// src/utils/novaPoshtaGetAreasAPI.ts

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = process.env.NEXT_PUBLIC_NEW_POST_API_KEY;

export interface GetSettlementAreasRequestData {}

export interface SettlementAreaData {
  Ref: string;
  AreasCenter: string;
  DescriptionRu: string;
  Description: string;
}

export interface GetSettlementAreasResponseData {
  success: boolean;
  data: SettlementAreaData[];
  errors: any[];
  warnings: any[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export async function callNovaPoshtaGetSettlementAreasAPI(
  requestData: GetSettlementAreasRequestData
): Promise<GetSettlementAreasResponseData> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey,
        modelName: "Address",
        calledMethod: "getSettlementAreas",
        methodProperties: {},
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("settlementAreasResp", data);

    return data;
  } catch (error) {
    console.error("Error calling Nova Poshta API:", error);
    throw error;
  }
}
