import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LangProvider, useTranslation } from "./LangProvider";

function Probe() {
  const { lang, setLang, t } = useTranslation();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="hero-cta">{t.hero.ctaPrimary}</span>
      <button onClick={() => setLang(lang === "es" ? "en" : "es")}>
        switch
      </button>
    </div>
  );
}

describe("LangProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });

  it("default es español", () => {
    render(
      <LangProvider>
        <Probe />
      </LangProvider>,
    );
    expect(screen.getByTestId("lang").textContent).toBe("es");
    expect(screen.getByTestId("hero-cta").textContent).toBe("Ver proyectos");
  });

  it("setLang cambia idioma a inglés y persiste", async () => {
    render(
      <LangProvider>
        <Probe />
      </LangProvider>,
    );

    await act(async () => {
      await userEvent.click(screen.getByText("switch"));
    });

    expect(screen.getByTestId("lang").textContent).toBe("en");
    expect(screen.getByTestId("hero-cta").textContent).toBe("See work");
    expect(window.localStorage.getItem("sergio.lang")).toBe("en");
  });

  it("hidrata desde localStorage al montar", () => {
    window.localStorage.setItem("sergio.lang", "en");
    render(
      <LangProvider>
        <Probe />
      </LangProvider>,
    );
    expect(screen.getByTestId("lang").textContent).toBe("en");
  });

  it("actualiza <html lang> al cambiar idioma", async () => {
    render(
      <LangProvider>
        <Probe />
      </LangProvider>,
    );

    expect(document.documentElement.lang).toBe("es");

    await act(async () => {
      await userEvent.click(screen.getByText("switch"));
    });

    expect(document.documentElement.lang).toBe("en");
  });

  it("ignora valores inválidos en localStorage", () => {
    window.localStorage.setItem("sergio.lang", "fr");
    render(
      <LangProvider>
        <Probe />
      </LangProvider>,
    );
    expect(screen.getByTestId("lang").textContent).toBe("es");
  });

  it("useTranslation throws fuera del provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow();
    spy.mockRestore();
  });
});

import { vi } from "vitest";
