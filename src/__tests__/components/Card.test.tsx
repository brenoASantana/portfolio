import { render, screen } from "@testing-library/react";
import Card from "../../components/ui/Card";

describe("Card Component", () => {
    it("renders card with children content", () => {
        render(<Card>Card content</Card>);
        expect(screen.getByText(/card content/i)).toBeInTheDocument();
    });

    it("renders card with header", () => {
        render(<Card header={<h2>Header</h2>}>Content</Card>);
        expect(screen.getByText(/header/i)).toBeInTheDocument();
    });

    it("renders card with footer", () => {
        render(<Card footer={<p>Footer</p>}>Content</Card>);
        expect(screen.getByText(/footer/i)).toBeInTheDocument();
    });

    it("renders card with header and footer", () => {
        render(
            <Card header={<h2>Header</h2>} footer={<p>Footer</p>}>
                Content
            </Card>
        );
        expect(screen.getByText(/header/i)).toBeInTheDocument();
        expect(screen.getByText(/content/i)).toBeInTheDocument();
        expect(screen.getByText(/footer/i)).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Card className="custom">Content</Card>);
        const card = container.firstChild;
        expect(card).toHaveClass("custom");
    });

    it("renders with card class", () => {
        const { container } = render(<Card>Content</Card>);
        const card = container.querySelector(".card");
        expect(card).toHaveClass("card");
    });
});
