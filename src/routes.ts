
import {postLoginAction} from "./controller/PostLoginAction";
import {postLogoutAction} from "./controller/PostLogoutAction";
import {getCustomerAction} from "./controller/GetCustomerAction";
/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/login",
        method: "post",
        action: postLoginAction
    },
    {
        path: "/logout",
        method: "post",
        action: postLogoutAction
    },
    {
        path: "/customers/:customerId",
        method: "get",
        action: getCustomerAction
    }
];