import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const wrap = (path: React.ReactNode) =>
  function Icon({ size = 22, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {path}
      </svg>
    );
  };

export const HeartHandIcon = wrap(
  <>
    <path d="M3.5 12.5c0-2.2 1.6-4 3.7-4 1.3 0 2.4.7 3.1 1.7.7-1 1.8-1.7 3.1-1.7 2.1 0 3.7 1.8 3.7 4 0 4.6-6.8 8-6.8 8s-6.8-3.4-6.8-8Z" />
    <path d="M14.5 14.5h3.2c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3h-2.4" />
  </>
);

export const ShieldCheckIcon = wrap(
  <>
    <path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6L12 3Z" />
    <path d="m9.2 12 2 2 3.6-4" />
  </>
);

export const ClockIcon = wrap(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>
);

export const StarIcon = wrap(
  <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
);

export const CheckIcon = wrap(<path d="m4 12 5 5L20 6" />);

export const ArrowRightIcon = wrap(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>
);

export const PhoneIcon = wrap(
  <path d="M5 4h3l1.5 4-2 1c.8 2.5 2.5 4.2 5 5l1-2 4 1.5V17a2 2 0 0 1-2 2C9 19 5 15 5 7a2 2 0 0 1 2-2H5Z" />
);

export const WhatsAppIcon = wrap(
  <>
    <path d="M20.5 12a8.5 8.5 0 1 1-15.7-4.6L4 20l4.6-.8A8.5 8.5 0 0 0 20.5 12Z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5L14 13l-.7.7c-1.2-.3-2.2-1.3-2.5-2.5l.7-.7L11 9 9.5 8 9 9.5Z" />
  </>
);

export const MenuIcon = wrap(
  <>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </>
);

export const CloseIcon = wrap(
  <>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </>
);

export const SparklesIcon = wrap(
  <>
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
    <path d="m7 7 2 2M15 15l2 2M7 17l2-2M15 9l2-2" />
  </>
);

export const PinIcon = wrap(
  <>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </>
);

export const PlayIcon = wrap(
  <path d="M7 5v14l12-7L7 5Z" />
);

/* ─── Service-specific friendly icons ─── */

export const ElderIcon = wrap(
  <>
    <circle cx="12" cy="7" r="3" />
    <path d="M6 21c.6-3.5 3-5 6-5s5.4 1.5 6 5" />
    <path d="M9 11c-.5 1.5-2 2-2 4" />
  </>
);

export const PatientIcon = wrap(
  <>
    <path d="M4 18V8h16v10" />
    <path d="M4 14h16" />
    <path d="M9 8V5h6v3" />
  </>
);

export const LiveInIcon = wrap(
  <>
    <path d="M3 11 12 4l9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-5h4v5" />
  </>
);

export const PostSurgeryIcon = wrap(
  <>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
    <circle cx="12" cy="12" r="9" />
  </>
);

export const DementiaIcon = wrap(
  <>
    <path d="M9 4c-2 0-3.5 1.5-3.5 3.5 0 1 .4 1.6 0 2.5C5 11 4 11.8 4 13.5 4 15.5 5.5 17 7.5 17H10" />
    <path d="M14 4c2 0 3.5 1.5 3.5 3.5 0 1-.4 1.6 0 2.5.5 1 1.5 1.8 1.5 3.5 0 2-1.5 3.5-3.5 3.5H14" />
    <path d="M9 17v3M14 17v3" />
  </>
);

export const BedriddenIcon = wrap(
  <>
    <path d="M3 12h18v6H3z" />
    <path d="M3 12V8h6c2 0 3 1.5 3 4" />
    <circle cx="7" cy="9" r="1.5" />
  </>
);

export const NightIcon = wrap(
  <path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z" />
);

export const FemaleIcon = wrap(
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M12 12v9M9 18h6" />
  </>
);
