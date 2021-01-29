import React from 'react'

import GameRound from './GameRound'

import { makeStyles } from '@material-ui/styles'

import SinglePoll from '../../../models/SinglePoll'

const useStyles = makeStyles({
  groupStagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    marginTop: 8,
    width: 500,
    maxWidth: '100%',
  },
})

type GroupStageData = Record<number, SinglePoll>

interface Props {
  groupStageData: GroupStageData
  gameNotes: Record<number, string[] | null>
}

const GroupStages: React.FC<Props> = ({ groupStageData, gameNotes }) => {
  const classes = useStyles()

  if (!groupStageData) return null

  return (
    <>
      <section className={classes.groupStagesContainer}>
        {Object.keys(groupStageData).map(key => (
          <GameRound data={groupStageData[key]} key={key} note={gameNotes[key]} />
        ))}
      </section>
    </>
  )
}

export default GroupStages
