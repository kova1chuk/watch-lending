import { callNovaPoshtaGetSettlementAreasAPI } from "./novaPoshtaGetAreasAPI";
import { callNovaPoshtaGetCitiesAPI } from "./novaPoshtaGetCitiesAPI";
import { callNovaPoshtaGetSettlementCountryRegionAPI } from "./novaPoshtaGetSettlementCountryRegionAPI";
import { callNovaPoshtaGetSettlementsAPI } from "./novaPoshtaGetSettlementsAPI";
import { callNovaPoshtaGetStreetsAPI } from "./novaPoshtaGetStreetsAPI";
import { callNovaPoshtaGetWarehousesAPI } from "./novaPoshtaGetWarehousesAPI";
import {
  NovaPoshtaSearchSettlementsResponse,
  callNovaPoshtaSearchSettlementsAPI,
} from "./novaPoshtaSearchSettlementsAPI";

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

export async function fetchCities() {
  try {
    const response = await callNovaPoshtaGetCitiesAPI({
      // Ref: areaRef,
      Page: "1",
      FindByString: "", // You can specify a search query here if needed
      Limit: "20",
    });

    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error fetching cities");
    }
  } catch (error) {
    console.error("Error fetching cities:", error);
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

export async function fetchStreets(cityRef: string, searchQuery: string) {
  try {
    const response = await callNovaPoshtaGetStreetsAPI({
      cityRef,
      searchQuery,
    });
    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error fetching streets");
    }
  } catch (error) {
    console.error("Error fetching streets:", error);
    throw error;
  }
}

export async function fetchWarehouses(cityRef: string, warehouseId?: string) {
  try {
    const response = await callNovaPoshtaGetWarehousesAPI({
      CityRef: cityRef,
      WarehouseId: warehouseId,
    });
    if (response.success) {
      return response.data;
    } else {
      throw new Error("Error fetching warehouses");
    }
  } catch (error) {
    console.error("Error fetching warehouses:", error);
    throw error;
  }
}

export const fetchSettlementsSearch = async (cityName: string) => {
  try {
    const response: NovaPoshtaSearchSettlementsResponse =
      await callNovaPoshtaSearchSettlementsAPI({
        CityName: cityName,
        Limit: 50,
        Page: 1,
      });

    if (response.success) {
      const cities = response.data[0].Addresses;

      return cities;
    }
  } catch (error) {
    console.error("Error fetching settlements:", error);
  }
};
