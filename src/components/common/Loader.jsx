import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { colors } from "@themes";
import { Container } from "@components/custom";
import styled from "styled-components";

const LoaderContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        color: `${colors.primary}`,
        fontSize: 50,
      }}
      spin
    />
  );
  return (
    <LoaderContainer>
      <Spin indicator={antIcon}></Spin>
    </LoaderContainer>
  );
};

export default Loader;
