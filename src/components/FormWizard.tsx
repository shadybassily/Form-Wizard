import styles from "./form-wizard.module.css";
import Tabs from "components/tabs/Tabs";

export default function FormWizard() {
  const tabs = [
    {
      title: "tab1",
      children: <>child1</>,
    },
    {
      title: "tab1",
      children: <>child1</>,
    },
  ];
  return (
    <div className={styles["form-wizard-container"]}>
      <Tabs tabs={tabs} />
    </div>
  );
}
