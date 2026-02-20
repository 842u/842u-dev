import { AvailableBreakpoints, MediaBreakpoints } from '@/types';

export const defaultMediaBreakpoints: MediaBreakpoints = {
  SM: { id: AvailableBreakpoints.SM, minWidth: 640, offset: 'center' },
  MD: { id: AvailableBreakpoints.MD, minWidth: 768, offset: 100 },
  LG: { id: AvailableBreakpoints.LG, minWidth: 1024, offset: 100 },
};
