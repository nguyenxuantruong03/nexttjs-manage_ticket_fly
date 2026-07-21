import { z } from "zod";

export const idSchema = z.string().cuid();

export const dateSchema = z.coerce.date();

export const optionalString = z.string().trim().optional().nullable();

export const stringArray = z.array(z.string()).default([]);
