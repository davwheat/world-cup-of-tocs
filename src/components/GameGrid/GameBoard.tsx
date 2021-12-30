import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { Paragraph, Shout } from '../../typography'
import Loud from '../../typography/loud'
import TextContainer from '../TextContainer'
import ActiveGame from './ActiveGame'

import KnockoutRounds from './Rounds/KnockoutRounds'
import GroupStages from './Rounds/GroupStages'
import QuarterFinals from './Rounds/QuarterFinals'
import SemiFinals from './Rounds/SemiFinals'
import Finals from './Rounds/Finals'
import RunnerUp from './Rounds/RunnerUp'
import RankTable from './RankTable'
import type SinglePoll from '../../models/SinglePoll'
// import QuarterFinals from './Rounds/QuarterFinals'
// import SemiFinals from './Rounds/SemiFinals'
// import RunnerUp from './Rounds/RunnerUp'
// import Finals from './Rounds/Finals'

const useStyles = makeStyles({
  activeGame: {
    padding: 16,
    border: '2px solid #000',
  },
})

interface Props {
  gameData: IGameData
  gameNotes: IGameNotes
  pastGame?: boolean
}

/** Checks if all matches have completed */
function checkIfCompleted(matches: Record<number, SinglePoll>) {
  for (const matchEntry in matches) {
    if (Object.prototype.hasOwnProperty.call(matches, matchEntry)) {
      // if we find one with null for either team, then the match is yet to occur
      const match = matches[matchEntry]
      const teams = match.getTeamData()
      if (teams[0].code === '??' || teams[1].code === '??') {
        return false
      }

      // then check end time
      if (match.twitterInfo?.endTime >= Date.now()) {
        return true // end time in front of us, and we know the teams, so round not yet done
      }
    }
  }
}

const GameBoard: React.FC<Props> = ({ gameData, gameNotes: propsGameNotes, pastGame }: Props) => {
  const classes = useStyles()

  const gameNotes: IGameNotes = propsGameNotes || {
    knockout: {},
    groupStages: {},
    quarterFinal: {},
    semiFinal: {},
    runnerUp: {},
    final: {},
    overall: null,
  }

  const didComplete = {
    groupStages: checkIfCompleted(gameData.groupStages),
    quarterFinal: checkIfCompleted(gameData.quarterFinal),
    semiFinal: checkIfCompleted(gameData.semiFinal),
    final: checkIfCompleted({ 0: gameData.final }),
    runnerUp: checkIfCompleted({ 1: gameData.runnerUp }),
  }

  return (
    <>
      {/*
        NOTE: Move active rounds to the top when they start, but only once they start (so that the current round is always at the top).
        Also ensure the "Other Games" header is included in whatever is at the top.
        The next round should also be below the current round.
       */}

      {pastGame !== true && (
        <TextContainer innerClassName={classes.activeGame}>
          <Loud center>Active game</Loud>
          <ActiveGame data={gameData} gameNotes={gameNotes} />
        </TextContainer>
      )}
      {gameData.final.twitterInfo && (
        <TextContainer>
          <Shout>{gameData.final.twitterInfo.endTime < Date.now() ? 'Final Rankings' : 'Current Rankings'}</Shout>
          {gameData.final.twitterInfo.endTime > Date.now() && <Paragraph>(These may change as the polls progress)</Paragraph>}
          <RankTable final={gameData.final} runoff={gameData.runnerUp} />
        </TextContainer>
      )}

      {/* If the matches have complete, show final first order, if not, show knockout-first order */}

      {!didComplete.groupStages && (
        <>
          <TextContainer>
            <Loud>Round of 16</Loud>
            <Paragraph>The round of 16 began on Monday 1st&nbsp;February and ended on Tuesday 9th&nbsp;February.</Paragraph>
          </TextContainer>
          <GroupStages gameNotes={gameNotes.groupStages} groupStageData={gameData.groupStages} />
        </>
      )}

      {!didComplete.quarterFinal && (
        <>
          <TextContainer>
            <Loud>Quarter Finals</Loud>
            <Paragraph>Quarter Finals began on Wednesday 10th February and will end on Saturday 13th&nbsp;February.</Paragraph>
          </TextContainer>

          <QuarterFinals gameNotes={gameNotes.quarterFinal} quarterFinalData={gameData.quarterFinal} />
        </>
      )}

      {!didComplete.semiFinal && (
        <>
          <TextContainer>
            <Loud>Semi Finals</Loud>
            <Paragraph>Semi Finals will begin on Monday 15th February and end on Tuesday 16th&nbsp;February.</Paragraph>
          </TextContainer>

          <SemiFinals gameNotes={gameNotes.semiFinal} semiFinalData={gameData.semiFinal} />
        </>
      )}

      {!didComplete.runnerUp && (
        <>
          <TextContainer>
            <Loud>3rd/4th Playoff</Loud>
            <Paragraph>The 3rd/4th Play Playoff occurs on Thursday 18th&nbsp;February.</Paragraph>
          </TextContainer>

          <RunnerUp gameNotes={gameNotes.runnerUp[0]} runnerUpData={gameData.runnerUp} />
        </>
      )}

      {!didComplete.final && (
        <>
          <TextContainer>
            <Loud>Final</Loud>
            <Paragraph>The Final occurs on Friday 19th&nbsp;February.</Paragraph>
          </TextContainer>

          <Finals gameNotes={gameNotes.final[0]} finalData={gameData.final} />
        </>
      )}

      {/* BELOW IS FOR WHEN MATCHES COMPLETE */}
      {didComplete.final && (
        <>
          <TextContainer>
            <Loud>Final</Loud>
            <Paragraph>The Final occurs on Friday 19th&nbsp;February.</Paragraph>
          </TextContainer>

          <Finals gameNotes={gameNotes.final[0]} finalData={gameData.final} />
        </>
      )}

      {didComplete.runnerUp && (
        <>
          <TextContainer>
            <Loud>3rd/4th Playoff</Loud>
            <Paragraph>The 3rd/4th Play Playoff occurs on Thursday 18th&nbsp;February.</Paragraph>
          </TextContainer>

          <RunnerUp gameNotes={gameNotes.runnerUp[0]} runnerUpData={gameData.runnerUp} />
        </>
      )}

      {didComplete.semiFinal && (
        <>
          <TextContainer>
            <Loud>Semi Finals</Loud>
            <Paragraph>Semi Finals will begin on Monday 15th February and end on Tuesday 16th&nbsp;February.</Paragraph>
          </TextContainer>

          <SemiFinals gameNotes={gameNotes.semiFinal} semiFinalData={gameData.semiFinal} />
        </>
      )}

      {didComplete.quarterFinal && (
        <>
          <TextContainer>
            <Loud>Quarter Finals</Loud>
            <Paragraph>Quarter Finals began on Wednesday 10th February and will end on Saturday 13th&nbsp;February.</Paragraph>
          </TextContainer>

          <QuarterFinals gameNotes={gameNotes.quarterFinal} quarterFinalData={gameData.quarterFinal} />
        </>
      )}

      {didComplete.groupStages && (
        <>
          <TextContainer>
            <Loud>Round of 16</Loud>
            <Paragraph>The round of 16 began on Monday 1st&nbsp;February and ended on Tuesday 9th&nbsp;February.</Paragraph>
          </TextContainer>
          <GroupStages gameNotes={gameNotes.groupStages} groupStageData={gameData.groupStages} />
        </>
      )}

      {'0' in (gameNotes.knockout || {}) && (
        <>
          <TextContainer>
            <Loud>Round of 32</Loud>
            <Paragraph>Knockout rounds began on Friday 15th January and ended on Saturday 30th&nbsp;January.</Paragraph>
          </TextContainer>
          <KnockoutRounds gameNotes={gameNotes.knockout} knockoutRoundData={gameData.knockout} />
        </>
      )}
    </>
  )
}

export default GameBoard
