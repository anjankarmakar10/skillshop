export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/jobs/new", "/jobs/edit/:id+", "/jobs/mylisting"],
};
