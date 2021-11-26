import styled from "styled-components";


const Div = styled.div`
  position: absolute;
  display: flex;
  background-color: #56c6e8;
  border-radius: 20px;
  justify-content: space-evenly;
  height: 60px;
  width: 98%;
  top: 0;
  left: 0;
  margin: 12px;

  .list-item {
      color: white;
      text-decoration: none;
      
    &:hover {
        color: gray;
        transform: scale(1.15);
        transition: 0.5s;
    }
  }
`;

export default Div;