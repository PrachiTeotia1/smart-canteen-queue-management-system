import { Input } from "../../components/ui/Input/Input";
import { Typography } from "../../components/ui/Typography/Typography";
import { CategoryCard } from "../../components/common/CategoryCard/CategoryCard";
import { FoodCard } from "../../components/common/FoodCard/FoodCard";
import { QueueStatus } from "../../components/common/QueueStatus/QueueStatus";

const categories = [
  { name: "Burgers", icon: "🍔" },
  { name: "Pizza", icon: "🍕" },
  { name: "Drinks", icon: "🥤" },
  { name: "Chicken", icon: "🍗" },
  { name: "Snacks", icon: "🍟" },
];


const popularDishes = [
  {
    name: "Chicken Burger",
    description: "Crispy chicken, fresh lettuce and creamy sauce.",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
  },
  {
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella and fresh basil.",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    tag: "Student Pick",
  },
  {
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese and spicy sauce.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    tag: "Hot",
  },
];
export function Home() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <section>
        <Typography variant="h1">
          Good afternoon!
        </Typography>

        <Typography
          variant="body"
          className="mt-2"
        >
          What are you craving today?
        </Typography>
      </section>

      {/* Search */}
      <section>
        <Input
          aria-label="Search food"
          placeholder="Search burgers, pizza, drinks..."
        />
      </section>

      {/* Categories */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h3">
            Categories
          </Typography>

          <button
            type="button"
            className="
              text-sm
              font-medium
              text-[#FF7A00]
              transition
              hover:text-[#E66D00]
            "
          >
            See all
          </button>
        </div>

        <div
          className="
            flex
            gap-4
            overflow-x-auto
            pb-2
            scrollbar-none
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </div>
      </section>

      {/* Popular Dishes */}
        <section>
        <div className="mb-4 flex items-center justify-between">
            <Typography variant="h3">
            Popular near you
            </Typography>

            <button
            type="button"
            className="
                text-sm
                font-medium
                text-[#FF7A00]
                transition
                hover:text-[#E66D00]
            "
            >
            See all
            </button>
        </div>

        <div
            className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            "
        >
            {popularDishes.map((dish) => (
            <FoodCard
                key={dish.name}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                tag={dish.tag}
            />
            ))}
        </div>
        </section>
        {/* Current Queue */}
<section>
  <div className="mb-4">
    <Typography variant="h3">
      Your queue
    </Typography>
  </div>

  <QueueStatus
    queueNumber="A-102"
    peopleAhead={7}
    estimatedWait={12}
    status="preparing"
  />
</section>
    </div>
  );
}