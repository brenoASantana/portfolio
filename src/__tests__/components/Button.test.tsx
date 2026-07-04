import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../components/ui/Button";

describe("Button Component", () => {
  it("renders button with children text", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("renders with primary variant by default", () => {
    const { container } = render(<Button>Primary</Button>);
    const button = container.querySelector(".primary");
    expect(button).toBeInTheDocument();
  });

  it("renders with secondary variant", () => {
    const { container } = render(
      <Button variant="secondary">Secondary</Button>,
    );
    const button = container.querySelector(".secondary");
    expect(button).toBeInTheDocument();
  });

  it("renders with md size by default", () => {
    const { container } = render(<Button>Medium</Button>);
    const button = container.querySelector(".md");
    expect(button).toBeInTheDocument();
  });

  it("renders with lg size", () => {
    const { container } = render(<Button size="lg">Large</Button>);
    const button = container.querySelector(".lg");
    expect(button).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables button when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("disables button when isLoading is true", () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("shows spinner when isLoading is true", () => {
    const { container } = render(<Button isLoading>Loading</Button>);
    const spinner = container.querySelector(".spinner");
    expect(spinner).toBeInTheDocument();
  });
});
