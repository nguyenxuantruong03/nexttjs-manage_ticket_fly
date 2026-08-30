"use client";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { AxiosError } from "axios";

import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

type ServerErrors = Record<string, string | string[]>;

function getErrorMessage(
  error: unknown,
  fallback = "Something went wrong",
): string {
  if (error instanceof AxiosError) {
    const data = error.response?.data;

    // Server trả string trực tiếp
    if (typeof data === "string") {
      return data;
    }

    // message là string
    if (typeof data?.message === "string") {
      return data.message;
    }

    // message là array
    if (Array.isArray(data?.message)) {
      return data.message.filter(Boolean).map(String).join(", ");
    }

    // Nếu không có message thì lấy errors
    if (data?.errors && typeof data.errors === "object") {
      const messages = Object.values(data.errors as ServerErrors).flatMap(
        (value) => (Array.isArray(value) ? value : [value]),
      );

      if (messages.length > 0) {
        return messages.filter(Boolean).map(String).join(", ");
      }
    }

    // Axios error message
    if (error.message) {
      return error.message;
    }
  }

  // Error thông thường
  if (error instanceof Error) {
    return error.message || fallback;
  }

  return fallback;
}

function getFieldErrors(error: unknown): Record<string, string> | null {
  if (!(error instanceof AxiosError)) {
    return null;
  }

  const errors = error.response?.data?.errors;

  if (!errors || typeof errors !== "object") {
    return null;
  }

  const result: Record<string, string> = {};

  Object.entries(errors as ServerErrors).forEach(([field, messages]) => {
    if (Array.isArray(messages)) {
      result[field] = messages.filter(Boolean).map(String).join(", ");
    } else {
      result[field] = String(messages);
    }
  });

  return Object.keys(result).length > 0 ? result : null;
}

export function useSubmit() {
  const router = useRouter();

  const submit = async <T, TFieldValues extends FieldValues = FieldValues>({
    mutation,
    success,
    redirect,
    onSuccess,
    form,
  }: {
    mutation: Promise<T>;
    success: string;
    redirect?: string;
    onSuccess?: (data: T) => void | Promise<void>;
    form?: UseFormReturn<TFieldValues>;
  }): Promise<T> => {
    try {
      const response = await toast.promise(mutation, {
        loading: "Saving...",
        success,
        error: (error) => getErrorMessage(error),
      });

      if (onSuccess) {
        await onSuccess(response);
      }

      if (redirect) {
        router.push(redirect);
      }

      return response;
    } catch (error) {
      if (form) {
        const fieldErrors = getFieldErrors(error);

        if (fieldErrors) {
          Object.entries(fieldErrors).forEach(([field, message]) => {
            form.setError(field as Path<TFieldValues>, {
              type: "server",
              message,
            });
          });
        }
      }

      throw error;
    }
  };

  return submit;
}
