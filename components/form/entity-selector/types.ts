// ======================================================
// ENTITY OPTION
// ======================================================

export interface EntityOption<T = unknown> {
  /**
   * Value lưu vào react-hook-form
   */
  value: string;

  /**
   * Text hiển thị
   */
  label: string;

  /**
   * Text phụ
   */
  description?: string;

  /**
   * Original entity data
   */
  data?: T;
}

// ======================================================
// CREATE RESULT
// ======================================================

export interface EntityCreateResult<T = unknown> {
  /**
   * ID entity mới tạo
   */
  value: string;

  /**
   * Label hiển thị sau khi create
   */
  label: string;

  /**
   * Description
   */
  description?: string;

  /**
   * Data trả về từ API
   */
  data: T;
}

// ======================================================
// CREATE DIALOG PROPS
// ======================================================

export interface EntityCreateDialogProps<T = unknown> {
  /**
   * Dialog open state
   */
  open: boolean;

  /**
   * Control dialog
   */
  onOpenChange: (open: boolean) => void;

  /**
   * Keyword người dùng nhập trong search
   *
   * Ví dụ:
   * "Tan Son Nhat"
   */
  defaultKeyword?: string;

  /**
   * Callback sau khi create thành công
   */
  onCreated: (result: EntityCreateResult<T>) => void;
}

// ======================================================
// ENTITY SELECTOR PROPS
// ======================================================
export interface EntitySelectorProps<TEntity> {
  value: string;

  onChange: (value: string) => void;

  options: EntityOption<TEntity>[];

  placeholder?: string;

  searchPlaceholder?: string;

  emptyText?: string;

  createText?: string;

  disabled?: boolean;

  loading?: boolean;

  enableCreate?: boolean;

  portalContainer?: HTMLElement | null;

  renderCreateDialog?: (
    props: EntityCreateDialogProps<TEntity>,
  ) => React.ReactNode;

  onCreated?: (result: EntityCreateResult<TEntity>) => void;

  className?: string;
}

export interface EntityMultiSelectorProps<TEntity> {
  value: string[];

  onChange: (value: string[]) => void;

  options: EntityOption<TEntity>[];

  placeholder?: string;

  searchPlaceholder?: string;

  emptyText?: string;

  createText?: string;

  disabled?: boolean;

  loading?: boolean;

  enableCreate?: boolean;

  portalContainer?: HTMLElement | null;

  renderCreateDialog?: (
    props: EntityCreateDialogProps<TEntity>,
  ) => React.ReactNode;

  onCreated?: (result: EntityCreateResult<TEntity>) => void;

  className?: string;
}
