import React, { useEffect, useRef, useState } from 'react'

import GameBoard from './GameBoard'
import { Whisper } from '../../typography'
import LoadingSpinner from '../LoadingSpinner'
import AlertBanner from '../AlertBanner'
import createSinglePollsFromApiData from '../../functions/createSinglePollsFromApiData'

const DataRefreshInterval = 60

export default function Game() {
  const countdownElRef = useRef(null)
  const countdownSecsRef = useRef(DataRefreshInterval)

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

  function RefreshData(abortController) {
    return new Promise((resolve, reject) =>
      fetch(`https://toc-api.davwheat.dev/v1/all_polls`, { signal: abortController && abortController.signal })
        .then(r => {
          handleResponse(r).then(resolve)
        })
        .catch(e => {
          console.error(e)
          setError("Failed to fetch poll data from the API. We'll try again in a few seconds.")
          reject()
        })
    )
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!gameData) {
      // Fetch data
      var controller = new AbortController()
      RefreshData(controller)

      return () => {
        controller.abort()
      }
    }

    const updateInterval = setInterval(() => {
      countdownSecsRef.current--
      countdownElRef.current.innerText = countdownSecsRef.current

      if (countdownSecsRef.current === 0) {
        countdownElRef.current.innerText = DataRefreshInterval
        clearInterval(updateInterval)
        BeginTimeoutRefreshData()
        return
      }
    }, 1000)

    return () => {
      clearInterval(updateInterval)
    }
  })

  function BeginTimeoutRefreshData() {
    RefreshData().then(() => {
      countdownSecsRef.current = DataRefreshInterval
      countdownElRef.current.innerText = DataRefreshInterval
    })
  }

  if (error) {
    let x = setTimeout(() => {
      setGameData(null)
      setError(null)

      RefreshData()
    }, 5000)

    return (
      <>
        <AlertBanner title="Error" message={error} />
      </>
    )
  }

  if (typeof window === 'undefined' || !gameData) {
    return <LoadingSpinner loadingText />
  }

  return (
    <article>
      <Whisper center bold>
        Refreshing in <span ref={countdownElRef}>{countdownSecsRef.current}</span> seconds.
      </Whisper>

      <section id="game-board">
        <GameBoard gameData={gameData} />
      </section>
    </article>
  )
}
