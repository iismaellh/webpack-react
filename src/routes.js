import Origin from "./containers/Origin";
import Async from "./containers/Async";

export default [
    {
        path: "/",
        component: Origin,
        exact: true,
    },
    {
        path: "/async",
        component: Async,
        exact: true,
    }
];
