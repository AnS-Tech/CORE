import { MobileMainContent } from "./mobileContent";
import { Content } from "../content";

export const MobileMainFooter = () => {
  return (
    <>
      {Content.map((content) => {
        return (
          <MobileMainContent
            key={content.index}
            title={content.title}
            link1={content.link1}
            link2={content.link2}
            link3={content.link3}
            link4={content.link4}
          />
        );
      })}
    </>
  );
};
