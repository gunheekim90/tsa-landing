interface SketchAvatarProps {
  variant: 'glenn' | 'victor' | 'lily';
  className?: string;
}

export function SketchAvatar({ variant, className = '' }: SketchAvatarProps) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {variant === 'glenn' && <GlennAvatar />}
      {variant === 'victor' && <VictorAvatar />}
      {variant === 'lily' && <LilyAvatar />}
    </svg>
  );
}

function GlennAvatar() {
  return (
    <g stroke="#a0a0a0" strokeWidth="1.5" fill="none">
      {/* Head */}
      <ellipse cx="100" cy="95" rx="42" ry="48" />
      {/* Hair - short, neat */}
      <path d="M58 85 Q60 50 80 40 Q100 32 120 40 Q140 50 142 85" />
      <path d="M62 78 Q65 55 82 45 Q100 38 118 45 Q135 55 138 78" />
      {/* Eyes */}
      <circle cx="82" cy="92" r="3" fill="#a0a0a0" />
      <circle cx="118" cy="92" r="3" fill="#a0a0a0" />
      {/* Eyebrows */}
      <path d="M73 82 Q82 78 90 82" strokeWidth="1.8" />
      <path d="M110 82 Q118 78 127 82" strokeWidth="1.8" />
      {/* Nose */}
      <path d="M100 95 Q97 108 100 112 Q103 108 100 112" />
      {/* Mouth - confident smile */}
      <path d="M88 120 Q100 130 112 120" strokeWidth="1.5" />
      {/* Glasses - green accent */}
      <rect x="70" y="84" width="24" height="18" rx="4" strokeWidth="1.4" stroke="#4ade80" />
      <rect x="106" y="84" width="24" height="18" rx="4" strokeWidth="1.4" stroke="#4ade80" />
      <path d="M94 93 L106 93" strokeWidth="1.4" stroke="#4ade80" />
      {/* Neck */}
      <path d="M90 143 L90 160" />
      <path d="M110 143 L110 160" />
      {/* Shoulders / Collar - suit */}
      <path d="M90 160 Q88 165 60 180 Q40 190 35 220 L35 260" strokeWidth="1.8" />
      <path d="M110 160 Q112 165 140 180 Q160 190 165 220 L165 260" strokeWidth="1.8" />
      {/* Suit lapel */}
      <path d="M90 160 L85 185 L100 200" strokeWidth="1.2" />
      <path d="M110 160 L115 185 L100 200" strokeWidth="1.2" />
      {/* Tie - green accent */}
      <path d="M100 165 L96 190 L100 210 L104 190 Z" strokeWidth="1.2" stroke="#4ade80" fill="#4ade80" fillOpacity="0.15" />
    </g>
  );
}

function VictorAvatar() {
  return (
    <g stroke="#a0a0a0" strokeWidth="1.5" fill="none">
      {/* Head */}
      <ellipse cx="100" cy="95" rx="42" ry="48" />
      {/* Hair - slightly messy, modern */}
      <path d="M58 82 Q62 45 85 38 Q100 34 115 38 Q138 45 142 82" />
      <path d="M60 75 Q65 50 85 42 Q98 38 105 38" />
      <path d="M70 60 Q80 48 95 44" strokeWidth="1" />
      {/* Eyes */}
      <ellipse cx="82" cy="92" rx="3.5" ry="3" fill="#a0a0a0" />
      <ellipse cx="118" cy="92" rx="3.5" ry="3" fill="#a0a0a0" />
      {/* Eyebrows - strong */}
      <path d="M72 80 Q82 76 92 80" strokeWidth="2" />
      <path d="M108 80 Q118 76 128 80" strokeWidth="2" />
      {/* Nose */}
      <path d="M100 96 Q96 108 98 114 Q100 116 102 114" />
      {/* Mouth - slight smile */}
      <path d="M90 122 Q100 128 110 122" strokeWidth="1.5" />
      {/* Headphones - blue accent */}
      <path d="M56 82 Q54 65 60 55 Q70 42 100 40 Q130 42 140 55 Q146 65 144 82" stroke="#60a5fa" strokeWidth="2" />
      <rect x="48" y="82" width="12" height="22" rx="5" stroke="#60a5fa" strokeWidth="1.5" fill="#60a5fa" fillOpacity="0.15" />
      <rect x="140" y="82" width="12" height="22" rx="5" stroke="#60a5fa" strokeWidth="1.5" fill="#60a5fa" fillOpacity="0.15" />
      {/* Neck */}
      <path d="M88 143 L88 162" />
      <path d="M112 143 L112 162" />
      {/* Shoulders - hoodie/casual */}
      <path d="M88 162 Q75 168 55 180 Q38 195 35 225 L35 260" strokeWidth="1.8" />
      <path d="M112 162 Q125 168 145 180 Q162 195 165 225 L165 260" strokeWidth="1.8" />
      {/* Hoodie neckline */}
      <path d="M88 162 Q95 175 100 178 Q105 175 112 162" strokeWidth="1.5" />
      {/* Hoodie string */}
      <path d="M92 172 L90 190" strokeWidth="1" />
      <path d="M108 172 L110 190" strokeWidth="1" />
    </g>
  );
}

function LilyAvatar() {
  return (
    <g stroke="#a0a0a0" strokeWidth="1.5" fill="none">
      {/* Head */}
      <ellipse cx="100" cy="98" rx="40" ry="46" />
      {/* Hair - long, flowing */}
      <path d="M60 90 Q55 55 75 40 Q90 30 100 28 Q110 30 125 40 Q145 55 140 90" />
      <path d="M60 90 Q55 110 52 140 Q50 165 55 190" strokeWidth="1.8" />
      <path d="M140 90 Q145 110 148 140 Q150 165 145 190" strokeWidth="1.8" />
      {/* Hair detail */}
      <path d="M65 70 Q70 55 85 45" strokeWidth="1" />
      <path d="M135 70 Q130 55 115 45" strokeWidth="1" />
      <path d="M57 120 Q55 135 54 155" strokeWidth="1" />
      <path d="M143 120 Q145 135 146 155" strokeWidth="1" />
      {/* Eyes - slightly larger, expressive */}
      <ellipse cx="84" cy="95" rx="4" ry="3.5" fill="#a0a0a0" />
      <ellipse cx="116" cy="95" rx="4" ry="3.5" fill="#a0a0a0" />
      {/* Eyelashes */}
      <path d="M78 92 L76 89" strokeWidth="1" />
      <path d="M80 90 L79 87" strokeWidth="1" />
      <path d="M120 90 L121 87" strokeWidth="1" />
      <path d="M122 92 L124 89" strokeWidth="1" />
      {/* Eyebrows - gentle arch */}
      <path d="M76 84 Q84 80 92 84" strokeWidth="1.3" />
      <path d="M108 84 Q116 80 124 84" strokeWidth="1.3" />
      {/* Nose - small */}
      <path d="M100 98 Q97 108 100 112" />
      {/* Mouth - gentle smile */}
      <path d="M90 120 Q100 127 110 120" strokeWidth="1.3" />
      {/* Neck */}
      <path d="M90 144 L90 162" />
      <path d="M110 144 L110 162" />
      {/* Shoulders - blouse */}
      <path d="M90 162 Q78 168 58 180 Q42 192 38 220 L38 260" strokeWidth="1.8" />
      <path d="M110 162 Q122 168 142 180 Q158 192 162 220 L162 260" strokeWidth="1.8" />
      {/* Collar */}
      <path d="M90 162 Q96 172 100 175 Q104 172 110 162" strokeWidth="1.3" />
      {/* Pencil in chest pocket - pink accent */}
      <line x1="72" y1="200" x2="65" y2="172" stroke="#f472b6" strokeWidth="2.5" />
      <line x1="65" y1="172" x2="64" y2="168" stroke="#fbbf24" strokeWidth="2" />
      <polygon points="64,168 62.5,163 65.5,163" fill="#f472b6" stroke="#f472b6" strokeWidth="0.5" />
    </g>
  );
}
