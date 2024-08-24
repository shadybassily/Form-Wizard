import React, { ReactNode } from "react";

interface Tab {
  title: string | ReactNode;
  children: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div>
      {tabs?.map((tab, i) => (
        <>{tab.title}</>
      ))}
    </div>
  );
};

export default Tabs;
