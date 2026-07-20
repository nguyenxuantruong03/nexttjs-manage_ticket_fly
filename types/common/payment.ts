// payment.types.ts

import { Address } from "../bookings/cities/address";
import { User } from "../bookings/auth/users";

export enum PaymentStatus {
  pending = "pending",
  processing = "processing",
  paid = "paid",
  failed = "failed",
  cancelled = "cancelled",
  refunded = "refunded",
  partially_refunded = "partially_refunded",
}

export enum PaymentMethodType {
  credit_card = "credit_card",
  debit_card = "debit_card",
  bank_transfer = "bank_transfer",
  e_wallet = "e_wallet",
  cash = "cash",
  paypal = "paypal",
  apple_pay = "apple_pay",
  google_pay = "google_pay",
  crypto = "crypto",
  other = "other",
}

export enum PaymentTransactionType {
  payment = "payment",
  refund = "refund",
  partial_refund = "partial_refund",
}

export enum RefundStatus {
  pending = "pending",
  processing = "processing",
  completed = "completed",
  rejected = "rejected",
  failed = "failed",
}

export enum PaymentReferenceType {
  HOTEL_BOOKING = "HOTEL_BOOKING",
  BUS_BOOKING = "BUS_BOOKING",
  CAR_RENTAL_BOOKING = "CAR_RENTAL_BOOKING",
  TRANSFER_BOOKING = "TRANSFER_BOOKING",
  FLIGHT_BOOKING = "FLIGHT_BOOKING",
  YACHT_BOOKING = "YACHT_BOOKING",
}

// ======================================================
// PAYMENT
// ======================================================

export interface Payment {
  id: string;

  userId: string;
  user?: User;

  referenceId: string;
  referenceType: PaymentReferenceType;

  amount: number;

  status: PaymentStatus;

  method?: PaymentMethodType | null;

  transactions?: PaymentTransaction[];

  refunds?: Refund[];

  invoices?: Invoice[];

  statusHistory?: PaymentStatusHistory[];

  createdAt: Date;

  updatedAt: Date;
}

// ======================================================
// PAYMENT TRANSACTION
// ======================================================

export interface PaymentTransaction {
  id: string;

  paymentId: string;

  payment?: Payment;

  type: PaymentTransactionType;

  provider?: string | null;

  providerTransactionId?: string | null;

  amount: number;

  status: PaymentStatus;

  rawResponse?: Record<string, any> | null;

  createdAt: Date;
}

// ======================================================
// PAYMENT STATUS HISTORY
// ======================================================

export interface PaymentStatusHistory {
  id: string;

  paymentId: string;

  payment?: Payment;

  fromStatus?: PaymentStatus | null;

  toStatus: PaymentStatus;

  note?: string | null;

  createdAt: Date;
}

// ======================================================
// REFUND
// ======================================================

export interface Refund {
  id: string;

  paymentId: string;

  payment?: Payment;

  amount: number;

  status: RefundStatus;

  reason?: string | null;

  providerRefundId?: string | null;

  createdAt: Date;

  updatedAt: Date;
}

// ======================================================
// INVOICE
// ======================================================

export interface Invoice {
  id: string;

  paymentId: string;

  payment?: Payment;

  invoiceNumber: string;

  customerName: string;

  customerEmail?: string | null;

  customerPhone?: string | null;

  addressId?: string | null;

  address?: Address | null;

  subtotal: number;

  tax: number;

  discount: number;

  total: number;

  pdfUrl?: string | null;

  createdAt: Date;
}

// ======================================================
// PAYMENT WEBHOOK
// ======================================================

export interface PaymentWebhook {
  id: string;

  provider: string;

  event: string;

  payload: Record<string, any>;

  processed: boolean;

  createdAt: Date;
}

// ======================================================
// UI TYPES
// ======================================================

export interface PaymentUI {
  id: string;

  reference: {
    id: string;
    type: PaymentReferenceType;
  };

  amount: {
    value: number;
  };

  status: PaymentStatus;

  method?: PaymentMethodType;

  transactions: PaymentTransactionUI[];

  refunds: RefundUI[];

  invoice?: InvoiceUI;

  createdAt: string;

  updatedAt: string;
}

export interface PaymentTransactionUI {
  id: string;

  type: PaymentTransactionType;

  provider?: string;

  amount: number;

  status: PaymentStatus;

  createdAt: string;
}

export interface RefundUI {
  id: string;

  amount: number;

  status: RefundStatus;

  reason?: string;

  createdAt: string;
}

export interface InvoiceUI {
  id: string;

  invoiceNumber: string;

  customer: {
    name: string;

    email?: string;

    phone?: string;
  };

  amount: {
    subtotal: number;

    tax: number;

    discount: number;

    total: number;

  };

  pdfUrl?: string;

  createdAt: string;
}

// ======================================================
// DTO CREATE
// ======================================================

export interface CreatePaymentInput {
  userId: string;

  referenceId: string;

  referenceType: PaymentReferenceType;

  amount: number;

  method?: PaymentMethodType;
}

export interface UpdatePaymentStatusInput {
  status: PaymentStatus;

  note?: string;
}

export interface CreatePaymentTransactionInput {
  paymentId: string;

  type: PaymentTransactionType;

  provider?: string;

  providerTransactionId?: string;

  amount: number;

  status: PaymentStatus;

  rawResponse?: Record<string, any>;
}

export interface CreateRefundInput {
  paymentId: string;

  amount: number;

  reason?: string;

  providerRefundId?: string;
}

export interface CreateInvoiceInput {
  paymentId: string;

  invoiceNumber: string;

  customerName: string;

  customerEmail?: string;

  customerPhone?: string;

  addressId?: string;

  subtotal: number;

  tax?: number;

  discount?: number;

  total: number;

  pdfUrl?: string;
}
