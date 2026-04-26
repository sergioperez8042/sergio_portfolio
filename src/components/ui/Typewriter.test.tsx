import { describe, expect, it, vi } from "vitest";
import { render, act } from "@testing-library/react";
import { Typewriter } from "./Typewriter";

describe("Typewriter", () => {
  it("renderiza sin crashear con array vacío", () => {
    const { container } = render(<Typewriter words={[]} />);
    expect(container.querySelector("span")).toBeInTheDocument();
  });

  it("escribe la primera palabra carácter a carácter", () => {
    vi.useFakeTimers();
    const { container } = render(
      <Typewriter words={["Hola"]} typeSpeed={10} />,
    );

    act(() => {
      vi.advanceTimersByTime(15);
    });
    expect(container.textContent).toContain("H");

    act(() => {
      vi.advanceTimersByTime(15);
    });
    expect(container.textContent).toContain("Ho");

    act(() => {
      vi.advanceTimersByTime(80);
    });
    expect(container.textContent).toContain("Hola");

    vi.useRealTimers();
  });

  it("muestra el caret blink", () => {
    const { container } = render(<Typewriter words={["x"]} />);
    expect(container.querySelector(".typewriter-caret")).toBeInTheDocument();
  });

  it("aplica className al wrapper", () => {
    const { container } = render(
      <Typewriter words={["a"]} className="custom-class" />,
    );
    expect(container.querySelector("span.custom-class")).toBeInTheDocument();
  });

  it("snapshot estructural", () => {
    const { container } = render(<Typewriter words={["test"]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
