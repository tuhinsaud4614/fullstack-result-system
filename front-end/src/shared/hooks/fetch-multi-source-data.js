import { useEffect, useState } from "react";

function useMultiSourceData(...source) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([null, null]);

  useEffect(() => {
    (async () => {
      //   const classes = new Promise((res, rej) => {
      //     setTimeout(() => {
      //       res([
      //         { name: "Red", value: "red" },
      //         { name: "Green", value: "green" },
      //       ]);
      //     }, 3000);
      //   });

      //   const teachers = new Promise((res, rej) => {
      //     setTimeout(() => {
      //       res([
      //         { name: "Yellow", value: "yellow" },
      //         { name: "Blue", value: "blue" },
      //       ]);
      //     }, 2000);
      //   });

      setStatus("loading");
      try {
        const all = await Promise.all(source);
        setData([all, null]);
      } catch (error) {
        setData([null, error]);
      }
      setStatus("complete");
    })();
  }, []);

  return { status: status, data: data };
}

export default useMultiSourceData;
