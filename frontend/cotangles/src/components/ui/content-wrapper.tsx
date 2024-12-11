import { Outlet } from "react-router-dom";

const ContentWrapper = () => {
  return (
    <div className="relative top-[60px] flex flex-col items-center gap-y-[1.5rem] h-[80vh]">
      <Outlet/>
    </div>
  );
};

export { ContentWrapper };
