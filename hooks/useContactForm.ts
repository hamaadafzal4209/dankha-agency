import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { toast } from "sonner";

type SubmitStatus = "idle" | "success" | "error";

export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitStatus("success");
      reset();
      toast.success("Message sent successfully! We'll get back to you soon.");
    } catch (error) {
      setSubmitStatus("error");
      const errorMsg = error instanceof Error ? error.message : "Something went wrong";
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    submitStatus,
    errorMessage,
  };
}
