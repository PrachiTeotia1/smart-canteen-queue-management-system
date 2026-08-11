import { Card } from "../../ui/Card/Card";
import { Typography } from "../../ui/Typography/Typography";

interface CategoryCardProps {
  name: string;
  icon: string;
}

export function CategoryCard({
  name,
  icon,
}: CategoryCardProps) {
  return (
    <Card
      padding="md"
      className="
        flex
        min-w-27.5px
        cursor-pointer
        flex-col
        items-center
        justify-center
        gap-2
        text-center
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <span
        aria-hidden="true"
        className="text-3xl"
      >
        {icon}
      </span>

      <Typography
        variant="body-sm"
        className="font-medium text-[#1F2937]"
      >
        {name}
      </Typography>
    </Card>
  );
}