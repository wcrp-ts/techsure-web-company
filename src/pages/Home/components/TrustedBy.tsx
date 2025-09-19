import { Typography } from "antd";
import kmitlLogo from "../../../assets/kmitlLogo.png";
import kuLogo from "../../../assets/kuLogo.png";
import craLogo from "../../../assets/craLogo.png";
import nhaLogo from "../../../assets/nhaLogo.png";
import exatLogo from "../../../assets/exatLogo.png";
import irpcLogo from "../../../assets/irpcLogo.png";
import easyLogo from "../../../assets/easyriceLogo.png";

const { Text } = Typography;


const logos = [kmitlLogo, kuLogo, craLogo, nhaLogo, exatLogo, irpcLogo, easyLogo];

const TrustedBy = () => (
  <div style={{ textAlign: "center", padding: "60px 20px" }}>
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
  </div>
);

export default TrustedBy;
