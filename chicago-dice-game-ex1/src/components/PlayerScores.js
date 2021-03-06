import React from 'react';

import { PlayerContainer, ScoreContainer } from '../styled';
import { useGameStateContext } from '../useGameContext';

const PlayerScores = () => {
  const { playerAScore, playerBScore } = useGameStateContext();

  return (
    <ScoreContainer>
      <PlayerContainer>
        <h4>Player A</h4>
        <div>Score: {playerAScore}</div>
      </PlayerContainer>
      <PlayerContainer>
        <h4>Player B</h4>
        <div>Score: {playerBScore}</div>
      </PlayerContainer>
    </ScoreContainer>
  );
};

export default PlayerScores;
