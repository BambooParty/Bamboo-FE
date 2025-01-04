import { Badge } from "./badge";
import { testData } from "../../data/testData";

const validVariants = [
  "INFP",
  "ENFP",
  "INTJ",
  "default",
  "INTP",
  "ENTJ",
  "ENTP",
  "INFJ",
  "ENFJ",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
] as const;

type VariantType = (typeof validVariants)[number];

const MbtiBadge = () => {
  return (
    <div>
      {testData.map((data, index) => {
        const variant: VariantType = validVariants.includes(
          data.mbti as VariantType
        )
          ? (data.mbti as VariantType)
          : "default";

        return (
          <Badge key={index} variant={variant}>
            {data.mbti}
          </Badge>
        );
      })}
    </div>
  );
};

export default MbtiBadge;
