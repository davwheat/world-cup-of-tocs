import React, { useEffect, useRef, useState } from 'react'

import GameBoard from './GameBoard'
import { Whisper } from '../../typography'
import LoadingSpinner from '../LoadingSpinner'
import AlertBanner from '../AlertBanner'
import createSinglePollsFromApiData from '../../functions/createSinglePollsFromApiData'
import { Values } from '../../data'
import fetchGameNotes from '../../functions/fetchGameNotes'

const DataRefreshInterval = 60

const Game: React.FC = () => {
  const countdownElRef = useRef<HTMLSpanElement>(null)
  const countdownSecsRef = useRef<number>(DataRefreshInterval)

  const [gameData, setGameData] = useState<IGameData>(null)
  const [error, setError] = useState<string>(null)
  const [gameNotes, setGameNotes] = useState<IGameNotes>(null)

  async function handleResponse(response) {
    const jsonData = await response.json()

    setGameData(createSinglePollsFromApiData(jsonData))
  }

  function RefreshData(abortController?: AbortController) {
    return new Promise((resolve, reject) => {
      fetch(`${Values.api.hostname}/v1/all_polls`, { signal: abortController && abortController.signal })
        .then(r => {
          handleResponse(r).then(resolve)
        })
        .catch(e => {
          console.error(e)
          setError("Failed to fetch poll data from the API. We'll try again in a few seconds.")
          reject()
        })
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!gameData) {
      // Fetch data
      const controller = new AbortController()
      RefreshData(controller)

      return () => {
        controller.abort()
      }
    } else if (!gameNotes) {
      fetchGameNotes().then(data => setGameNotes(data))
    }

    const updateInterval = setInterval(() => {
      countdownSecsRef.current--
      countdownElRef.current.innerText = countdownSecsRef.current.toString()

      if (countdownSecsRef.current === 0) {
        countdownElRef.current.innerText = DataRefreshInterval.toString()
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
      countdownElRef.current.innerText = DataRefreshInterval.toString()
    })
  }

  if (error) {
    setTimeout(() => {
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
        <GameBoard gameData={gameData} gameNotes={gameNotes} />
      </section>
    </article>
  )
}

export default Game
