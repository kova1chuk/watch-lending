import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";

const NovaPoshtaAreas = () => (
  <NovaPoshtaAreasContainer
    onSettlementSelected={function (settlementRef: string): void {
      throw new Error("Function onSettlementSelected not implemented.");
    }}
  />
);

export default NovaPoshtaAreas;
