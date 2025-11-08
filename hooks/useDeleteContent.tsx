import axios from "axios";
import { useState } from "react";

interface ErrorProps {
  success: boolean;
  message: string;
}

interface DataProps {
  isDelete?: boolean;
  message?: string;
}

interface userDeleteContentProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export default function useDeleteContent(options?: userDeleteContentProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorProps>({
    success: false,
    message: "",
  });
  const [isDelete, setIsDelete] = useState<DataProps>({
    isDelete: false,
    message: "",
  });

  const deleteContent = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/deleteContent`, {
        data: {
          id: id,
        },
      });

      if (response.status === 200) {
        setIsDelete({
          isDelete: true,
          message: response.data.message || "Content deleted successfully",
        });
        setLoading(false);
        options?.onSuccess?.();
        return;
      }
    } catch (error) {
      setError({
        success: false,
        message: "Something went wrong",
      });
      options?.onError?.();
      return;
    } finally {
      setLoading(false);
      options?.onSuccess?.();
    }
  };

  return { isDelete, loading, error, deleteContent };
}
