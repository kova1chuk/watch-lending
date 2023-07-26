import { SettlementData } from "../api/novaPoshtaGetSettlementsAPI";

interface NovaPoshtaSettlementsDropdownProps {
  settlements: SettlementData[];
  onSelectSettlement: (settlementRef: string) => void;
}

const NovaPoshtaSettlementsDropdown: React.FC<
  NovaPoshtaSettlementsDropdownProps
> = ({ settlements, onSelectSettlement }) => {
  const handleSelectSettlement = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const settlementRef = event.target.value;
    onSelectSettlement(settlementRef);
  };

  return (
    <div>
      <h2>Settlements:</h2>
      <select onChange={handleSelectSettlement}>
        <option value="">Select a settlement</option>
        {settlements.map((settlement) => (
          <option key={settlement.Ref} value={settlement.Ref}>
            {settlement.Description}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NovaPoshtaSettlementsDropdown;
