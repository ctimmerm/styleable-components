import { StyleSheet } from 'aphrodite';
import deepMerge from 'deepmerge';

export function extract(styleSheet) {
  return Object.keys(styleSheet).reduce((styles, key) => {
    styles[key] = styleSheet[key]._definition;
    return styles;
  }, {});
}

export function merge(styleSheet, styleObject) {
  return StyleSheet.create(deepMerge(extract(styleSheet), styleObject));
}
