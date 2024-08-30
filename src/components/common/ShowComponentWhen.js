import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
const ShowComponentWhen = ({ when, show, elseComponent = null }) => {
    return _jsx(_Fragment, { children: when ? show : elseComponent });
};
export default ShowComponentWhen;
