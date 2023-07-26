const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = process.env.NEW_POST_API_KEY;

export interface GetSettlementCountryRegionRequestData {
  areaRef: string;
}

export interface SettlementCountryRegionData {
  Ref: string;
  AreasCenter: string;
  Description: string;
  RegionType: string;
}

export interface GetSettlementCountryRegionResponseData {
  success: boolean;
  data: SettlementCountryRegionData[];
  errors: any[];
  warnings: any[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export async function callNovaPoshtaGetSettlementCountryRegionAPI(
  requestData: GetSettlementCountryRegionRequestData
): Promise<GetSettlementCountryRegionResponseData> {
  try {
    console.log(requestData.areaRef, 2);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey,
        modelName: "Address",
        calledMethod: "getSettlementCountryRegion",
        methodProperties: { AreaRef: requestData.areaRef },
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("settlementCountryRegionResp", data);
    return data;
  } catch (error) {
    console.error("Error calling Nova Poshta API:", error);
    throw error;
  }
}
