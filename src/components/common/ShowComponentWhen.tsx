import React from "react";

interface ShowComponentWhenProps {
  when: boolean;
  show: React.ReactNode | any;
  elseComponent?: React.ReactNode;
}

const ShowComponentWhen: React.FC<ShowComponentWhenProps> = ({ when, show, elseComponent = null }) => {
  return <>{when ? show : elseComponent}</>;
};

export default ShowComponentWhen;
