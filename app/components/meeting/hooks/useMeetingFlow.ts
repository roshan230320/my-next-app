"use client";

import { useState } from "react";
import {
  MeetingFormData,
  initialMeetingForm,
} from "../MeetingData";

export type MeetingStep =
  | "question"
  | "form"
  | "success";

export default function useMeetingFlow() {
  const [step, setStep] =
    useState<MeetingStep>("question");

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState<MeetingFormData>(initialMeetingForm);

  const startForm = () => {
    setStep("form");
  };

  const updateField = <
    K extends keyof MeetingFormData
  >(
    key: K,
    value: MeetingFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const submit = async () => {
    setLoading(true);

    try {

      console.log("Sending...", formData);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setStep("success");

    } catch (error) {

      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to send email."
      );

    } finally {

      setLoading(false);

    }
  };

  return {
    step,
    loading,
    formData,
    startForm,
    updateField,
    submit,
  };
}