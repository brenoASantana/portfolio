import { render } from "@testing-library/react";
import Skeleton from "../../components/ui/Skeleton";

describe("Skeleton Component", () => {
    it("renders skeleton with default text variant", () => {
        const { container } = render(<Skeleton />);
        const skeleton = container.querySelector(".skeleton");
        expect(skeleton).toBeInTheDocument();
    });

    it("renders skeleton with circle variant", () => {
        const { container } = render(<Skeleton variant="circle" />);
        const skeleton = container.querySelector(".circle");
        expect(skeleton).toBeInTheDocument();
    });

    it("renders skeleton with rect variant", () => {
        const { container } = render(<Skeleton variant="rect" />);
        const skeleton = container.querySelector(".rect");
        expect(skeleton).toBeInTheDocument();
    });

    it("renders skeleton with card variant", () => {
        const { container } = render(<Skeleton variant="card" />);
        const skeleton = container.querySelector(".card");
        expect(skeleton).toBeInTheDocument();
    });

    it("renders multiple skeletons with count prop", () => {
        const { container } = render(<Skeleton count={3} />);
        const skeletons = container.querySelectorAll(".skeleton");
        expect(skeletons).toHaveLength(3);
    });

    it("applies custom width", () => {
        const { container } = render(<Skeleton width={200} />);
        const skeleton = container.querySelector(".skeleton");
        expect(skeleton).toHaveStyle("width: 200px");
    });

    it("applies custom height", () => {
        const { container } = render(<Skeleton height={100} />);
        const skeleton = container.querySelector(".skeleton");
        expect(skeleton).toHaveStyle("height: 100px");
    });

    it("applies custom width and height strings", () => {
        const { container } = render(<Skeleton width="50%" height="2rem" />);
        const skeleton = container.querySelector(".skeleton");
        expect(skeleton).toHaveStyle("width: 50%");
        expect(skeleton).toHaveStyle("height: 2rem");
    });

    it("circle variant has border-radius 50%", () => {
        const { container } = render(<Skeleton variant="circle" />);
        const skeleton = container.querySelector(".skeleton");
        expect(skeleton).toHaveStyle("border-radius: 50%");
    });
});
