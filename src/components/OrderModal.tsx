import { Button, Modal, Row, Space, Steps } from "antd";
import React from "react";
import Image from "next/image";
import LocationInfo from "./LocationInfo";
import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";

interface OrderModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const description = "This is a description.";

const OrderModal: React.FC<OrderModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleOk = () => {
    // Handle OK action here
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // Handle Cancel action here
    setIsModalOpen(false);
  };

  return (
    <Modal
      //   title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelButtonProps={{
        style: {
          display: "none",
        },
      }}
    >
      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            description,
          },
          {
            title: "In Progress",
            description,
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
      <Row justify="center">
        <Space.Compact>
          <Button
            type="default"
            size="large"
            style={{
              color: "#CA3B2B",
              fontStyle: "bold",
              lineHeight: "24px",
              borderColor: "#CA3B2B",
              display: "flex",
              justifyContent: "center",
            }}
            icon={
              <Image
                src="/assets/img/svg/common/NovaPoshtaLogo.svg"
                alt={"Нова пошта логотип"}
                width={24}
                height={24}
              />
            }
          >
            Нова пошта
          </Button>
          <Button
            type="default"
            size="large"
            style={{
              // color: "#F5C258",
              fontStyle: "bold",
              fontSize: "20px",
              lineHeight: "24px",
              // borderColor: "#F5C258",
              display: "flex",
              justifyContent: "center",
            }}
            icon={
              <Image
                src="/assets/img/svg/common/UkrPoshtaLogo.svg"
                alt={"Укрпошта логотип"}
                width={24}
                height={24}
              />
            }
          >
            Укрпошта
          </Button>
        </Space.Compact>
      </Row>
      <NovaPoshtaAreasContainer
        onSettlementSelected={function (settlementRef: string): void {
          throw new Error("Function onSettlementSelected not implemented.");
        }}
      />
      <LocationInfo />
    </Modal>
  );
};

export default OrderModal;
