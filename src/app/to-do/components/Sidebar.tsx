"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-100 flex flex-col">
      <h2 className="text-2xl font-bold text-center p-4">
        App <span className="text-blue-700">to-do</span>
      </h2>

      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-94228.jpg?size=626&ext=jpg&ga=GA1.1.1941226552.1724416611&semt=ais_hybrid"
          alt="Avatar User"
          width={150}
          height={150}
          className="rounded-full shadow-xl"
        />
        <h4 className="mt-3 text-xl">JUANSEFDZ</h4>
      </div>
      <div className="flex flex-col m-4 p-2">
        <Link href="/to-do/list-task">Tasks list</Link>
        <Link href="/to-do/task-done">Tasks completed</Link>
        <Link href="/">Counter Page</Link>
      </div>
    </div>
  );
}
