import { Button } from "./components/ui/Button/Button";
import { Card } from "./components/ui/Card/Card";
import { Badge } from "./components/ui/Badge/Badge";
import { Input } from "./components/ui/Input/Input";

function App() {
  return (
    <main className="min-h-screen bg-[#FFF9F3] p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-[#1F2937]">
          QueueBite
        </h1>

        <p className="mb-8 text-[#6B7280]">
          Component Playground
        </p>

        <section className="space-y-10">
          {/* Button Section */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              Buttons
            </h2>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Order Now</Button>
              <Button variant="secondary">View Queue</Button>
              <Button variant="outline">Browse Menu</Button>
              <Button variant="ghost">Cancel</Button>
              <Button variant="danger">Remove Order</Button>
            </div>
          </div>

          {/* Card Section */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              Cards
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <h3 className="mb-2 text-lg font-semibold text-[#1F2937]">
                  Default Card
                </h3>

                <p className="text-sm text-[#6B7280]">
                  Standard QueueBite surface.
                </p>
              </Card>

              <Card variant="outlined">
                <h3 className="mb-2 text-lg font-semibold text-[#1F2937]">
                  Outlined Card
                </h3>

                <p className="text-sm text-[#6B7280]">
                  A stronger border for separation.
                </p>
              </Card>

              <Card variant="elevated">
                <h3 className="mb-2 text-lg font-semibold text-[#1F2937]">
                  Elevated Card
                </h3>

                <p className="text-sm text-[#6B7280]">
                  A subtle shadow for hierarchy.
                </p>
              </Card>
            </div>
          </div>
          {/* Badge Section */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              Badges
            </h2>

            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>

              <Badge variant="success" dot>
                Ready
              </Badge>

              <Badge variant="warning" dot>
                Preparing
              </Badge>

              <Badge variant="danger">
                Cancelled
              </Badge>

              <Badge variant="info">
                Information
              </Badge>

              <Badge variant="accent">
                Popular
              </Badge>
            </div>
          </div>
          {/* Input Section */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              Inputs
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Search food"
                placeholder="Search burgers, pizza..."
              />

              <Input
                label="Special instructions"
                placeholder="Less spicy, please..."
                helperText="Optional · Maximum 100 characters"
              />

              <Input
                label="Email"
                placeholder="you@example.com"
                error="Please enter a valid email address."
              />

              <Input
                label="Disabled input"
                placeholder="This input is disabled"
                disabled
              />
            </div>
          </div>
          
          
          {/* Queue Example */}
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#1F2937]">
              Queue Example
            </h2>

            <Card variant="elevated" padding="lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6B7280]">
                    Current Queue
                  </p>

                  <p className="mt-1 text-3xl font-bold text-[#1F2937]">
                    #A-102
                  </p>

                  <p className="mt-2 text-sm text-[#6B7280]">
                    7 people ahead · ~12 min
                  </p>
                </div>

                <div className="rounded-full bg-[#FFF3E6] px-3 py-1 text-sm font-medium text-[#FF7A00]">
                  Preparing
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;