import { FeaturedProps } from "./interfaces";
import { FeaturedComponentWrapper } from "./styles";

export const FeaturedContentComponent = ({
  icon,
  title,
  description,
}: FeaturedProps) => {
  return (
    <FeaturedComponentWrapper>
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
    </FeaturedComponentWrapper>
  );
};
