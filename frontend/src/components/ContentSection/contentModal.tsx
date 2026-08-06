import type { Dispatch, SetStateAction } from "react";
import { Flex, Modal } from "antd";
import type { ContentItem } from "@/types/contentItem.interface";
import { formatDate } from "@/utils/helper.utils";

interface Props {
  openResponsive: boolean;
  setOpenResponsive: Dispatch<SetStateAction<boolean>>;
  item: ContentItem;
}

export default function ContentModal({
  item,
  openResponsive,
  setOpenResponsive,
}: Props) {
  return (
    <Flex vertical gap="medium" align="flex-start">
      <Modal
        zIndex={3000}
        title={item.title}
        centered
        open={openResponsive}
        footer={null}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            borderRadius: 8,
            marginBottom: 16,
          }}
        />

        <p>
          <strong>{formatDate(item.date)}</strong>
        </p>

        <p>{item.description}</p>
      </Modal>
    </Flex>
  );
}
