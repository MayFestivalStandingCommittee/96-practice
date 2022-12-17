import { DateTime } from "luxon";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const TIME_DIFF_KEY = "time-diff";
const zone = "Asia/Tokyo";

const useVirtualTime = () => {
  const diff = useState(TIME_DIFF_KEY, () => 0);
  const calcTime = () => {
    return Date.now() + diff.value;
  };
  const internalTime = useState("internal", () => calcTime());
  const time = computed(() => {
    return DateTime.fromMillis(internalTime.value, { zone });
  }); //
  const travel = (sec: number, min: number, hour: number, day: number, mon: number) => {
    diff.value += sec * SECOND + min * MINUTE + hour * HOUR + day * DAY + mon * MONTH;
  }; //日時をいじる
  onMounted(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.setInterval(() => {
      internalTime.value = calcTime();
    });
  });
  return {
    time,
    travel,
    zone
  };
};
