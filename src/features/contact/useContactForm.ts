"use client";

import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm: FormState = { name: "", email: "", message: "" };

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export function useContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const { name, value } = event.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        toast.error("El formulario aún no está configurado.");
        return;
      }

      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        toast.error("Rellena todos los campos antes de enviar.");
        return;
      }

      setStatus("submitting");
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Sergio",
            from_email: form.email,
            to_email: "8042sergi@gmail.com",
            message: form.message,
          },
          { publicKey: PUBLIC_KEY },
        );
        setStatus("success");
        setForm(initialForm);
        toast.success("Mensaje enviado. Te respondo lo antes posible.");
      } catch (error) {
        console.error("EmailJS error", error);
        setStatus("error");
        toast.error("Algo salió mal. Inténtalo más tarde.");
      }
    },
    [form],
  );

  return { form, status, handleChange, handleSubmit };
}
