import { DotChartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Space } from "antd";
import { Skeleton as AntdSceleton } from "antd";

type SizeType = "default" | "small" | "large";
type ButtonShapeType = "circle" | "square" | "round" | "default";
type AvatarShapeType = "circle" | "square";

const Skeleton = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState<SizeType>("default");
  const [buttonShape, setButtonShape] = useState<ButtonShapeType>("default");
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>("circle");

  return (
    <>
      <Space>
        <AntdSceleton.Button
          active={active}
          size={size}
          shape={buttonShape}
          block={block}
        />
        <AntdSceleton.Avatar active={active} size={size} shape={avatarShape} />
        <AntdSceleton.Input active={active} size={size} />
      </Space>
      <br />
      <br />
      <AntdSceleton.Button
        active={active}
        size={size}
        shape={buttonShape}
        block={block}
      />
      <br />
      <br />
      <AntdSceleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Space>
        <AntdSceleton.Image active={active} />
        <AntdSceleton.Node active={active}>
          <DotChartOutlined style={{ fontSize: 40, color: "#bfbfbf" }} />
        </AntdSceleton.Node>
      </Space>
    </>
  );
};
