"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { StarRatingFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Star Rating"
      description="Basic star rating information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<StarRatingFormSchema>
          name="name"
          label="Name"
          placeholder="5-Star Hotel"
        />

        <FormInput<StarRatingFormSchema>
          name="star"
          label="Star Rating"
          type="number"
          placeholder="5"
        />

        <div className="md:col-span-2">
          <FormInput<StarRatingFormSchema>
            name="description"
            label="Description"
            placeholder="Luxury hotels offering premium facilities and services."
          />
        </div>
      </div>
    </FormSection>
  );
}