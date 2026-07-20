"use client";

import axios from "axios";

export const clientHttp = axios.create({
  baseURL: "/api/proxy",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});