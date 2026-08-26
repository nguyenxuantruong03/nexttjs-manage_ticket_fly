import { FieldPath } from "react-hook-form";
import { PlaceFormSchema } from "../form/schema";

type PlaceFieldPath = FieldPath<PlaceFormSchema>;

export const placeFieldGroups: Record<
  string,
  readonly PlaceFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "name",
    "nativeName",
    "subtitle",
    "shortDescription",
    "description",
  ],


  // ======================================================
  // LOCATION
  // ======================================================

  location: [
    "addressId",
    "latitude",
    "longitude",
  ],


  // ======================================================
  // CATEGORY
  // ======================================================

  category: [
    "placeTypeId",
  ],


  // ======================================================
  // MEDIA
  // ======================================================

  media: [
    "thumbnail",
    "coverImage",
    "images.0",
  ],


  // ======================================================
  // SEARCH
  // ======================================================

  search: [
    "featured",
    "searchable",
    "searchPriority",
    "tagIds",
  ],


  // ======================================================
  // STATUS
  // ======================================================

  status: [
    "verified",
    "active",
  ],
};