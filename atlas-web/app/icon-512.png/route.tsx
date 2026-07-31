import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          color: "#3b82f6",
          fontSize: 320,
          fontWeight: 700,
        }}
      >
        Ψ
      </div>
    ),
    { width: 512, height: 512 }
  );
}
