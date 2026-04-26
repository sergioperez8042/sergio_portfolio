import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import type { ChangeEvent, FormEvent } from "react";
import { useContactForm } from "./useContactForm";

vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn() },
}));

vi.mock("sonner", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

describe("useContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("estado inicial es idle y campos vacíos", () => {
    const { result } = renderHook(() => useContactForm());
    expect(result.current.status).toBe("idle");
    expect(result.current.form).toEqual({
      name: "",
      email: "",
      message: "",
    });
  });

  it("handleChange actualiza el campo correcto", () => {
    const { result } = renderHook(() => useContactForm());
    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Sergio" },
      } as ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.form.name).toBe("Sergio");
    expect(result.current.form.email).toBe("");
  });

  it("rechaza submit con campos vacíos y muestra toast.error", async () => {
    const { toast } = await import("sonner");
    const { result } = renderHook(() => useContactForm());

    const preventDefault = vi.fn();
    await act(async () => {
      await result.current.handleSubmit({
        preventDefault,
      } as unknown as FormEvent<HTMLFormElement>);
    });

    expect(preventDefault).toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalled();
    expect(result.current.status).toBe("idle");
  });

  it("rechaza submit con espacios en blanco (trim)", async () => {
    const { toast } = await import("sonner");
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "   " },
      } as ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: "email", value: "x@x.com" },
      } as ChangeEvent<HTMLInputElement>);
      result.current.handleChange({
        target: { name: "message", value: "hola" },
      } as ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as FormEvent<HTMLFormElement>);
    });

    expect(toast.error).toHaveBeenCalled();
  });
});
