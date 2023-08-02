import { useState } from "react";
import { Form, Select } from "antd";
import { SettlementAreaData } from "@/api/novaPoshtaGetAreasAPI";
import React from "react";

const { Option } = Select;

interface Props {
  areas: SettlementAreaData[];
  onSelectArea: (areaRef: string) => void;
}

const NovaPoshtaAreasDropdown: React.FC<Props> = ({ areas, onSelectArea }) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const handleBlur = () => {
    // setFocusedArea(selectedArea);
    // if (selectedArea) {
    //   onSelectArea(selectedArea);
    // }
  };

  return (
    <Form.Item name="area">
      <Select
        showSearch
        placeholder="Select Area"
        onChange={onChange}
        onSearch={onSearch}
        onBlur={handleBlur}
        filterOption={(input, option) =>
          option?.props.children.toLowerCase().indexOf(input.toLowerCase()) !==
          -1
        }
        size="large"
      >
        {areas.map((area) => (
          <Option key={area.Ref} value={area.Ref}>
            {area.Description}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default NovaPoshtaAreasDropdown;
