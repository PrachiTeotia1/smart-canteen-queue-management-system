import { Button } from "./components/ui/Button/Button";

function App() {
  return (
    <main className="min-h-screen bg-[#FFF9F3] p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-[#1F2937]">
          QueueBite
        </h1>

        <p className="mb-8 text-[#6B7280]">
          Button Component Playground
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              Variants
            </h2>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Order Now</Button>

              <Button variant="secondary">View Queue</Button>

              <Button variant="outline">Browse Menu</Button>

              <Button variant="ghost">Cancel</Button>

              <Button variant="danger">Remove Order</Button>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              Sizes
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>

              <Button size="md">Medium</Button>

              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              States
            </h2>

            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>

              <Button disabled>Disabled</Button>

              <Button loading>Ordering...</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;