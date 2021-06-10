import { useEffect, useState } from "react";

function useMultiSourceData(...source) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([null, false]);

  useEffect(() => {
    (async () => {
      setStatus("loading");
      try {
        const all = await Promise.all(source);
        setData([all, false]);
      } catch (error) {
        setData([null, true]);
      }
      setStatus("complete");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status: status, data: data };
}

export default useMultiSourceData;
