export function IconAdd() {
  return (
    <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 4 A28 28 0 1 1 32 60 A28 28 0 1 1 32 4 M20 32 L44 32 M32 20 L32 44"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
    >
      <rect
        x="0"
        y="0"
        width="56"
        height="56"
        rx="28"
        fill="none"
        stroke="#888"
        strokeWidth="1.5"
      />
      <path
        d="M17,17 L39,39 M39,17 L17,39"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconSave({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" />
      <polyline
        points="13,24 21,32 35,16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconEditar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20 L8 19 L19 8 Q21 6 19 4 Q17 2 15 4 L4 15 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 4 L19 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconExcluir() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <polyline
        points="3,6 5,6 21,6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6 V4 Q8 3 9 3 L15 3 Q16 3 16 4 V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 6 L18 20 Q18 21 17 21 L7 21 Q6 21 6 20 L5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="11"
        x2="10"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="14"
        y1="11"
        x2="14"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
