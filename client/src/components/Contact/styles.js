import styled from "styled-components";

const Div = styled.div`
  margin-top: 150px;
  width: 350px;
  margin-left: 505px;

  .contact {
    a {
      color: rgb(245, 240, 240);
      text-decoration: none;
    }

    .tag {
      &:hover {
        transform: scale(1.05);
        transition: 0.5s;
      }
    }
    
    .contactInfo {
      width: fit-content;
      img {
        margin-top: 14px;
        margin-right: 9px;
      }
      display: flex;
    }
  }
`;

export default Div;