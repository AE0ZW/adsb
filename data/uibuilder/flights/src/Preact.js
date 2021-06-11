import * as _Preact from 'https://cdn.skypack.dev/preact@10.4.7';
import * as _Hooks from 'https://cdn.skypack.dev/preact@10.4.7/hooks';
import htm from 'https://cdn.skypack.dev/htm@3.0.4';

export const render = _Preact.render;
export const html = htm.bind(_Preact.h);

export const useLayoutEffect = _Hooks.useLayoutEffect;
export const useEffect = _Hooks.useEffect;
export const useState = _Hooks.useState;
export const useRef = _Hooks.useRef;

export default _Preact;