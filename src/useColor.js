import * as React from 'react';

const {useEffect, useState} = React;

export default function useColor(color) {
  const [bgState, setBgState] = useState({
    bg: color.bg,
    updaterId: undefined
  });

  useEffect(
    () =>
      color.subscribe(updaterId =>
        setBgState({bg: color.bg, updaterId})
      ),
    [color]
  );

  return bgState;
}