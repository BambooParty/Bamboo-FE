import { Badge } from "./ui/badge";

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

const MbtiBadge = ({ mbti }: { mbti: string }) => {
  const badgeVariant: VariantType = validVariants.includes(mbti as VariantType)
    ? (mbti as VariantType)
    : "default";
  return (
    <div>
      <Badge variant={badgeVariant}>{mbti}</Badge>
    </div>
  );
};

export default MbtiBadge;
