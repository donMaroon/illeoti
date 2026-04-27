import axios from "axios";

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error) && error.response?.data) {
    const data = error.response.data as {
      message?: string | string[];
    };
    if (Array.isArray(data.message)) {
      return data.message.join(", ");
    }
    if (typeof data.message === "string" && data.message.length > 0) {
      return data.message;
    }
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return "Something went wrong. Please try again.";
}
