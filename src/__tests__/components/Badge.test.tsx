import { render, screen } from "@testing-library/react";
import Badge from "../../components/ui/Badge";

describe("Badge Component", () => {
    it("renders badge with children text", () => {
        render(<Badge>React</Badge>);
        const badge = screen.getByText(/react/i);
        expect(badge).toBeInTheDocument();
    });

    it("renders with primary variant by default", () => {
        const { container } = render(<Badge>Primary</Badge>);
        const badge = container.querySelector(".primary");
        expect(badge).toBeInTheDocument();
    });

    it("renders with success variant", () => {
        const { container } = render(<Badge variant="success">Success</Badge>);
        const badge = container.querySelector(".success");
        expect(badge).toBeInTheDocument();
    });

    it("renders with error variant", () => {
        const { container } = render(<Badge variant="error">Error</Badge>);
        const badge = container.querySelector(".error");
        expect(badge).toBeInTheDocument();
    });

    it("renders with warning variant", () => {
        const { container } = render(<Badge variant="warning">Warning</Badge>);
        const badge = container.querySelector(".warning");
        expect(badge).toBeInTheDocument();
    });

    it("renders with info variant", () => {
        const { container } = render(<Badge variant="info">Info</Badge>);
        const badge = container.querySelector(".info");
        expect(badge).toBeInTheDocument();
    });

    it("renders with md size by default", () => {
        const { container } = render(<Badge>Medium</Badge>);
        const badge = container.querySelector(".md");
        expect(badge).toBeInTheDocument();
    });

    it("renders with sm size", () => {
        const { container } = render(<Badge size="sm">Small</Badge>);
        const badge = container.querySelector(".sm");
        expect(badge).toBeInTheDocument();
    });

    it("renders with lg size", () => {
        const { container } = render(<Badge size="lg">Large</Badge>);
        const badge = container.querySelector(".lg");
        expect(badge).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = render(<Badge className="custom">Badge</Badge>);
        const badge = container.firstChild;
        expect(badge).toHaveClass("custom");
    });
});
