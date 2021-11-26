import styled from "styled-components";
const Div = styled.div`

  margin-top: 84px;
  display: flex;
  justify-content: center;
  align-items: center;

  .detailedFlag {
    width: 390px;
    height: 250px;
    object-fit: cover;

    box-shadow: 10px 10px 7px black;
  }

  .detailContainer {
    width: 1200px;
    background-color: rgba(220, 220, 220, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space evenly;
  }

  .country {
    display: column;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 25px;
  }

  .activities {
    display: flex;
    flex-wrap: wrap;
  }

  .midCard {
    display: flex;
    width: 1200px;
    justify-content: space-evenly;

    .infoDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 500px;

      .iconedDiv {
        img {
          margin-top: 12px;
          margin-right: 40px;
        }
        display: flex;
        margin-bottom: 20px;
      }

    }
    
  }
`;

export default Div;