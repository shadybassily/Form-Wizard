import { FormWizard } from "src/components";
import "./App.css";

function App() {
  const steps = [
    {
      title: "tab1",
      children: <>child1</>,
    },
    {
      title: "tab2",
      children: <>child2</>,
    },
  ];

  return (
    <>
      <FormWizard isTopNavigator isBottomNavigator initialStep={0} steps={steps} />
    </>
  );
}

export default App;
