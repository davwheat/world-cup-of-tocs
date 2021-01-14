import React, { useEffect, useRef, useState } from 'react'

import GameBoard from './GameBoard'
import { Whisper } from '../../typography'

// import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles({
//   refreshPara: {
//     textAlign: 'center',
//   },
// })

export default function Game() {
  const countdownElRef = useRef(null)
  const countdownSecsRef = useRef(60)

  const [gameData, setGameData] = useState(0)

  function RefreshData() {
    countdownSecsRef.current = 60
    setGameData(gameData + 1)
  }

  useEffect(() => {
    const updateInterval = setInterval(() => {
      countdownSecsRef.current--
      countdownElRef.current.innerText = countdownSecsRef.current

      if (countdownSecsRef.current === 0) {
        clearInterval(updateInterval)
        RefreshData()
        return
      }
    }, 1000)

    return () => {
      clearInterval(updateInterval)
    }
  })

  return (
    <article>
      <Whisper center bold>
        Refreshing in <span ref={countdownElRef}>60</span> seconds.
      </Whisper>

      <section id="game-board">
        <GameBoard />
      </section>
    </article>
  )
}
