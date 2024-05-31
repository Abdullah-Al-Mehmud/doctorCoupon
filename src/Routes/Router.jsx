import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
// import AddCoupons from "../Pages/AddCoupons/AddCoupons";
import CouponList from "../Pages/CouponList/CouponList";
import UsageList from "../Pages/UsageList/UsageList";
import CouponRequest from "../Pages/CouponRequest/CouponRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/couponRequest",
        element: <CouponRequest />,
      },
      {
        path: "/couponList",
        element: <CouponList />,
      },
      {
        path: "/usageList",
        element: <UsageList />,
      },
    ],
  },
]);
export default router;
