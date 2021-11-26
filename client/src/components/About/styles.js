
import styled from "styled-components";

const Div = styled.div`
  margin-top: 100px;
  margin-left: 450px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fafafa;

  a {
    color: #86d186;
  }
  
  .pern {
    display: flex;
    justify-content: space-evenly;

    img {

      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
      }
    }
  }
`;

export default Div;