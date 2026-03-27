import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#06091F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          gap: '4px',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 'bold',
            color: '#FFA500',
            lineHeight: 1,
            letterSpacing: '-2px',
          }}
        >
          3PT
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#ffffff',
            letterSpacing: '1px',
          }}
        >
          TIGER
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

