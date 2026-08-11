import { Badge } from "../../ui/Badge/Badge";
import { Button } from "../../ui/Button/Button";
import { Card } from "../../ui/Card/Card";
import { Typography } from "../../ui/Typography/Typography";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

export function FoodCard({
  name,
  description,
  price,
  image,
  tag,
}: FoodCardProps) {
  return (
    <Card
      padding="none"
      className="
        group
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Food Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#FFF3E6]">
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {tag && (
          <div className="absolute left-3 top-3">
            <Badge variant="accent">
              {tag}
            </Badge>
          </div>
        )}
      </div>

      {/* Food Details */}
      <div className="space-y-3 p-4">
        <div>
          <Typography
            variant="h3"
            className="text-lg"
          >
            {name}
          </Typography>

          <Typography
            variant="body-sm"
            className="mt-1 line-clamp-2"
          >
            {description}
          </Typography>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Typography
            variant="body"
            className="font-semibold text-[#1F2937]"
          >
            ₹{price}
          </Typography>

          <Button
            variant="primary"
            className="px-4 py-2"
          >
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}