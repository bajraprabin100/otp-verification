import {createRoute, redirect} from "@tanstack/react-router";
import { rootRoute } from "@/app/pages/root.lazy";
import { signUpRoute } from "@/app/pages/home/sign-up/otp.lazy";
import ErrorPage, {errorRoutes} from "@/app/pages/error/error.page";
import PageNotFound from "@/app/pages/error/page-not-found.page";
import SuccessPage, { successRoutes } from "./app/pages/success";

const fallBackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: PageNotFound,
})

export const routeTree = rootRoute.addChildren([
  fallBackRoute,
  signUpRoute,
  errorRoutes,
  successRoutes,
])


