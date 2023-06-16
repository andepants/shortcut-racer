'use client';
import { useState, useEffect } from 'react'
import { KeyboardEvent } from 'react'
import { KeyboardShorcuts } from '../interfaces';

export default function Practice({ defaultShortcuts } : { defaultShortcuts : KeyboardShorcuts }) {

  const [inputValue, setInputValue] = useState<string>('');
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [keysPressedHistory, setKeysPressedHistory] = useState<string[]>([]);
  const [currentShortcut, setCurrentShortcut] = useState<string>('');
  const [currentDescription, setCurrentDescription] = useState<string>('');
  const [currentShortcutsPracticing, setCurrentShortcutsPracticing] = useState<string[]>(defaultShortcuts.shortcuts);
  const [currentDescriptionsPracticing, setCurrentDescriptionsPracticing] = useState<string[]>(defaultShortcuts.descriptions);

  const handleChange = () => {};

  useEffect(() => {
    pickNewShortcut();
  }, [])

  const pickNewShortcut = () : void => {
    const randomIndex = Math.floor(Math.random() * currentShortcutsPracticing.length);
    setCurrentShortcut(currentShortcutsPracticing[randomIndex]);
    setCurrentDescription(currentDescriptionsPracticing[randomIndex]);
  }

  useEffect(() => {
    const stringChecker = () : void => {
      if (keysPressed.length !== currentShortcut.length || currentShortcut === '') return;
      console.log('keysPressed', keysPressed.join(''), currentShortcut);
      if (keysPressed[keysPressed.length - 1] !== currentShortcut[keysPressed.length - 1]) {
        console.log('no match');
        const keysPressedReveresedHistory = [...keysPressedHistory]
        keysPressedReveresedHistory.unshift('bad');
        setKeysPressedHistory(keysPressedReveresedHistory);
        pickNewShortcut();
        setKeysPressed([]);
        return;
      } else {
        for (let i = 0; i < keysPressed.length - 1; i++) {
          console.log(keysPressed[i], currentShortcut[i])
          if (!currentShortcut.includes(keysPressed[i])) {
            console.log('no match');
            const keysPressedReveresedHistory = [...keysPressedHistory]
            keysPressedReveresedHistory.unshift('bad');
            setKeysPressedHistory(keysPressedReveresedHistory);
            pickNewShortcut();
            setKeysPressed([]);
            return;
          }
        }
      }
      console.log('match!');
      const keysPressedReveresedHistory = [...keysPressedHistory]
      keysPressedReveresedHistory.unshift('good');
      console.log(keysPressedReveresedHistory)
      setKeysPressedHistory(keysPressedReveresedHistory);
      pickNewShortcut();
      setKeysPressed([]);
    }
    stringChecker();
  }, [keysPressed])

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) : void => {
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      setKeysPressed([...keysPressed, '↑']);
      return;
    }

    if (event.key === 'ArrowDown') {
      setKeysPressed([...keysPressed, '↓']);
      return;
    }

    if (event.key === 'ArrowLeft') {
      setKeysPressed([...keysPressed, '←']);
      return;
    }

    if (event.key === 'ArrowRight') {
      setKeysPressed([...keysPressed, '→']);
      return;
    }

    if (event.key === 'Backspace') {
      setKeysPressed([...keysPressed, 'BACKSPACE']);
      return;
    }

    if (event.key === ' ') {
      setKeysPressed([...keysPressed, '']);
      return;
    }

    if (event.key === 'Enter') {
      setKeysPressed([...keysPressed, '↵']);
      return;
    }

    if (event.key === 'Shift') {
      setKeysPressed([...keysPressed, '⇧']);
      return;
    }

    if (event.key === 'Control') {
      setKeysPressed([...keysPressed, '⌃']);
      return;
    }

    if (event.key === 'Alt') {
      setKeysPressed([...keysPressed, '⌥']);
      return;
    }

    if (event.key === 'Meta') {
      setKeysPressed([...keysPressed, '⌘']);
      return;
    }

    if (event.key === 'Tab') {
      setKeysPressed([...keysPressed, 'TAB']);
      return;
    }

    if (event.key === 'Escape') {
      setKeysPressed([...keysPressed, 'ESC']);
      return;
    }

    setKeysPressed([...keysPressed, event.key]);
    event.preventDefault();
  };


  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) : void => {
    event.preventDefault();
    setKeysPressed([]);
  };

  return (
    <main>
      <div className="flex justify-center">
        <p className="m-5 p-2 font-bold text-2xl">{currentDescription}</p>
        <p className="m-5 p-2 font-bold text-2xl">{currentShortcut}</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
      </div>
      {keysPressedHistory.map((keysPressed, index) => {
        return (
          <div key={index} className="flex justify-center">
            <div key={index} className="m-1 p-1 font-bold text-2xl">{keysPressed}</div>
          </div>
        )})}
    </main>
  )
}