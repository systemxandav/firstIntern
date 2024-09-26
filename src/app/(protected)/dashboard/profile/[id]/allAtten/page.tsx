import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../../components/ui/table";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import clsx from "clsx";
import { FetchAllAtten } from "../../../../../../../data/fetch-taskAndAtten";
import ActionBtn_TimeOut from "../../../../../../components/ui/profile/actionSignOutBtn";
import AttenSumary from "../../../../../../components/ui/allTask/attenTask";
import { useQuery } from "@tanstack/react-query";
import { fetchAtten, fetchTasks } from "../../../../../../../actionAPi/fetch";
import { ClipLoader } from "react-spinners";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await FetchAllAtten(params.id);

  if (!data) {
    return <div>No data found.</div>;
  }

  return <AttenSumary data={data} />;
}
