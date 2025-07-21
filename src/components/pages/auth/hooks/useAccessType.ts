import { AccessTypes } from '@/models/enums';
import React from 'react';

export default function useAccessType() {
  const [mode, setMode] = React.useState<AccessTypes>(AccessTypes.login);

  return { mode, setMode };
}
