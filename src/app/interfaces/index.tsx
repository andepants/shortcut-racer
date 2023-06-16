export interface KeyboardShortcuts {
  shortcuts: Array<string>,
  descriptions: Array<string>,
}

export interface KeyboardShortcutsHistory {
  correct : boolean,
  keysPressed : string,
  actualShortcut : string,
}