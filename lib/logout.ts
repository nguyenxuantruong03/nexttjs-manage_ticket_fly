import axios from "axios";

// ✅ Hàm xử lý logout sạch sẽ
export const handleLogout = async () => {
  try {
    const currentPath = window.location.pathname;

    await axios.get(
      `/api/auth/logout?redirect=${encodeURIComponent(currentPath)}`,
    );

    // 👇 Client tự redirect sau khi gọi xong API
    window.location.href = `/auth/login?redirect=${encodeURIComponent(
      currentPath,
    )}`;
  } catch (error) {
    console.error(error);
  }
};
