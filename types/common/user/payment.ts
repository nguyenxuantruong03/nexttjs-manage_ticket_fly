import { User } from "@/types/users/auth/users";
import { BookingType } from "../commerce/booking-type";

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

export interface Payment {
  id: string;

  userId: string;
  user?: User;

  referenceId: string;

  bookingTypeId: string;
  bookingType?: BookingType;

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

export interface PaymentTransaction {
  id: string;

  paymentId: string;
  payment?: Payment;

  type: PaymentTransactionType;

  provider?: string | null;
  providerTransactionId?: string | null;

  amount: number;

  status: PaymentStatus;

  rawResponse?: Record<string, unknown> | null;

  createdAt: Date;
}

export interface PaymentStatusHistory {
  id: string;

  paymentId: string;
  payment?: Payment;

  fromStatus?: PaymentStatus | null;
  toStatus: PaymentStatus;

  note?: string | null;

  createdAt: Date;
}

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

export interface Invoice {
  id: string;

  paymentId: string;
  payment?: Payment;

  invoiceNumber: string;

  customerName: string;
  customerEmail?: string | null;
  customerPhone?: string | null;

  subtotal: number;
  tax: number;
  discount: number;
  total: number;

  pdfUrl?: string | null;

  createdAt: Date;
}

export interface PaymentWebhook {
  id: string;

  provider: string;
  event: string;

  payload: Record<string, unknown>;

  processed: boolean;

  createdAt: Date;
}
