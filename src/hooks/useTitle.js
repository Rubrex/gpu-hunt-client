import { useEffect } from "react";

const useTitleChange = (title) => {
  useEffect(() => {
    document.title = `${title}- GPUHunt`;
  }, [title]);
};

export default useTitleChange;
