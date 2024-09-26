"use server";
import { db } from "../src/lib/db";

export async function FetchRequestLeave(id: string) {
  try {
    const data = await db.attendance.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        reason: true,
        tel: true,
        type: true,
        typeleave: true,
        dateIn: true,
        dateOut: true,
        statusLeave: true,
        teamMember: {
          select: {
            user: {
              select: {
                username: true,
                first_name: true,
                last_name: true,
              },
            },
          },
        },
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
}
