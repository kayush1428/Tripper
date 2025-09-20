"use client";
import dynamic from "next/dynamic";
const MapView = dynamic(() => import("./map-view"), { ssr: false });

export default function MapClientWrapper() {
  return <MapView />;
}