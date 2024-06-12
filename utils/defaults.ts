import { AvaliableBreakpoints, MediaBreakpoints } from '@/types';

export const defaultMediaBreakpoints: MediaBreakpoints = {
  SM: { id: AvaliableBreakpoints.SM, minWidth: 640, offset: 'center' },
  MD: { id: AvaliableBreakpoints.MD, minWidth: 768, offset: 100 },
  LG: { id: AvaliableBreakpoints.LG, minWidth: 1024, offset: 100 },
};
