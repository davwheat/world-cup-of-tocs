import React, { useEffect, useRef, useState } from 'react'

import GameBoard from './GameBoard'
import { Whisper } from '../../typography'
import LoadingSpinner from '../LoadingSpinner'
import AlertBanner from '../AlertBanner'
import createSinglePollsFromApiData from '../../functions/createSinglePollsFromApiData'

// import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles({
//   refreshPara: {
//     textAlign: 'center',
//   },
// })

export default function Game() {
  const countdownElRef = useRef(null)
  const countdownSecsRef = useRef(60)

  /**
   * @type {[import('./Graph').GameData, function]}
   */
  const [gameData, setGameData] = useState(null)
  const [error, setError] = useState(null)

  console.log(gameData)

  async function handleResponse(response) {
    const jsonData = await response.json()

    setGameData(createSinglePollsFromApiData(jsonData))
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!gameData) {
      // Fetch data
      var controller = new AbortController()
      fetch(`https://toc-api.davwheat.dev/v1/all_polls`, { signal: controller.signal })
        .then(handleResponse)
        .catch(e => {
          console.error(e)
          setError('Failed to fetch poll data from the API. Please contact David on Twitter via the link at the bottom of this site.')
        })

      return () => {
        controller.abort()
      }
    }

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

  function RefreshData() {
    countdownSecsRef.current = 60
    setGameData(gameData + 1)
  }

  if (error) {
    return <AlertBanner title="Error" message={error} />
  }

  if (typeof window === 'undefined' || !gameData) {
    return <LoadingSpinner loadingText />
  }

  return (
    <article>
      <Whisper center bold>
        Refreshing in <span ref={countdownElRef}>60</span> seconds.
      </Whisper>

      <section id="game-board">
        <GameBoard gameData={gameData} />
      </section>
    </article>
  )
}
