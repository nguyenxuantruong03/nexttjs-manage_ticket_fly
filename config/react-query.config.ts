// ======================================================
// REACT QUERY DEFAULT CONFIG
// ======================================================
//
// Config mặc định dùng chung cho các CRUD hooks.
//
// Mục tiêu:
// - Ưu tiên tốc độ UI
// - Giảm API request dư thừa
// - Tận dụng cache
// - Tránh refetch không cần thiết
// - UX ổn định khi chuyển page/tab
//
// Chỉ override tại từng hook nếu module có requirement
// khác biệt rõ ràng.
// ======================================================

// ======================================================
// CACHE
// ======================================================

/**
 * Data được xem là fresh trong 5 phút.
 *
 * Trong thời gian này React Query ưu tiên cache
 * thay vì gọi API lại.
 */
export const DEFAULT_QUERY_STALE_TIME = 1000 * 60 * 5;

/**
 * Giữ inactive cache trong 10 phút.
 *
 * Giúp user quay lại list/detail nhanh hơn.
 */
export const DEFAULT_QUERY_GC_TIME = 1000 * 60 * 10;

// ======================================================
// REFETCH
// ======================================================

/**
 * Không refetch chỉ vì user chuyển tab rồi quay lại.
 *
 * Phù hợp với catalog/master CRUD.
 *
 * Giảm request dư thừa và tránh UI loading lại
 * không cần thiết.
 */
export const DEFAULT_REFETCH_ON_WINDOW_FOCUS = false;

/**
 * Khi component mount lại:
 *
 * - Data fresh -> dùng cache
 * - Data stale -> fetch lại
 */
export const DEFAULT_REFETCH_ON_MOUNT = true;

/**
 * Khi mạng kết nối trở lại:
 * -> cho phép fetch lại data.
 */
export const DEFAULT_REFETCH_ON_RECONNECT = true;

// ======================================================
// RETRY
// ======================================================

/**
 * Retry tối đa 1 lần.
 *
 * Không retry quá nhiều để tránh:
 * - chờ lâu khi backend đang lỗi
 * - tạo nhiều request dư thừa
 * - UX bị treo lâu
 */
export const DEFAULT_QUERY_RETRY = 1;

// ======================================================
// PAGINATION
// ======================================================

export const DEFAULT_PAGE = 1;

export const DEFAULT_LIMIT = 20;

// ======================================================
// BASE QUERY OPTIONS
// ======================================================
//
// Dùng cho query thông thường.
//
// Không đưa các option mang tính use-case vào đây như:
// - placeholderData
// - select
// - initialData
// - refetchInterval
// - meta
//
// Các option đó chỉ thêm khi thực sự cần.
// ======================================================

export const DEFAULT_QUERY_OPTIONS = {
  staleTime: DEFAULT_QUERY_STALE_TIME,
  gcTime: DEFAULT_QUERY_GC_TIME,

  refetchOnWindowFocus: DEFAULT_REFETCH_ON_WINDOW_FOCUS,

  refetchOnMount: DEFAULT_REFETCH_ON_MOUNT,

  refetchOnReconnect: DEFAULT_REFETCH_ON_RECONNECT,

  retry: DEFAULT_QUERY_RETRY,
} as const;
