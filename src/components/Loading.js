import loading from "../img/loading.svg";
import styled from "styled-components";
const Loading = () => {
  return (
    <>
      <ImgStyle src={loading} alt="loading" />
    </>
  );
};
const ImgStyle = styled.img`
  position: absolute;
  top: 1%;
  right: 5%;
  z-index: 9;
`;
export default Loading;
