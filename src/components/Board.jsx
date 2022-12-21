import React from 'react';
import styles from '../css/board.module.css';

const Board = () => {
  const datos = [
    { color: "g", dato: "AC" },
    { color: "g", dato: "+/-" },
    { color: "g", dato: "%" },
    { color: "r", dato: "÷" },
    { color: "w", dato: "7" },
    { color: "w", dato: "8" },
    { color: "w", dato: "9" },
    { color: "r", dato: "x" },
    { color: "w", dato: "4" },
    { color: "w", dato: "5" },
    { color: "w", dato: "6" },
    { color: "r", dato: "-" },
    { color: "w", dato: "1" },
    { color: "w", dato: "2" },
    { color: "w", dato: "3" },
    { color: "r", dato: "+" },
    { color: "w", dato: "⟲" },
    { color: "w", dato: "•" },
    { color: "w", dato: "0" },
    { color: "r", dato: "=" },
  ];

  return (
    <div className={styles.board}>
      {datos.map((e, i) => (
        <div className={styles.containerBtn} key={i}>
          <button className={e.color === 'w' ? styles.btnWhite : (e.color === 'g' ? styles.btnGreen : styles.btnRed)} >{e.dato}</button>
        </div>
      ))}
    </div>
  );
};

export default Board;