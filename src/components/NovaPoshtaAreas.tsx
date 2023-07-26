import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";

const NovaPoshtaAreas = () => {
  const handleSettlementSelected = (settlementRef: string) => {
    // Do something with the selected settlement (from NovaPoshtaSettlementsDropdown)
    console.log("Selected Settlement:", settlementRef);
  };

  return (
    <div>
      <NovaPoshtaAreasContainer
        onSettlementSelected={handleSettlementSelected}
      />
    </div>
  );
};

export default NovaPoshtaAreas;
