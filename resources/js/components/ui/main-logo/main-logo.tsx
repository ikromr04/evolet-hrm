import { StyledLogo } from './styled';
import { AppRoute } from '../../../const';
import { useLocation } from 'react-router-dom';

type MainLogoProps = {
  className?: string;
  width?: number;
};

function MainLogo({ className, width = 120 }: MainLogoProps): JSX.Element {
  const location = useLocation();

  return (
    <StyledLogo
      className={className}
      to={AppRoute.Main}
      inactive={location.pathname === AppRoute.Main}
    >
      <svg viewBox="0 0 8134 1951" width={width}>
        <path fill="#37454c" fillRule="nonzero" d="M3677.71 58.68h149.05v32.64h-111.27v56.52h97.69v30.85h-97.69v95.83h-37.78zM3901.45 188.66h65.9l-32.36-92.78h-.89l-32.65 92.78zm13.32-129.98h40.2l83.14 215.84h-40.52l-20.28-57.12h-86.16l-20.23 57.12h-38.99l82.83-215.84zM4065.6 58.69h37.76v215.85h-37.76zM4136.01 58.68h174.75v32.64h-68.66v183.2h-37.77V91.32h-68.32zM4341.88 58.68h37.8v85.87h98.27V58.68h37.81v215.84h-37.81v-97.33h-98.27v97.33h-37.8zM4661.78 58.69h37.76v215.85h-37.76zM4753.66 58.68h39.9l98.53 159.01h.64V58.68h36v215.84h-39.93l-98.24-158.72h-.92v158.72h-35.98zM5120.65 188.66h65.91l-32.36-92.78h-.87l-32.67 92.78zm13.33-129.98h40.17l83.16 215.84h-40.54l-20.25-57.12h-86.17l-20.23 57.12h-38.99l82.84-215.84zM5380.03 58.68h37.77v85.87h98.32V58.68h37.76v215.84h-37.76v-97.33h-98.32v97.33h-37.77zM5608.85 58.68h155.43v32.64h-117.63v56.52h108.83v30.85h-108.83v63.19h119.73v32.64h-157.53zM5853.49 188.66h65.86l-32.36-92.78h-.84l-32.65 92.78zm13.28-129.98h40.2l83.17 215.84h-40.55l-20.28-57.12h-86.14l-20.22 57.12h-39l82.81-215.84zM6020.35 58.68h37.76v183.2h109.77v32.64h-147.53zM6182.98 58.68h174.72v32.64h-68.61v183.2h-37.79V91.32h-68.32zM6391.55 58.68h37.79v85.87h98.3V58.68h37.79v215.84h-37.79v-97.33h-98.3v97.33h-37.79zM6676.65 189.86l-81.03-131.18h43.86l57.12 96.74 56.2-96.74h42.34l-80.69 131.18v84.66h-37.8zM6919.71 58.68h149.04v32.64h-111.24v56.52h97.65v30.85h-97.65v95.83h-37.8zM7106.23 58.68h37.79v125.77c0 7.25.34 14.62 1.07 22.06a49.3 49.3 0 0 0 6.05 20.07c3.33 5.95 8.36 10.84 15.07 14.66 6.77 3.87 16.31 5.76 28.59 5.76 12.29 0 21.82-1.89 28.6-5.76 6.77-3.82 11.75-8.71 15.08-14.66a49.67 49.67 0 0 0 6.07-20.07 229.1 229.1 0 0 0 1.06-22.06V58.68h37.76v138.15c0 13.9-2.11 25.99-6.32 36.28a70.76 70.76 0 0 1-17.99 25.84c-7.74 6.96-17.08 12.14-27.96 15.57-10.9 3.43-22.98 5.14-36.3 5.14-13.26 0-25.33-1.7-36.27-5.14-10.88-3.43-20.22-8.61-27.96-15.57-7.75-6.96-13.74-15.57-17.97-25.84-4.24-10.3-6.38-22.39-6.38-36.28V58.68zM7316.03 58.68h174.73v32.64h-68.64v183.2h-37.77V91.32h-68.32zM7523.14 58.68h37.78v125.77c0 7.25.34 14.62 1.08 22.06a48.84 48.84 0 0 0 6.05 20.07c3.32 5.95 8.36 10.84 15.08 14.66 6.77 3.87 16.29 5.76 28.58 5.76 12.3 0 21.83-1.89 28.59-5.76 6.79-3.82 11.77-8.71 15.1-14.66a49.65 49.65 0 0 0 6.05-20.07c.74-7.44 1.07-14.81 1.07-22.06V58.68h37.79v138.15c0 13.9-2.14 25.99-6.36 36.28-4.24 10.26-10.23 18.87-17.99 25.84-7.72 6.96-17.08 12.14-27.96 15.57-10.88 3.43-22.97 5.14-36.28 5.14-13.24 0-25.33-1.7-36.27-5.14-10.88-3.43-20.23-8.61-27.96-15.57a69.96 69.96 0 0 1-17.97-25.84c-4.25-10.3-6.38-22.39-6.38-36.28V58.68zM7791.28 156.91h61.95c12.11 0 21.3-2.85 27.54-8.61 6.22-5.76 9.38-14.37 9.38-25.83 0-6.88-1.07-12.44-3.06-16.79a25.37 25.37 0 0 0-8.25-10.16 32.35 32.35 0 0 0-12.1-4.84 85.36 85.36 0 0 0-14.08-1.2h-61.38v67.43zm-37.79-98.25h103.14c23.74 0 41.55 5.13 53.44 15.42 11.92 10.26 17.86 24.57 17.86 42.91 0 10.31-1.49 18.83-4.55 25.55-2.99 6.77-6.54 12.24-10.55 16.35-4.05 4.11-8.02 7.08-11.94 8.91a88.22 88.22 0 0 1-8.61 3.62v.58c3.18.44 6.66 1.45 10.37 3.05a30.7 30.7 0 0 1 10.45 7.74c3.2 3.48 5.91 8.08 8.04 13.74 2.14 5.67 3.15 12.67 3.15 21.15 0 12.73.98 24.23 2.91 34.64 1.89 10.4 4.83 17.74 8.89 22.2h-40.54a35.45 35.45 0 0 1-4.99-15.44c-.47-5.61-.77-11.07-.77-16.3 0-9.87-.57-18.39-1.76-25.54-1.22-7.16-3.46-13.11-6.69-17.86a27.57 27.57 0 0 0-13.09-10.39c-5.54-2.23-12.68-3.35-21.34-3.35h-55.63v88.87h-37.79V58.66zM7975.98 58.68h155.44v32.64h-117.63v56.52h108.82v30.85h-108.82v63.19h119.73v32.64h-157.54z"/>
        <path fill="#212121" d="M106.51 1063.84h682.23l-61.5 106.5H106.51v419.86h719.35l-61.52 106.49H0V574.74h823.12l-61.42 106.5H106.51zM4851.73 1590.2h745.4l-61.51 106.49h-790.39V574.76h106.5zM3989.89 1615.75c45.16-1.21 92.78-5.52 136.4-17.58 35.7-9.83 68.13-26.56 93.52-53.81 63.7-68.5 69.18-199.89 69.18-288.4v-236.67c0-137.8-8.6-297.11-163.16-341.54-115.59-33.22-315.27-18.61-438.6-18.61-53.5 0-111.45 3.64-163.1 17.91-35.27 9.75-67.54 26.27-92.44 53.53-62.94 68.86-68.73 200.28-68.73 288.72v236.67c0 262.5 60.01 360.15 324.27 360.15 100.54 0 202.42 1.59 302.65-.37zm-287.79 106.38c-329.05 0-446.83-139.59-446.83-477.35v-214.6c0-198.12 26.67-381.64 234.88-451.64 66.96-22.54 141.44-29.2 211.76-29.2 91.16 0 184.77-2.06 275.63.41 195.23 5.22 338.53 63.89 393.49 272.84 17.66 66.98 23.29 138.52 23.29 207.6v214.6c0 68.28-5.43 138.87-22.44 205.22-32.67 127.13-86.89 201.77-210.66 243.04-59.39 19.75-124.04 27.18-186.33 28.76-89.99 2.27-182.49.33-272.79.33zM7126.23 574.76h1008.2l-61.5 106.49h-422.81v1015.44h-106.45V681.25h-478.94zM6048.67 1063.84h682.22l-61.47 106.5h-620.75v419.86h719.31l-61.47 106.49h-764.35V574.74h823.15l-61.44 106.5h-655.2z"/>
        <path fill="#a8cf45" d="m2179.71 1233.61 635.32-1100.48H1154.98L1231.73.11c604.61 0 1209.27-.1 1813.76-.1L2256.5 1366.64l-76.79-133.02z"/>
        <path fill="#a8cf45" d="m1621.02 575.85 640.5 1109.39 830.04-1437.73 76.81 132.98c-302.29 523.63-604.56 1047.34-906.81 1570.85L1467.45 575.85h153.57z"/>
        <path fill="#a8cf45" d="M2468.33 420.5H1190.82l830.09 1437.74-153.59-.04c-302.33-523.59-604.69-1047.19-906.95-1570.71h1584.68l-76.73 133z"/>
      </svg>
    </StyledLogo>
  );
};

export default MainLogo;
