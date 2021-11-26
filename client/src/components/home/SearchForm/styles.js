import styled from "styled-components";

const Form = styled.form`
  background-color: #f0f7f3;
  border: 1px solid #9fe2bf;
  height: 64px;
  padding-right: 1rem;
  margin-bottom: 3rem;
  color: white;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border: 1px solid #9fe2bf;
    height: 28px;
    color: #f2f2ed;
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: "Questrial", sans-serif;
    background-color: #edf507;
    border-radius: 5px;
  }
  img {
    height: 28px;
    margin-right: 10px;
    margin-bottom: -10px;
  }
  select {
    border: 1px solid #9fe2bf;
    color: white;
    font-family: "Questrial", sans-serif;
    background-color: #edf507;
  }
`;

export default Form;