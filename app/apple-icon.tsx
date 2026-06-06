import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2ede3",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            border: "4px solid #1b3d2a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: "50%",
              border: "4px solid #1b3d2a",
              position: "absolute",
            }}
          />
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#1b3d2a",
              position: "relative",
              zIndex: 1,
              background: "#f2ede3",
              padding: "0 4px",
              letterSpacing: "0.05em",
            }}
          >
            P
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
