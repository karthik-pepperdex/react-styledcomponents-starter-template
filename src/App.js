import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container>
        <Title>This is the reactjs, styled components starter template</Title>
        <Subtitle>
          It has styled components already setup. Ready for you to use!
        </Subtitle>
        <Instructions>
          Create new tags in the functional component and then create the styled
          component like this
          <TagName>const tag_name = styled.div``;</TagName>
          <Alternative>
            You can replace .div with .main, .a, .button etc as well
          </Alternative>
        </Instructions>
        <Button>
          <a href="https://styled-components.com/">
            Know more about styled components
          </a>
        </Button>
      </Container>
    </div>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 500px;
`;

const Title = styled.div`
  font-size: 40px;
  --tw-text-opacity: 1;
  color: rgba(124, 58, 237, var(--tw-text-opacity));
  padding-bottom: 40px;
`;

const Subtitle = styled.div`
  font-size: 35px;
  --tw-text-opacity: 1;
  color: rgba(99, 102, 241, var(--tw-text-opacity));
`;

const Instructions = styled.div`
  font-size: 25px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
`;

const TagName = styled.div`
  font-size: 35px;
  margin-top: 16px;
  padding-left: 250px;
`;

const Alternative = styled.div`
  font-size: 23px;
  margin-top: 20px;
  color: #186906;
  padding-left: 200px;
`;

const Button = styled.button`
  border: 1px solid black;
  margin-top: 25px;
  padding: 14px 14px 14px 14px;
  font-size: 20px;
  background-color: aquamarine;
  border-radius: 48px;
  cursor: pointer;
  a {
    color: black;
    text-decoration: none;
  }
  &:hover {
    transform: transition ease-in-out;
    transition-duration: 300ms;
    background-color: #13e8da;
  }
`;

export default App;
