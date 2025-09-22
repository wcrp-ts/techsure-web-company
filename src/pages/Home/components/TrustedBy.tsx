import { Flex, Typography } from "antd";
import kmitlLogo from "../../../assets/logo/kmitlLogo.png";
import kuLogo from "../../../assets/logo/kuLogo.png";
import craLogo from "../../../assets/logo/craLogo.png";
import nhaLogo from "../../../assets/logo/nhaLogo.png";
import exatLogo from "../../../assets/logo/exatLogo.png";
import irpcLogo from "../../../assets/logo/irpcLogo.png";
import easyLogo from "../../../assets/logo/easyriceLogo.png";
import vajiraLogo from "../../../assets/logo/VajiraLogo.png";
import barameeLogo from "../../../assets/logo/BarameeLogo.png";

const { Text } = Typography;


const logos = [kmitlLogo, kuLogo, craLogo, nhaLogo, exatLogo, irpcLogo, easyLogo,vajiraLogo,barameeLogo];

const TrustedBy = () => (
   <Flex vertical align="center" justify="center" className="py-[80px] px-12 gap-6 " >
    <Text className="text-hero-xs font-bold text-text-title">Trusted By</Text>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
        marginTop: "24px",
      }}
    >
      {logos.map((logo, index) => (
        <div key={index} style={{ flex: "0 0 120px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  </Flex>
);

export default TrustedBy;
