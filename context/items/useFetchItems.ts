import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { api } from "lib/api";
import { useCalendarState } from "context/calendar";
import { getCurrentItems } from "utils/time";

const fetcher = (path: string) => axios(path).then(res => res.data.items);

export default function useFetchItems() {
  const [data, setData] = useState<any>({ items: undefined });

  const { selectedPeriod } = useCalendarState();

  const { data: response } = useSWR(api.GET_ITEMS, fetcher);

  useEffect(() => {
    if (response) setData({ items: getCurrentItems(response, selectedPeriod) });
  }, [response, selectedPeriod]);

  return { data, rawData: response };
}
