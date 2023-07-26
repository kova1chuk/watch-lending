// src/utils/novaPoshtaGetSettlementsAPI.ts

const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
const apiKey = process.env.NEW_POST_API_KEY;

export interface GetSettlementsRequestData {
  areaRef: string;
  regionRef: string;
  //   page: string;
  //   warehouse: string;
  //   findByString: string;
  //   limit: string;
}

export interface SettlementData {
  Ref: string;
  SettlementType: string;
  Latitude: string;
  Longitude: string;
  Description: string;
  DescriptionRu: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  Region: string;
  RegionsDescription: string;
  RegionsDescriptionRu: string;
  Area: string;
  AreaDescription: string;
  AreaDescriptionRu: string;
  Index1: string;
  Index2: string;
  IndexCOATSU1: string;
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;
  Warehouse: string;
  Conglomerates: string[];
}

export interface GetSettlementsResponseData {
  success: boolean;
  data: SettlementData[];
  errors: any[];
  warnings: any[];
  info: any[];
  messageCodes: any[];
  errorCodes: any[];
  warningCodes: any[];
  infoCodes: any[];
}

export async function callNovaPoshtaGetSettlementsAPI(
  requestData: GetSettlementsRequestData
): Promise<GetSettlementsResponseData> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey,
        modelName: "Address",
        calledMethod: "getSettlements",
        methodProperties: {
          AreaRef: requestData.areaRef,
          RegionRef: requestData.regionRef,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("settlementsResp", data);
    return data;
  } catch (error) {
    console.error("Error calling Nova Poshta API:", error);
    throw error;
  }
}
