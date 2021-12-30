import React, { useEffect, useRef, useState } from 'react'

import GameBoard from './GameBoard'
import { Paragraph, Shout, Whisper } from '../../typography'
import LoadingSpinner from '../LoadingSpinner'
import AlertBanner from '../AlertBanner'
import createSinglePollsFromApiData from '../../functions/createSinglePollsFromApiData'
import fetchGameNotes from '../../functions/fetchGameNotes'
import Loud from '../../typography/loud'
import TextContainer from '../TextContainer'
import ErrorBoundary from '../ErrorBoundary'
import { makeStyles } from '@material-ui/styles'
import { Values } from '../../data'

const DataRefreshInterval = 60

const useStyles = makeStyles({
  siteNoteContainer: {
    marginTop: 16,
    background: 'rgba(128, 128, 128, 0.1)',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 32,
    paddingRight: 32,
  },
  displayNone: {
    display: 'none',
  },
})

const useStylesWrapper = makeStyles({
  wrapperDescription: {
    // paddingBottom: 20,
  },
})

const GameWrapper: React.FC = () => {
  const classes = useStylesWrapper()
  return (
    <>
      <TextContainer>
        <Shout>2021 Tube World Cup Express Edition</Shout>
        <Paragraph className={classes.wrapperDescription}>Results from the 2021 Tube World Cup, held on Friday 31st December 2021</Paragraph>
      </TextContainer>
      {/* <Game showRefreshIndicator dataURL={`${Values.api.hostname}/v1/all_polls`} notesURL={`${Values.api.hostname}/v1/game_notes`} /> */}
      <Game showRefreshIndicator dataURL={`http://localhost:2678/v1/all_polls`} notesURL={`http://localhost:2678/v1/game_notes`} />

      <TextContainer>
        <Shout>2021 TOC Cup</Shout>
        <Paragraph className={classes.wrapperDescription}>Results from the 2021 World Cup of Train Operators, held in January and February 2021</Paragraph>
      </TextContainer>
      <Game pastGame dataURL={`/data/all_polls_tocs_2021.json`} notesURL={`/data/game_notes_tocs_2021.json`} />
    </>
  )
}

interface IGame {
  showRefreshIndicator?: boolean
  dataURL: string
  notesURL: string
  /** Set to true to indicate it's a past game */
  pastGame?: boolean
}

const Game: React.FC<IGame> = props => {
  const countdownElRef = useRef<HTMLSpanElement>(null)
  const countdownSecsRef = useRef<number>(DataRefreshInterval)

  const [gameData, setGameData] = useState<IGameData>(null)
  const [error, setError] = useState<string>(null)
  const [gameNotes, setGameNotes] = useState<IGameNotes>(null)

  const classes = useStyles()

  async function handleResponse(response) {
    const jsonData = await response.json()

    setGameData(createSinglePollsFromApiData(jsonData))
  }

  function RefreshData(abortController?: AbortController) {
    return new Promise((resolve, reject) => {
      fetch(props.dataURL, { signal: abortController && abortController.signal })
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
      fetchGameNotes(props.notesURL).then(data => setGameNotes(data))
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
      <Whisper center bold className={props.showRefreshIndicator !== true ? classes.displayNone : null}>
        Refreshing in <span ref={countdownElRef}>{countdownSecsRef.current}</span> seconds.
      </Whisper>

      {gameNotes && Array.isArray(gameNotes.overall) && (
        <TextContainer className={classes.siteNoteContainer}>
          <Loud center>Information</Loud>

          <Paragraph>
            {gameNotes.overall.map(note => (
              <span key={note}>{note} </span>
            ))}
          </Paragraph>
        </TextContainer>
      )}

      <ErrorBoundary inline>
        <section id="game-board">
          <GameBoard pastGame={props.pastGame} gameData={gameData} gameNotes={gameNotes} />
        </section>
      </ErrorBoundary>
    </article>
  )
}

export default GameWrapper
