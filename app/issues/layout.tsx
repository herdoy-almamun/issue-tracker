import { PropsWithChildren } from "react";
import Navbar from "../navbar";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navbar />
      <div className="px-3">{children}</div>
    </main>
  );
};

export default layout;
