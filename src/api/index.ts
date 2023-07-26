import { callNovaPoshtaGetSettlementAreasAPI } from "./novaPoshtaGetAreasAPI";
import { callNovaPoshtaGetSettlementCountryRegionAPI } from "./novaPoshtaGetSettlementCountryRegionAPI";
import { callNovaPoshtaGetSettlementsAPI } from "./novaPoshtaGetSettlementsAPI";

export async function fetchAreas() {
  try {
    const response = await callNovaPoshtaGetSettlementAreasAPI({});
    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error fetching areas");
    }
  } catch (error) {
    console.error("Error fetching areas:", error);
    throw error;
  }
}

export async function fetchSettlementCountryRegions(areaRef: string) {
  try {
    const response = await callNovaPoshtaGetSettlementCountryRegionAPI({
      areaRef,
    });
    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error fetching settlement country regions");
    }
  } catch (error) {
    console.error("Error fetching settlement country regions:", error);
    throw error;
  }
}

export async function fetchSettlements(regionRef: string, areaRef: string) {
  try {
    const response = await callNovaPoshtaGetSettlementsAPI({
      regionRef,
      areaRef,
    });
    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error fetching settlements");
    }
  } catch (error) {
    console.error("Error fetching settlements:", error);
    throw error;
  }
}
