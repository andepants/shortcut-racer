'use client';
import { useState, useEffect } from 'react'
import { KeyboardEvent } from 'react'
import { editing1 } from '../../public/vscode'

export default function Home() {

  const [inputValue, setInputValue] = useState<string>('');
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [keysPressedHistory, setKeysPressedHistory] = useState<string[][]>([]);
  const [currentShorcut, setCurrentShortcut] = useState<string>('');
  const [currentDescription, setCurrentDescription] = useState<string>('');
  const [currentShortcutsPracticing, setCurrentShortcutsPracticing] = useState<string[]>(editing1.shorcuts);
  const [currentDescriptionsPracticing, setCurrentDescriptionsPracticing] = useState<string[]>(editing1.descriptions);

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
      if (keysPressed.length !== currentShorcut.length || currentShorcut === '') return;
      console.log('keysPressed', keysPressed.join(''), currentShorcut);
      if (keysPressed.join('').toLowerCase() === currentShorcut) {
        console.log('match!');
        setKeysPressedHistory([...keysPressedHistory, ['good']].reverse());
        pickNewShortcut();
        setKeysPressed([]);
      } else {
        console.log('no match');
        setKeysPressedHistory([...keysPressedHistory, ['bad']].reverse());
        pickNewShortcut();
        setKeysPressed([]);
      }
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
  };


  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) : void => {
    setKeysPressed([]);
  };

  return (
    <main>
      <h1 className="flex justify-center m-5 p-2 font-bold text-4xl">Shortcut Racer</h1>
      <div className="flex justify-center">
        <p className="m-5 p-2 font-bold text-2xl">{currentDescription}</p>
        <p className="m-5 p-2 font-bold text-2xl">{currentShorcut}</p>
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
            {keysPressed.map((key, index) => {
              return (
                <div key={index} className="m-1 p-1 font-bold text-2xl">{key}</div>
              )
            })}
          </div>
        )})}
    </main>
  )
}