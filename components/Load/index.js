import {
  LoadElement,
  LoadHello,
  LoadingPercentage,
  LoadLoading,
} from "./LoadElements";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { triggerLoad } from "../../store";
export default function Load() {
  const [percentage, setPercentage] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [zIndex, setZindex] = useState(5000);

  const intervalId = useRef(0);

  const dispatch = useDispatch();

  useEffect(() => {
    intervalId = setInterval(() => {
      percentage = percentage + 1;
      setPercentage(percentage);
      if (percentage > 99) {
        clearInterval(intervalId);
      }
    }, 20);
  }, []);

  useEffect(() => {
    if (percentage < 100) return;
    setOpacity(0);
    dispatch(triggerLoad());
    setTimeout(() => {
      setZindex(-1000);
    }, 100);
  }, [percentage]);

  return (
    <LoadElement
      style={{
        opacity: opacity,
        zIndex: `${zIndex}`,
      }}
    >
      <LoadHello>
        <LoadingPercentage>{`${percentage}%`}</LoadingPercentage>
        <LoadLoading></LoadLoading>
      </LoadHello>
    </LoadElement>
  );
}
