'use client'

import { SVGProps } from 'react'

export function ToriiGate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Top beam (Kasagi) */}
      <rect
        x="80"
        y="140"
        width="240"
        height="20"
        fill="url(#gateGradient)"
        rx="4"
      />

      {/* Left vertical post (Hashira) */}
      <rect
        x="95"
        y="140"
        width="25"
        height="260"
        fill="url(#postGradient)"
        rx="3"
      />

      {/* Right vertical post (Hashira) */}
      <rect
        x="280"
        y="140"
        width="25"
        height="260"
        fill="url(#postGradient)"
        rx="3"
      />

      {/* Bottom crossbeam (Nuki) */}
      <rect
        x="85"
        y="340"
        width="230"
        height="16"
        fill="url(#gateGradient)"
        rx="3"
      />

      {/* Left support detail */}
      <line
        x1="100"
        y1="320"
        x2="100"
        y2="360"
        stroke="url(#detailGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Right support detail */}
      <line
        x1="300"
        y1="320"
        x2="300"
        y2="360"
        stroke="url(#detailGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Roof lines (Munegi) - decorative */}
      <path
        d="M 80 135 Q 200 100 320 135"
        stroke="url(#roofGradient)"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="gateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#2d5a8c" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1a2f4a" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="postGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a2f4a" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#2d5a8c" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a2f4a" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="detailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3d7ab5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.6" />
        </linearGradient>

        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2d5a8c" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#4a8fd4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2d5a8c" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
