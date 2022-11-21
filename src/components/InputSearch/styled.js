import styled from "styled-components";

export const StyledBoxInputSearch = styled.div`
  width: 54%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;

  input {
    width: 100%;
    max-width: 365px;
    height: 60px;

    padding: 0px 130px 0px 15px;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #828282;
  }

  input::placeholder {
    color: #e0e0e0;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (max-width: 570px) {
    width: 100%;
    justify-content: center;

    div {
      width: 100%;
    }
    input {
      max-width: 500px;
    }
  }
`;
