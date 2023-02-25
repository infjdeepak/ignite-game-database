import styled from "styled-components";

const ErrorPage = () => {
  return (
    <ErrorStyle>
      <h1>Server Error</h1>
      <h3>Something went wrong.</h3>
      <p>
        Try to refresh this page or feel free to contact us if the problem
        persists.
      </p>
    </ErrorStyle>
  );
};
//styled
const ErrorStyle = styled.div`
  text-align: center;
  margin: 5rem 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export default ErrorPage;
