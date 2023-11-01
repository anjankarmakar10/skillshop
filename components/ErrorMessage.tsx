import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return <p className="text-sm text-rose-600 dark:text-rose-400">{children}</p>;
};
export default ErrorMessage;
