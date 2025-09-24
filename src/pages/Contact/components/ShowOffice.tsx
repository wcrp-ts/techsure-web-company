import { Typography, Button, Flex } from "antd";

const { Text } = Typography;

const ShowOffice = () => {
  return (
    <Flex vertical className="justify-center items-center gap-4">
      <Text className="text-hero-l text-text-title font-bold text"> Our Office</Text>
        <Text className="text-body-l text-text-title text-center">
        25 หมู่ 3 ตำบลมาบข่า อำเภอนิคมพัฒนา <br />จังหวัดระยอง
      </Text>
      <br />
      <Button
        type="default"
        style={{ background:"none" , color:"#fff"}}
        onClick={() =>
          window.open(
             "https://www.google.com/maps/dir/?api=1&destination=12.776472,101.214306",
            "_blank"
          )
        }
      >
        Get directions to our office
      </Button>
    </Flex>
  );
};

export default ShowOffice;
