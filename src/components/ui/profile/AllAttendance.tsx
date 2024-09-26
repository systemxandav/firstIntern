"use client";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { motion } from "framer-motion";
import { Button } from "../button";
import TogleStartTask from "./togleShowStartTask";
import Link from "next/link";
import { MdNotes } from "react-icons/md";

interface Model {
  id: string;
}

export default function AllAttendance({ id }: Model) {
  return (
    <motion.div
      className="group"
      whileHover={{
        scale: 1.1,
      }}
    >
      <Link
        href={`/dashboard/profile/${id}/allAtten`}
        className="flex flex-col items-center justify-center"
      >
        <motion.div className="h-60 w-60 rounded-lg bg-black text-white">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.5,
              },
            }}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            All Attendance
            <MdNotes size={100} />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
