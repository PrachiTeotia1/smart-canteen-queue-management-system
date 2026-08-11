import { useMemo, useState } from "react";
import { FoodCard } from "../../components/common/FoodCard/FoodCard";
import { Input } from "../../components/ui/Input/Input";
import { Typography } from "../../components/ui/Typography/Typography";

type Category =
  | "All"
  | "Burgers"
  | "Pizza"
  | "Drinks"
  | "Chicken"
  | "Snacks";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Exclude<Category, "All">;
  image: string;
  tag?: string;
}

const categories: Category[] = [
  "All",
  "Burgers",
  "Pizza",
  "Drinks",
  "Chicken",
  "Snacks",
];

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Burger",
    description:
      "Crispy chicken, fresh lettuce and creamy sauce.",
    price: 129,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Classic Cheeseburger",
    description:
      "Juicy patty, melted cheese and fresh vegetables.",
    price: 149,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description:
      "Classic tomato, mozzarella and fresh basil.",
    price: 179,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    tag: "Student Pick",
  },
  {
    id: 4,
    name: "Veggie Pizza",
    description:
      "Loaded with fresh vegetables and mozzarella.",
    price: 199,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Cold Coffee",
    description:
      "Smooth chilled coffee with a creamy finish.",
    price: 89,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Fresh Lemonade",
    description:
      "Refreshing lemonade served chilled.",
    price: 69,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Crispy Chicken",
    description:
      "Golden crispy chicken with a spicy dip.",
    price: 159,
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    tag: "Hot",
  },
  {
    id: 8,
    name: "Loaded Fries",
    description:
      "Crispy fries topped with cheese and spicy sauce.",
    price: 99,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },
];

export function Menu() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("All");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        search.length === 0 ||
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <Typography variant="h1">
          Explore the menu
        </Typography>

        <Typography
          variant="body"
          className="mt-2 text-[#6B7280]"
        >
          Find something delicious without the wait.
        </Typography>
      </section>

      {/* Search */}
      <section>
        <Input
          aria-label="Search menu"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </section>

      {/* Category Filter */}
      <section>
        <Typography
          variant="h3"
          className="mb-4"
        >
          Categories
        </Typography>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isSelected =
              selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isSelected}
                className={`
                  shrink-0
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  focus:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-[#FF7A00]/20
                  ${
                    isSelected
                      ? "border-[#FF7A00] bg-[#FF7A00] text-white"
                      : "border-[#E8D8C8] bg-white text-[#6B7280] hover:border-[#FF7A00] hover:text-[#FF7A00]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Menu Results */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <Typography variant="h3">
            {selectedCategory === "All"
              ? "All dishes"
              : selectedCategory}
          </Typography>

          <Typography variant="body-sm">
            {filteredItems.length} items
          </Typography>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                tag={item.tag}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center">
            <Typography variant="h3">
              Nothing found
            </Typography>

            <Typography
              variant="body-sm"
              className="mt-2 text-[#6B7280]"
            >
              Try a different search or category.
            </Typography>
          </div>
        )}
      </section>
    </div>
  );
}