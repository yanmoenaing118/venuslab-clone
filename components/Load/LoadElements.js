import styled from "styled-components";

export const LoadElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5000;
  background-color: #222;
  color: #fff;
`;

export const LoadHello = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 520px;
  height: 216px;
  background-image: url(https://www.venuslab.co/images/hello.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  /* background-color: red; */
`;

export const LoadLoading = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -65%);
  width: 80%;
  height: 50%;
  background-image: url(https://www.venuslab.co/images/loading.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  animation: animateLoading 0.6s ease-in-out infinite alternate;

  @keyframes animateLoading {
    to {
      opacity: 0.2;
    }
  }
`;

export const LoadingPercentage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  font-size: 8rem;
  font-weight: bold;
  color: rgb(var(--primary));

  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
`;
