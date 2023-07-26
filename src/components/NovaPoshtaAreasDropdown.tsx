// components/NovaPoshtaAreasDropdown.tsx

import { SettlementAreaData } from "@/api/novaPoshtaGetAreasAPI";

interface Props {
  areas: SettlementAreaData[];
  onSelectArea: (areaRef: string) => void;
}

const NovaPoshtaAreasDropdown: React.FC<Props> = ({ areas, onSelectArea }) => {
  const handleSelectArea = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectArea(event.target.value);
    // areas.find((area) => area.Ref === event.target.value)?.Description || ""
  };

  return (
    <div>
      <label htmlFor="areaSelect">Select Area:</label>
      <select id="areaSelect" onChange={handleSelectArea}>
        <option value="">Select an area</option>
        {areas.map((area) => (
          <option key={area.Ref} value={area.Ref}>
            {`${area.Description}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NovaPoshtaAreasDropdown;
