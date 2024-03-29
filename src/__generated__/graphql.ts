/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Byte: { input: any; output: any; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Guid: { input: any; output: any; }
  Long: { input: any; output: any; }
  UInt: { input: any; output: any; }
  UShort: { input: any; output: any; }
};

export type AdminMutationType = {
  __typename?: 'AdminMutationType';
  betGroups?: Maybe<Array<Maybe<BetMarketTypeGroupEnumTypeTwo>>>;
};

export type ArbitrageType = {
  __typename?: 'ArbitrageType';
  americanOdds: Array<Scalars['Int']['output']>;
  awayTeam?: Maybe<TeamType>;
  betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  betMarketSiteIds: Array<BetMarketSiteEnum>;
  betValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  foundDateTime?: Maybe<Scalars['Long']['output']>;
  game?: Maybe<IGameType>;
  gameLiveData?: Maybe<GameLiveDataType>;
  homeTeam?: Maybe<TeamType>;
  id: Scalars['ID']['output'];
  league: LeagueEnum;
  player?: Maybe<PlayerType>;
  rOI: Scalars['Decimal']['output'];
  teams?: Maybe<Array<Maybe<TeamType>>>;
  urlBets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type BetMarketConditionType = {
  __typename?: 'BetMarketConditionType';
  betValue?: Maybe<Scalars['Decimal']['output']>;
  betValueMax?: Maybe<Scalars['Decimal']['output']>;
  marketType: BetMarketTypeEnum;
  overUnder?: Maybe<BetMarketOverOrUnderEnum>;
  playerId?: Maybe<Scalars['UInt']['output']>;
  teamId?: Maybe<Scalars['UShort']['output']>;
};

export type BetMarketInfoType = {
  __typename?: 'BetMarketInfoType';
  displayName: Scalars['String']['output'];
  groupValue: BetMarketTypeGroupEnum;
  order: Scalars['UInt']['output'];
  value: BetMarketTypeEnum;
};

export type BetMarketListingType = {
  __typename?: 'BetMarketListingType';
  americanOdds?: Maybe<Scalars['Int']['output']>;
  foundDateTime?: Maybe<Scalars['Long']['output']>;
  isPrimary: Scalars['Boolean']['output'];
  marketId?: Maybe<Scalars['String']['output']>;
  selectionId?: Maybe<Scalars['String']['output']>;
  site?: Maybe<BetSiteType>;
  siteId: BetMarketSiteEnum;
};

export enum BetMarketOverOrUnderEnum {
  Between = 'BETWEEN',
  Exactly = 'EXACTLY',
  Over = 'OVER',
  Under = 'UNDER'
}

export enum BetMarketSiteEnum {
  BallyBet = 'BALLY_BET',
  Betano = 'BETANO',
  Betobet = 'BETOBET',
  BetwayCa = 'BETWAY_CA',
  BetwayUs = 'BETWAY_US',
  Bet_99 = 'BET_99',
  Bet_365 = 'BET_365',
  BetJack = 'BET_JACK',
  BetOnlineAg = 'BET_ONLINE_AG',
  BetPlays = 'BET_PLAYS',
  BetRegal = 'BET_REGAL',
  BetRivers = 'BET_RIVERS',
  BlueBet = 'BLUE_BET',
  Bodog = 'BODOG',
  Bovada = 'BOVADA',
  Caesars = 'CAESARS',
  ClutchBet = 'CLUTCH_BET',
  CoolBet = 'COOL_BET',
  DexSport = 'DEX_SPORT',
  DraftKings = 'DRAFT_KINGS',
  EspnBet = 'ESPN_BET',
  FanDuel = 'FAN_DUEL',
  Fliff = 'FLIFF',
  HardRock = 'HARD_ROCK',
  Ladbrokes = 'LADBROKES',
  LowVig = 'LOW_VIG',
  Mgm = 'MGM',
  OverTimeMarkets = 'OVER_TIME_MARKETS',
  PartyPoker = 'PARTY_POKER',
  Pinnacle = 'PINNACLE',
  PointsBet = 'POINTS_BET',
  ProphetBetting = 'PROPHET_BETTING',
  ProLinePlus = 'PRO_LINE_PLUS',
  Ps_3838 = 'PS_3838',
  SportsInteraction = 'SPORTS_INTERACTION',
  SugarHouse = 'SUGAR_HOUSE',
  Superbook = 'SUPERBOOK',
  TheScore = 'THE_SCORE',
  Tipico = 'TIPICO',
  UniBet = 'UNI_BET',
  VirginBet = 'VIRGIN_BET',
  Wynn = 'WYNN'
}

export enum BetMarketSiteEnumTypeTwo {
  BallyBet = 'BALLY_BET',
  Betano = 'BETANO',
  Betobet = 'BETOBET',
  BetwayCa = 'BETWAY_CA',
  BetwayUs = 'BETWAY_US',
  Bet_99 = 'BET_99',
  Bet_365 = 'BET_365',
  BetJack = 'BET_JACK',
  BetOnlineAg = 'BET_ONLINE_AG',
  BetPlays = 'BET_PLAYS',
  BetRegal = 'BET_REGAL',
  BetRivers = 'BET_RIVERS',
  BlueBet = 'BLUE_BET',
  Bodog = 'BODOG',
  Bovada = 'BOVADA',
  Caesars = 'CAESARS',
  ClutchBet = 'CLUTCH_BET',
  CoolBet = 'COOL_BET',
  DexSport = 'DEX_SPORT',
  DraftKings = 'DRAFT_KINGS',
  EspnBet = 'ESPN_BET',
  FanDuel = 'FAN_DUEL',
  Fliff = 'FLIFF',
  HardRock = 'HARD_ROCK',
  Ladbrokes = 'LADBROKES',
  LowVig = 'LOW_VIG',
  Mgm = 'MGM',
  OverTimeMarkets = 'OVER_TIME_MARKETS',
  PartyPoker = 'PARTY_POKER',
  Pinnacle = 'PINNACLE',
  PointsBet = 'POINTS_BET',
  ProphetBetting = 'PROPHET_BETTING',
  ProLinePlus = 'PRO_LINE_PLUS',
  Ps_3838 = 'PS_3838',
  SportsInteraction = 'SPORTS_INTERACTION',
  SugarHouse = 'SUGAR_HOUSE',
  Superbook = 'SUPERBOOK',
  TheScore = 'THE_SCORE',
  Tipico = 'TIPICO',
  UniBet = 'UNI_BET',
  VirginBet = 'VIRGIN_BET',
  Wynn = 'WYNN'
}

export type BetMarketType = {
  __typename?: 'BetMarketType';
  conditions?: Maybe<Array<Maybe<BetMarketConditionType>>>;
  gameId: Scalars['ID']['output'];
  listings?: Maybe<Array<Maybe<BetMarketListingType>>>;
};

export enum BetMarketTypeEnum {
  DoubleResultMulti = 'DOUBLE_RESULT_MULTI',
  FirstFieldGoalTeam = 'FIRST_FIELD_GOAL_TEAM',
  FirstFieldGoalTeamExactMulti = 'FIRST_FIELD_GOAL_TEAM_EXACT_MULTI',
  FirstFieldGoalType = 'FIRST_FIELD_GOAL_TYPE',
  GameEmptyNetGoal = 'GAME_EMPTY_NET_GOAL',
  GameGoalScoredBothHalves = 'GAME_GOAL_SCORED_BOTH_HALVES',
  GameGoalScoredBothTeams = 'GAME_GOAL_SCORED_BOTH_TEAMS',
  GameGoalScoredBothTeams_3Way = 'GAME_GOAL_SCORED_BOTH_TEAMS_3_WAY',
  GameGoalScoredBothTeamsBothHalves = 'GAME_GOAL_SCORED_BOTH_TEAMS_BOTH_HALVES',
  GameGoalScoredBothTeamsFirstHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_FIRST_HALF',
  GameGoalScoredBothTeamsNoDraw = 'GAME_GOAL_SCORED_BOTH_TEAMS_NO_DRAW',
  GameGoalScoredBothTeamsSecondHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_SECOND_HALF',
  GameGoalScoredFirstHalf = 'GAME_GOAL_SCORED_FIRST_HALF',
  GameGoalScoredSecondHalf = 'GAME_GOAL_SCORED_SECOND_HALF',
  GameGrandSlam = 'GAME_GRAND_SLAM',
  GameOvertime = 'GAME_OVERTIME',
  GameOwnGoal = 'GAME_OWN_GOAL',
  GamePenalityAwarded = 'GAME_PENALITY_AWARDED',
  GameRedCardGiven = 'GAME_RED_CARD_GIVEN',
  MoneyLine = 'MONEY_LINE',
  MoneyLine_3Way = 'MONEY_LINE_3_WAY',
  MoneyLineEighthInning = 'MONEY_LINE_EIGHTH_INNING',
  MoneyLineEighthInning_3Way = 'MONEY_LINE_EIGHTH_INNING_3_WAY',
  MoneyLineFifthInning = 'MONEY_LINE_FIFTH_INNING',
  MoneyLineFifthInning_3Way = 'MONEY_LINE_FIFTH_INNING_3_WAY',
  MoneyLineFirstHalf = 'MONEY_LINE_FIRST_HALF',
  MoneyLineFirstHalf_3Way = 'MONEY_LINE_FIRST_HALF_3_WAY',
  MoneyLineFirstInning = 'MONEY_LINE_FIRST_INNING',
  MoneyLineFirstInning_3Way = 'MONEY_LINE_FIRST_INNING_3_WAY',
  MoneyLineFirstQuarter = 'MONEY_LINE_FIRST_QUARTER',
  MoneyLineFirstQuarter_3Way = 'MONEY_LINE_FIRST_QUARTER_3_WAY',
  MoneyLineFourthInning = 'MONEY_LINE_FOURTH_INNING',
  MoneyLineFourthInning_3Way = 'MONEY_LINE_FOURTH_INNING_3_WAY',
  MoneyLineFourthQuarter = 'MONEY_LINE_FOURTH_QUARTER',
  MoneyLineFourthQuarter_3Way = 'MONEY_LINE_FOURTH_QUARTER_3_WAY',
  MoneyLineNinthInning = 'MONEY_LINE_NINTH_INNING',
  MoneyLineNinthInning_3Way = 'MONEY_LINE_NINTH_INNING_3_WAY',
  MoneyLineNoOt = 'MONEY_LINE_NO_OT',
  MoneyLineNoOt_3Way = 'MONEY_LINE_NO_OT_3_WAY',
  MoneyLineSecondHalf = 'MONEY_LINE_SECOND_HALF',
  MoneyLineSecondHalf_3Way = 'MONEY_LINE_SECOND_HALF_3_WAY',
  MoneyLineSecondHalfNoOt = 'MONEY_LINE_SECOND_HALF_NO_OT',
  MoneyLineSecondHalfNoOt_3Way = 'MONEY_LINE_SECOND_HALF_NO_OT_3_WAY',
  MoneyLineSecondInning = 'MONEY_LINE_SECOND_INNING',
  MoneyLineSecondInning_3Way = 'MONEY_LINE_SECOND_INNING_3_WAY',
  MoneyLineSecondQuarter = 'MONEY_LINE_SECOND_QUARTER',
  MoneyLineSecondQuarter_3Way = 'MONEY_LINE_SECOND_QUARTER_3_WAY',
  MoneyLineSeventhInning = 'MONEY_LINE_SEVENTH_INNING',
  MoneyLineSeventhInning_3Way = 'MONEY_LINE_SEVENTH_INNING_3_WAY',
  MoneyLineSixthInning = 'MONEY_LINE_SIXTH_INNING',
  MoneyLineSixthInning_3Way = 'MONEY_LINE_SIXTH_INNING_3_WAY',
  MoneyLineTenthInning = 'MONEY_LINE_TENTH_INNING',
  MoneyLineTenthInning_3Way = 'MONEY_LINE_TENTH_INNING_3_WAY',
  MoneyLineThirdInning = 'MONEY_LINE_THIRD_INNING',
  MoneyLineThirdInning_3Way = 'MONEY_LINE_THIRD_INNING_3_WAY',
  MoneyLineThirdQuarter = 'MONEY_LINE_THIRD_QUARTER',
  MoneyLineThirdQuarter_3Way = 'MONEY_LINE_THIRD_QUARTER_3_WAY',
  MoneyLineToQualify = 'MONEY_LINE_TO_QUALIFY',
  PlayerFirstFieldGoalExactMulti = 'PLAYER_FIRST_FIELD_GOAL_EXACT_MULTI',
  PlayerFirstFieldGoalMulti = 'PLAYER_FIRST_FIELD_GOAL_MULTI',
  PlayerFirstFieldGoalTypeMulti = 'PLAYER_FIRST_FIELD_GOAL_TYPE_MULTI',
  PlayerPropAnyTimeTouchdown = 'PLAYER_PROP_ANY_TIME_TOUCHDOWN',
  PlayerPropAssists = 'PLAYER_PROP_ASSISTS',
  PlayerPropAssistsFirstQuarter = 'PLAYER_PROP_ASSISTS_FIRST_QUARTER',
  PlayerPropAssistsFourthQuarter = 'PLAYER_PROP_ASSISTS_FOURTH_QUARTER',
  PlayerPropAssistsSecondQuarter = 'PLAYER_PROP_ASSISTS_SECOND_QUARTER',
  PlayerPropAssistsThirdQuarter = 'PLAYER_PROP_ASSISTS_THIRD_QUARTER',
  PlayerPropBases = 'PLAYER_PROP_BASES',
  PlayerPropBattedStrikeouts = 'PLAYER_PROP_BATTED_STRIKEOUTS',
  PlayerPropBattedWalk = 'PLAYER_PROP_BATTED_WALK',
  PlayerPropBlockedShots = 'PLAYER_PROP_BLOCKED_SHOTS',
  PlayerPropBlocks = 'PLAYER_PROP_BLOCKS',
  PlayerPropCard = 'PLAYER_PROP_CARD',
  PlayerPropCaughtInterceptions = 'PLAYER_PROP_CAUGHT_INTERCEPTIONS',
  PlayerPropDouble = 'PLAYER_PROP_DOUBLE',
  PlayerPropDoubleDouble = 'PLAYER_PROP_DOUBLE_DOUBLE',
  PlayerPropExtraPointMade = 'PLAYER_PROP_EXTRA_POINT_MADE',
  PlayerPropFieldGoalsMade = 'PLAYER_PROP_FIELD_GOALS_MADE',
  PlayerPropFirstTouchdown = 'PLAYER_PROP_FIRST_TOUCHDOWN',
  PlayerPropGoalsAgainst = 'PLAYER_PROP_GOALS_AGAINST',
  PlayerPropGoalsScored = 'PLAYER_PROP_GOALS_SCORED',
  PlayerPropGrandSlam = 'PLAYER_PROP_GRAND_SLAM',
  PlayerPropHit = 'PLAYER_PROP_HIT',
  PlayerPropHomeRun = 'PLAYER_PROP_HOME_RUN',
  PlayerPropKickingPoints = 'PLAYER_PROP_KICKING_POINTS',
  PlayerPropLastTouchdown = 'PLAYER_PROP_LAST_TOUCHDOWN',
  PlayerPropLongestCompletion = 'PLAYER_PROP_LONGEST_COMPLETION',
  PlayerPropLongestReception = 'PLAYER_PROP_LONGEST_RECEPTION',
  PlayerPropLongestRush = 'PLAYER_PROP_LONGEST_RUSH',
  PlayerPropPasses = 'PLAYER_PROP_PASSES',
  PlayerPropPassingAttempts = 'PLAYER_PROP_PASSING_ATTEMPTS',
  PlayerPropPassingCompletions = 'PLAYER_PROP_PASSING_COMPLETIONS',
  PlayerPropPassingRushingYards = 'PLAYER_PROP_PASSING_RUSHING_YARDS',
  PlayerPropPassingTouchdowns = 'PLAYER_PROP_PASSING_TOUCHDOWNS',
  PlayerPropPassingYards = 'PLAYER_PROP_PASSING_YARDS',
  PlayerPropPoints = 'PLAYER_PROP_POINTS',
  PlayerPropPointsAssists = 'PLAYER_PROP_POINTS_ASSISTS',
  PlayerPropPointsAssistsRebounds = 'PLAYER_PROP_POINTS_ASSISTS_REBOUNDS',
  PlayerPropPointsBlocks = 'PLAYER_PROP_POINTS_BLOCKS',
  PlayerPropPointsFirstQuarter = 'PLAYER_PROP_POINTS_FIRST_QUARTER',
  PlayerPropPointsFourthQuarter = 'PLAYER_PROP_POINTS_FOURTH_QUARTER',
  PlayerPropPointsRebounds = 'PLAYER_PROP_POINTS_REBOUNDS',
  PlayerPropPointsSecondQuarter = 'PLAYER_PROP_POINTS_SECOND_QUARTER',
  PlayerPropPointsThirdQuarter = 'PLAYER_PROP_POINTS_THIRD_QUARTER',
  PlayerPropPowerPlayPoints = 'PLAYER_PROP_POWER_PLAY_POINTS',
  PlayerPropRbi = 'PLAYER_PROP_RBI',
  PlayerPropRebounds = 'PLAYER_PROP_REBOUNDS',
  PlayerPropReboundsAssists = 'PLAYER_PROP_REBOUNDS_ASSISTS',
  PlayerPropReboundsFirstQuarter = 'PLAYER_PROP_REBOUNDS_FIRST_QUARTER',
  PlayerPropReboundsFourthQuarter = 'PLAYER_PROP_REBOUNDS_FOURTH_QUARTER',
  PlayerPropReboundsSecondQuarter = 'PLAYER_PROP_REBOUNDS_SECOND_QUARTER',
  PlayerPropReboundsThirdQuarter = 'PLAYER_PROP_REBOUNDS_THIRD_QUARTER',
  PlayerPropReceivingYards = 'PLAYER_PROP_RECEIVING_YARDS',
  PlayerPropRedCard = 'PLAYER_PROP_RED_CARD',
  PlayerPropRun = 'PLAYER_PROP_RUN',
  PlayerPropRunHitRbi = 'PLAYER_PROP_RUN_HIT_RBI',
  PlayerPropRushingAttempts = 'PLAYER_PROP_RUSHING_ATTEMPTS',
  PlayerPropRushingYards = 'PLAYER_PROP_RUSHING_YARDS',
  PlayerPropSacks = 'PLAYER_PROP_SACKS',
  PlayerPropScoreAndAssist = 'PLAYER_PROP_SCORE_AND_ASSIST',
  PlayerPropScoreOrAssist = 'PLAYER_PROP_SCORE_OR_ASSIST',
  PlayerPropShots = 'PLAYER_PROP_SHOTS',
  PlayerPropShotsEachHalf = 'PLAYER_PROP_SHOTS_EACH_HALF',
  PlayerPropShotsFirstHalf = 'PLAYER_PROP_SHOTS_FIRST_HALF',
  PlayerPropShotsOnGoal = 'PLAYER_PROP_SHOTS_ON_GOAL',
  PlayerPropShotsOnGoalEachHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_EACH_HALF',
  PlayerPropShotsOnGoalFirstHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_FIRST_HALF',
  PlayerPropShotsOnGoalSecondHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_SECOND_HALF',
  PlayerPropShotsSaved = 'PLAYER_PROP_SHOTS_SAVED',
  PlayerPropShotsSecondHalf = 'PLAYER_PROP_SHOTS_SECOND_HALF',
  PlayerPropShutout = 'PLAYER_PROP_SHUTOUT',
  PlayerPropSingle = 'PLAYER_PROP_SINGLE',
  PlayerPropSoloTackles = 'PLAYER_PROP_SOLO_TACKLES',
  PlayerPropSteals = 'PLAYER_PROP_STEALS',
  PlayerPropStealsBlocks = 'PLAYER_PROP_STEALS_BLOCKS',
  PlayerPropStolenBase = 'PLAYER_PROP_STOLEN_BASE',
  PlayerPropTacklesAssists = 'PLAYER_PROP_TACKLES_ASSISTS',
  PlayerPropTackleSoloAndAssist = 'PLAYER_PROP_TACKLE_SOLO_AND_ASSIST',
  PlayerPropThreePointer = 'PLAYER_PROP_THREE_POINTER',
  PlayerPropThrownEarnedRun = 'PLAYER_PROP_THROWN_EARNED_RUN',
  PlayerPropThrownHits = 'PLAYER_PROP_THROWN_HITS',
  PlayerPropThrownInterceptions = 'PLAYER_PROP_THROWN_INTERCEPTIONS',
  PlayerPropThrownStrikeouts = 'PLAYER_PROP_THROWN_STRIKEOUTS',
  PlayerPropThrownWalk = 'PLAYER_PROP_THROWN_WALK',
  PlayerPropTotalReceptions = 'PLAYER_PROP_TOTAL_RECEPTIONS',
  PlayerPropTotalScrimmageYards = 'PLAYER_PROP_TOTAL_SCRIMMAGE_YARDS',
  PlayerPropTriple = 'PLAYER_PROP_TRIPLE',
  PlayerPropTripleDouble = 'PLAYER_PROP_TRIPLE_DOUBLE',
  PlayerPropTurnovers = 'PLAYER_PROP_TURNOVERS',
  PlayerPropTurnoversSteals = 'PLAYER_PROP_TURNOVERS_STEALS',
  PlayerPropTurnoversStealsBlocks = 'PLAYER_PROP_TURNOVERS_STEALS_BLOCKS',
  PlayerPropYellowCard = 'PLAYER_PROP_YELLOW_CARD',
  RaceToPoints = 'RACE_TO_POINTS',
  RaceToPoints_3Way = 'RACE_TO_POINTS_3_WAY',
  RaceToPointsFirstHalf = 'RACE_TO_POINTS_FIRST_HALF',
  RaceToPointsFirstHalf_3Way = 'RACE_TO_POINTS_FIRST_HALF_3_WAY',
  RaceToPointsFirstQuarter = 'RACE_TO_POINTS_FIRST_QUARTER',
  RaceToPointsFirstQuarter_3Way = 'RACE_TO_POINTS_FIRST_QUARTER_3_WAY',
  RaceToPointsFourthQuarter = 'RACE_TO_POINTS_FOURTH_QUARTER',
  RaceToPointsFourthQuarter_3Way = 'RACE_TO_POINTS_FOURTH_QUARTER_3_WAY',
  RaceToPointsSecondHalf = 'RACE_TO_POINTS_SECOND_HALF',
  RaceToPointsSecondHalf_3Way = 'RACE_TO_POINTS_SECOND_HALF_3_WAY',
  RaceToPointsSecondQuarter = 'RACE_TO_POINTS_SECOND_QUARTER',
  RaceToPointsSecondQuarter_3Way = 'RACE_TO_POINTS_SECOND_QUARTER_3_WAY',
  RaceToPointsThirdQuarter = 'RACE_TO_POINTS_THIRD_QUARTER',
  RaceToPointsThirdQuarter_3Way = 'RACE_TO_POINTS_THIRD_QUARTER_3_WAY',
  Spread = 'SPREAD',
  Spread_3Way = 'SPREAD_3_WAY',
  SpreadCards = 'SPREAD_CARDS',
  SpreadCards_3Way = 'SPREAD_CARDS_3_WAY',
  SpreadCorners = 'SPREAD_CORNERS',
  SpreadEighthInning = 'SPREAD_EIGHTH_INNING',
  SpreadFifthInning = 'SPREAD_FIFTH_INNING',
  SpreadFirstHalf = 'SPREAD_FIRST_HALF',
  SpreadFirstHalf_3Way = 'SPREAD_FIRST_HALF_3_WAY',
  SpreadFirstInning = 'SPREAD_FIRST_INNING',
  SpreadFirstQuarter = 'SPREAD_FIRST_QUARTER',
  SpreadFirstQuarter_3Way = 'SPREAD_FIRST_QUARTER_3_WAY',
  SpreadFourthInning = 'SPREAD_FOURTH_INNING',
  SpreadFourthQuarter = 'SPREAD_FOURTH_QUARTER',
  SpreadFourthQuarter_3Way = 'SPREAD_FOURTH_QUARTER_3_WAY',
  SpreadNinthInning = 'SPREAD_NINTH_INNING',
  SpreadNoOt = 'SPREAD_NO_OT',
  SpreadNoOt_3Way = 'SPREAD_NO_OT_3_WAY',
  SpreadSecondHalf = 'SPREAD_SECOND_HALF',
  SpreadSecondHalfNoOt = 'SPREAD_SECOND_HALF_NO_OT',
  SpreadSecondHalfNoOt_3Way = 'SPREAD_SECOND_HALF_NO_OT_3_WAY',
  SpreadSecondInning = 'SPREAD_SECOND_INNING',
  SpreadSecondQuarter = 'SPREAD_SECOND_QUARTER',
  SpreadSecondQuarter_3Way = 'SPREAD_SECOND_QUARTER_3_WAY',
  SpreadSeventhInning = 'SPREAD_SEVENTH_INNING',
  SpreadSixthInning = 'SPREAD_SIXTH_INNING',
  SpreadTenthInning = 'SPREAD_TENTH_INNING',
  SpreadThirdInning = 'SPREAD_THIRD_INNING',
  SpreadThirdQuarter = 'SPREAD_THIRD_QUARTER',
  SpreadThirdQuarter_3Way = 'SPREAD_THIRD_QUARTER_3_WAY',
  TeamAwardedPenalty = 'TEAM_AWARDED_PENALTY',
  TeamMostCards = 'TEAM_MOST_CARDS',
  TeamMostCards_3Way = 'TEAM_MOST_CARDS_3_WAY',
  TeamMostCardsSpread = 'TEAM_MOST_CARDS_SPREAD',
  TeamMostCardsSpread_3Way = 'TEAM_MOST_CARDS_SPREAD_3_WAY',
  TeamMostCorners_3Way = 'TEAM_MOST_CORNERS_3_WAY',
  TeamMostCornersSpread_3Way = 'TEAM_MOST_CORNERS_SPREAD_3_WAY',
  TeamMostOffsides_3Way = 'TEAM_MOST_OFFSIDES_3_WAY',
  TeamScoreBothHalves = 'TEAM_SCORE_BOTH_HALVES',
  TeamScoreFirst = 'TEAM_SCORE_FIRST',
  TeamScoreFirst_3Way = 'TEAM_SCORE_FIRST_3_WAY',
  TeamScoreFirstFirstHalf_3Way = 'TEAM_SCORE_FIRST_FIRST_HALF_3_WAY',
  TeamScoreFirstSecondHalf = 'TEAM_SCORE_FIRST_SECOND_HALF',
  TeamScoreFirstSecondHalf_3Way = 'TEAM_SCORE_FIRST_SECOND_HALF_3_WAY',
  TeamScoreFromPenalty = 'TEAM_SCORE_FROM_PENALTY',
  TeamScoreLast = 'TEAM_SCORE_LAST',
  TeamScoreLast_3Way = 'TEAM_SCORE_LAST_3_WAY',
  TeamScoreLastFirstHalf_3Way = 'TEAM_SCORE_LAST_FIRST_HALF_3_WAY',
  TeamScoreLastSecondHalf_3Way = 'TEAM_SCORE_LAST_SECOND_HALF_3_WAY',
  TeamWinningAtHTorFt = 'TEAM_WINNING_AT_H_TOR_FT',
  TeamWinBothHalves = 'TEAM_WIN_BOTH_HALVES',
  TeamWinBothHalves_3Way = 'TEAM_WIN_BOTH_HALVES_3_WAY',
  TeamWinCleanSheet = 'TEAM_WIN_CLEAN_SHEET',
  TeamWinCleanSheetFirstHalf = 'TEAM_WIN_CLEAN_SHEET_FIRST_HALF',
  TeamWinCleanSheetSecondHalf = 'TEAM_WIN_CLEAN_SHEET_SECOND_HALF',
  TeamWinEitherHalves = 'TEAM_WIN_EITHER_HALVES',
  TeamWinEitherHalves_3Way = 'TEAM_WIN_EITHER_HALVES_3_WAY',
  TeamWinWithShutout = 'TEAM_WIN_WITH_SHUTOUT',
  TeamWinWithShutoutFirstHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_FIRST_HALF_NO_OT',
  TeamWinWithShutoutNoOt = 'TEAM_WIN_WITH_SHUTOUT_NO_OT',
  TeamWinWithShutoutSecondHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_SECOND_HALF_NO_OT',
  TotalDoublesTeam = 'TOTAL_DOUBLES_TEAM',
  TotalGameAssistsTeam = 'TOTAL_GAME_ASSISTS_TEAM',
  TotalGameBases = 'TOTAL_GAME_BASES',
  TotalGameBasesStolen = 'TOTAL_GAME_BASES_STOLEN',
  TotalGameBasesStolenTeam = 'TOTAL_GAME_BASES_STOLEN_TEAM',
  TotalGameBasesTeam = 'TOTAL_GAME_BASES_TEAM',
  TotalGameBlocksTeam = 'TOTAL_GAME_BLOCKS_TEAM',
  TotalGameCards = 'TOTAL_GAME_CARDS',
  TotalGameCardsFirstHalf = 'TOTAL_GAME_CARDS_FIRST_HALF',
  TotalGameCardsSecondHalfNoOt = 'TOTAL_GAME_CARDS_SECOND_HALF_NO_OT',
  TotalGameCardsTeam = 'TOTAL_GAME_CARDS_TEAM',
  TotalGameCorners = 'TOTAL_GAME_CORNERS',
  TotalGameCornersFirstHalf = 'TOTAL_GAME_CORNERS_FIRST_HALF',
  TotalGameCornersSecondHalf = 'TOTAL_GAME_CORNERS_SECOND_HALF',
  TotalGameCornersTeam = 'TOTAL_GAME_CORNERS_TEAM',
  TotalGameCornersTeamFirstHalf = 'TOTAL_GAME_CORNERS_TEAM_FIRST_HALF',
  TotalGameCornersTeamSecondHalf = 'TOTAL_GAME_CORNERS_TEAM_SECOND_HALF',
  TotalGameDouble = 'TOTAL_GAME_DOUBLE',
  TotalGameFieldGoalsMade = 'TOTAL_GAME_FIELD_GOALS_MADE',
  TotalGameFoulsConceded = 'TOTAL_GAME_FOULS_CONCEDED',
  TotalGameFoulsConcededTeam = 'TOTAL_GAME_FOULS_CONCEDED_TEAM',
  TotalGameHits = 'TOTAL_GAME_HITS',
  TotalGameHomeRuns = 'TOTAL_GAME_HOME_RUNS',
  TotalGameOffsides = 'TOTAL_GAME_OFFSIDES',
  TotalGameOffsidesFirstHalf = 'TOTAL_GAME_OFFSIDES_FIRST_HALF',
  TotalGameOffsidesSecondHalf = 'TOTAL_GAME_OFFSIDES_SECOND_HALF',
  TotalGameOffsidesSpread = 'TOTAL_GAME_OFFSIDES_SPREAD',
  TotalGameOffsidesTeam = 'TOTAL_GAME_OFFSIDES_TEAM',
  TotalGamePoints = 'TOTAL_GAME_POINTS',
  TotalGamePoints_3Way = 'TOTAL_GAME_POINTS_3_WAY',
  TotalGamePointsBandMulti = 'TOTAL_GAME_POINTS_BAND_MULTI',
  TotalGamePointsEighthInning = 'TOTAL_GAME_POINTS_EIGHTH_INNING',
  TotalGamePointsFifthInning = 'TOTAL_GAME_POINTS_FIFTH_INNING',
  TotalGamePointsFirstHalf = 'TOTAL_GAME_POINTS_FIRST_HALF',
  TotalGamePointsFirstInning = 'TOTAL_GAME_POINTS_FIRST_INNING',
  TotalGamePointsFirstQuarter = 'TOTAL_GAME_POINTS_FIRST_QUARTER',
  TotalGamePointsFourthInning = 'TOTAL_GAME_POINTS_FOURTH_INNING',
  TotalGamePointsFourthQuarter = 'TOTAL_GAME_POINTS_FOURTH_QUARTER',
  TotalGamePointsNinthInning = 'TOTAL_GAME_POINTS_NINTH_INNING',
  TotalGamePointsNoOt = 'TOTAL_GAME_POINTS_NO_OT',
  TotalGamePointsSecondHalf = 'TOTAL_GAME_POINTS_SECOND_HALF',
  TotalGamePointsSecondHalfNoOt = 'TOTAL_GAME_POINTS_SECOND_HALF_NO_OT',
  TotalGamePointsSecondInning = 'TOTAL_GAME_POINTS_SECOND_INNING',
  TotalGamePointsSecondQuarter = 'TOTAL_GAME_POINTS_SECOND_QUARTER',
  TotalGamePointsSeventhInning = 'TOTAL_GAME_POINTS_SEVENTH_INNING',
  TotalGamePointsSixthInning = 'TOTAL_GAME_POINTS_SIXTH_INNING',
  TotalGamePointsTeam = 'TOTAL_GAME_POINTS_TEAM',
  TotalGamePointsTeamEighthInning = 'TOTAL_GAME_POINTS_TEAM_EIGHTH_INNING',
  TotalGamePointsTeamFifthInning = 'TOTAL_GAME_POINTS_TEAM_FIFTH_INNING',
  TotalGamePointsTeamFirstHalf = 'TOTAL_GAME_POINTS_TEAM_FIRST_HALF',
  TotalGamePointsTeamFirstInning = 'TOTAL_GAME_POINTS_TEAM_FIRST_INNING',
  TotalGamePointsTeamFirstQuarter = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER',
  TotalGamePointsTeamFirstQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER_EXACT',
  TotalGamePointsTeamFourthInning = 'TOTAL_GAME_POINTS_TEAM_FOURTH_INNING',
  TotalGamePointsTeamFourthQuarter = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER',
  TotalGamePointsTeamFourthQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER_EXACT',
  TotalGamePointsTeamNinthInning = 'TOTAL_GAME_POINTS_TEAM_NINTH_INNING',
  TotalGamePointsTeamNoOt = 'TOTAL_GAME_POINTS_TEAM_NO_OT',
  TotalGamePointsTeamSecondHalf = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF',
  TotalGamePointsTeamSecondHalfNoOt = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF_NO_OT',
  TotalGamePointsTeamSecondInning = 'TOTAL_GAME_POINTS_TEAM_SECOND_INNING',
  TotalGamePointsTeamSecondQuarter = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER',
  TotalGamePointsTeamSecondQuarterExact = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER_EXACT',
  TotalGamePointsTeamSeventhInning = 'TOTAL_GAME_POINTS_TEAM_SEVENTH_INNING',
  TotalGamePointsTeamSixthInning = 'TOTAL_GAME_POINTS_TEAM_SIXTH_INNING',
  TotalGamePointsTeamTenthInning = 'TOTAL_GAME_POINTS_TEAM_TENTH_INNING',
  TotalGamePointsTeamThirdInning = 'TOTAL_GAME_POINTS_TEAM_THIRD_INNING',
  TotalGamePointsTeamThirdQuarter = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER',
  TotalGamePointsTeamThirdQuarterExact = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER_EXACT',
  TotalGamePointsTenthInning = 'TOTAL_GAME_POINTS_TENTH_INNING',
  TotalGamePointsThirdInning = 'TOTAL_GAME_POINTS_THIRD_INNING',
  TotalGamePointsThirdQuarter = 'TOTAL_GAME_POINTS_THIRD_QUARTER',
  TotalGamePowerPlayGoals = 'TOTAL_GAME_POWER_PLAY_GOALS',
  TotalGamePowerPlayGoalsTeam = 'TOTAL_GAME_POWER_PLAY_GOALS_TEAM',
  TotalGameReboundsTeam = 'TOTAL_GAME_REBOUNDS_TEAM',
  TotalGameSacks = 'TOTAL_GAME_SACKS',
  TotalGameShortHandedGoals = 'TOTAL_GAME_SHORT_HANDED_GOALS',
  TotalGameShots = 'TOTAL_GAME_SHOTS',
  TotalGameShotsOnGoal = 'TOTAL_GAME_SHOTS_ON_GOAL',
  TotalGameShotsOnGoalFirstHalf = 'TOTAL_GAME_SHOTS_ON_GOAL_FIRST_HALF',
  TotalGameShotsOnGoalSecondHalfNoOt = 'TOTAL_GAME_SHOTS_ON_GOAL_SECOND_HALF_NO_OT',
  TotalGameShotsOnGoalSpread = 'TOTAL_GAME_SHOTS_ON_GOAL_SPREAD',
  TotalGameShotsOnGoalTeam = 'TOTAL_GAME_SHOTS_ON_GOAL_TEAM',
  TotalGameShotsSavedTeam = 'TOTAL_GAME_SHOTS_SAVED_TEAM',
  TotalGameShotsTeam = 'TOTAL_GAME_SHOTS_TEAM',
  TotalGameSingle = 'TOTAL_GAME_SINGLE',
  TotalGameStealsTeam = 'TOTAL_GAME_STEALS_TEAM',
  TotalGameStrikeouts = 'TOTAL_GAME_STRIKEOUTS',
  TotalGameThreesTeam = 'TOTAL_GAME_THREES_TEAM',
  TotalGameTouchdowns = 'TOTAL_GAME_TOUCHDOWNS',
  TotalGameTouchdownsFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_FIRST_HALF',
  TotalGameTouchdownsFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_FIRST_QUARTER',
  TotalGameTouchdownsFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_FOURTH_QUARTER',
  TotalGameTouchdownsNoOt = 'TOTAL_GAME_TOUCHDOWNS_NO_OT',
  TotalGameTouchdownsSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_SECOND_HALF',
  TotalGameTouchdownsSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_SECOND_QUARTER',
  TotalGameTouchdownsTeam = 'TOTAL_GAME_TOUCHDOWNS_TEAM',
  TotalGameTouchdownsTeamFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_HALF',
  TotalGameTouchdownsTeamFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_QUARTER',
  TotalGameTouchdownsTeamFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FOURTH_QUARTER',
  TotalGameTouchdownsTeamSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF',
  TotalGameTouchdownsTeamSecondHalfNoOt = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF_NO_OT',
  TotalGameTouchdownsTeamSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_QUARTER',
  TotalGameTouchdownsTeamThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_THIRD_QUARTER',
  TotalGameTouchdownsThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_THIRD_QUARTER',
  TotalGameTriple = 'TOTAL_GAME_TRIPLE',
  TotalGameWalks = 'TOTAL_GAME_WALKS',
  TotalGameYellowCards = 'TOTAL_GAME_YELLOW_CARDS',
  TotalGameYellowCardsFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_FIRST_HALF',
  TotalGameYellowCardsSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_SECOND_HALF',
  TotalGameYellowCardsTeam = 'TOTAL_GAME_YELLOW_CARDS_TEAM',
  TotalGameYellowCardsTeamFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_FIRST_HALF',
  TotalGameYellowCardsTeamSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_SECOND_HALF',
  TotalHitTeam = 'TOTAL_HIT_TEAM',
  TotalSinglesTeam = 'TOTAL_SINGLES_TEAM',
  TotalTriplesTeam = 'TOTAL_TRIPLES_TEAM',
  ToMakePlayoffs = 'TO_MAKE_PLAYOFFS',
  WinningMarginBandsMulti = 'WINNING_MARGIN_BANDS_MULTI',
  WinMarginMulti = 'WIN_MARGIN_MULTI',
  WireToWireMulti = 'WIRE_TO_WIRE_MULTI'
}

export enum BetMarketTypeEnumTypeTwo {
  DoubleResultMulti = 'DOUBLE_RESULT_MULTI',
  FirstFieldGoalTeam = 'FIRST_FIELD_GOAL_TEAM',
  FirstFieldGoalTeamExactMulti = 'FIRST_FIELD_GOAL_TEAM_EXACT_MULTI',
  FirstFieldGoalType = 'FIRST_FIELD_GOAL_TYPE',
  GameEmptyNetGoal = 'GAME_EMPTY_NET_GOAL',
  GameGoalScoredBothHalves = 'GAME_GOAL_SCORED_BOTH_HALVES',
  GameGoalScoredBothTeams = 'GAME_GOAL_SCORED_BOTH_TEAMS',
  GameGoalScoredBothTeams_3Way = 'GAME_GOAL_SCORED_BOTH_TEAMS_3_WAY',
  GameGoalScoredBothTeamsBothHalves = 'GAME_GOAL_SCORED_BOTH_TEAMS_BOTH_HALVES',
  GameGoalScoredBothTeamsFirstHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_FIRST_HALF',
  GameGoalScoredBothTeamsNoDraw = 'GAME_GOAL_SCORED_BOTH_TEAMS_NO_DRAW',
  GameGoalScoredBothTeamsSecondHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_SECOND_HALF',
  GameGoalScoredFirstHalf = 'GAME_GOAL_SCORED_FIRST_HALF',
  GameGoalScoredSecondHalf = 'GAME_GOAL_SCORED_SECOND_HALF',
  GameGrandSlam = 'GAME_GRAND_SLAM',
  GameOvertime = 'GAME_OVERTIME',
  GameOwnGoal = 'GAME_OWN_GOAL',
  GamePenalityAwarded = 'GAME_PENALITY_AWARDED',
  GameRedCardGiven = 'GAME_RED_CARD_GIVEN',
  MoneyLine = 'MONEY_LINE',
  MoneyLine_3Way = 'MONEY_LINE_3_WAY',
  MoneyLineEighthInning = 'MONEY_LINE_EIGHTH_INNING',
  MoneyLineEighthInning_3Way = 'MONEY_LINE_EIGHTH_INNING_3_WAY',
  MoneyLineFifthInning = 'MONEY_LINE_FIFTH_INNING',
  MoneyLineFifthInning_3Way = 'MONEY_LINE_FIFTH_INNING_3_WAY',
  MoneyLineFirstHalf = 'MONEY_LINE_FIRST_HALF',
  MoneyLineFirstHalf_3Way = 'MONEY_LINE_FIRST_HALF_3_WAY',
  MoneyLineFirstInning = 'MONEY_LINE_FIRST_INNING',
  MoneyLineFirstInning_3Way = 'MONEY_LINE_FIRST_INNING_3_WAY',
  MoneyLineFirstQuarter = 'MONEY_LINE_FIRST_QUARTER',
  MoneyLineFirstQuarter_3Way = 'MONEY_LINE_FIRST_QUARTER_3_WAY',
  MoneyLineFourthInning = 'MONEY_LINE_FOURTH_INNING',
  MoneyLineFourthInning_3Way = 'MONEY_LINE_FOURTH_INNING_3_WAY',
  MoneyLineFourthQuarter = 'MONEY_LINE_FOURTH_QUARTER',
  MoneyLineFourthQuarter_3Way = 'MONEY_LINE_FOURTH_QUARTER_3_WAY',
  MoneyLineNinthInning = 'MONEY_LINE_NINTH_INNING',
  MoneyLineNinthInning_3Way = 'MONEY_LINE_NINTH_INNING_3_WAY',
  MoneyLineNoOt = 'MONEY_LINE_NO_OT',
  MoneyLineNoOt_3Way = 'MONEY_LINE_NO_OT_3_WAY',
  MoneyLineSecondHalf = 'MONEY_LINE_SECOND_HALF',
  MoneyLineSecondHalf_3Way = 'MONEY_LINE_SECOND_HALF_3_WAY',
  MoneyLineSecondHalfNoOt = 'MONEY_LINE_SECOND_HALF_NO_OT',
  MoneyLineSecondHalfNoOt_3Way = 'MONEY_LINE_SECOND_HALF_NO_OT_3_WAY',
  MoneyLineSecondInning = 'MONEY_LINE_SECOND_INNING',
  MoneyLineSecondInning_3Way = 'MONEY_LINE_SECOND_INNING_3_WAY',
  MoneyLineSecondQuarter = 'MONEY_LINE_SECOND_QUARTER',
  MoneyLineSecondQuarter_3Way = 'MONEY_LINE_SECOND_QUARTER_3_WAY',
  MoneyLineSeventhInning = 'MONEY_LINE_SEVENTH_INNING',
  MoneyLineSeventhInning_3Way = 'MONEY_LINE_SEVENTH_INNING_3_WAY',
  MoneyLineSixthInning = 'MONEY_LINE_SIXTH_INNING',
  MoneyLineSixthInning_3Way = 'MONEY_LINE_SIXTH_INNING_3_WAY',
  MoneyLineTenthInning = 'MONEY_LINE_TENTH_INNING',
  MoneyLineTenthInning_3Way = 'MONEY_LINE_TENTH_INNING_3_WAY',
  MoneyLineThirdInning = 'MONEY_LINE_THIRD_INNING',
  MoneyLineThirdInning_3Way = 'MONEY_LINE_THIRD_INNING_3_WAY',
  MoneyLineThirdQuarter = 'MONEY_LINE_THIRD_QUARTER',
  MoneyLineThirdQuarter_3Way = 'MONEY_LINE_THIRD_QUARTER_3_WAY',
  MoneyLineToQualify = 'MONEY_LINE_TO_QUALIFY',
  PlayerFirstFieldGoalExactMulti = 'PLAYER_FIRST_FIELD_GOAL_EXACT_MULTI',
  PlayerFirstFieldGoalMulti = 'PLAYER_FIRST_FIELD_GOAL_MULTI',
  PlayerFirstFieldGoalTypeMulti = 'PLAYER_FIRST_FIELD_GOAL_TYPE_MULTI',
  PlayerPropAnyTimeTouchdown = 'PLAYER_PROP_ANY_TIME_TOUCHDOWN',
  PlayerPropAssists = 'PLAYER_PROP_ASSISTS',
  PlayerPropAssistsFirstQuarter = 'PLAYER_PROP_ASSISTS_FIRST_QUARTER',
  PlayerPropAssistsFourthQuarter = 'PLAYER_PROP_ASSISTS_FOURTH_QUARTER',
  PlayerPropAssistsSecondQuarter = 'PLAYER_PROP_ASSISTS_SECOND_QUARTER',
  PlayerPropAssistsThirdQuarter = 'PLAYER_PROP_ASSISTS_THIRD_QUARTER',
  PlayerPropBases = 'PLAYER_PROP_BASES',
  PlayerPropBattedStrikeouts = 'PLAYER_PROP_BATTED_STRIKEOUTS',
  PlayerPropBattedWalk = 'PLAYER_PROP_BATTED_WALK',
  PlayerPropBlockedShots = 'PLAYER_PROP_BLOCKED_SHOTS',
  PlayerPropBlocks = 'PLAYER_PROP_BLOCKS',
  PlayerPropCard = 'PLAYER_PROP_CARD',
  PlayerPropCaughtInterceptions = 'PLAYER_PROP_CAUGHT_INTERCEPTIONS',
  PlayerPropDouble = 'PLAYER_PROP_DOUBLE',
  PlayerPropDoubleDouble = 'PLAYER_PROP_DOUBLE_DOUBLE',
  PlayerPropExtraPointMade = 'PLAYER_PROP_EXTRA_POINT_MADE',
  PlayerPropFieldGoalsMade = 'PLAYER_PROP_FIELD_GOALS_MADE',
  PlayerPropFirstTouchdown = 'PLAYER_PROP_FIRST_TOUCHDOWN',
  PlayerPropGoalsAgainst = 'PLAYER_PROP_GOALS_AGAINST',
  PlayerPropGoalsScored = 'PLAYER_PROP_GOALS_SCORED',
  PlayerPropGrandSlam = 'PLAYER_PROP_GRAND_SLAM',
  PlayerPropHit = 'PLAYER_PROP_HIT',
  PlayerPropHomeRun = 'PLAYER_PROP_HOME_RUN',
  PlayerPropKickingPoints = 'PLAYER_PROP_KICKING_POINTS',
  PlayerPropLastTouchdown = 'PLAYER_PROP_LAST_TOUCHDOWN',
  PlayerPropLongestCompletion = 'PLAYER_PROP_LONGEST_COMPLETION',
  PlayerPropLongestReception = 'PLAYER_PROP_LONGEST_RECEPTION',
  PlayerPropLongestRush = 'PLAYER_PROP_LONGEST_RUSH',
  PlayerPropPasses = 'PLAYER_PROP_PASSES',
  PlayerPropPassingAttempts = 'PLAYER_PROP_PASSING_ATTEMPTS',
  PlayerPropPassingCompletions = 'PLAYER_PROP_PASSING_COMPLETIONS',
  PlayerPropPassingRushingYards = 'PLAYER_PROP_PASSING_RUSHING_YARDS',
  PlayerPropPassingTouchdowns = 'PLAYER_PROP_PASSING_TOUCHDOWNS',
  PlayerPropPassingYards = 'PLAYER_PROP_PASSING_YARDS',
  PlayerPropPoints = 'PLAYER_PROP_POINTS',
  PlayerPropPointsAssists = 'PLAYER_PROP_POINTS_ASSISTS',
  PlayerPropPointsAssistsRebounds = 'PLAYER_PROP_POINTS_ASSISTS_REBOUNDS',
  PlayerPropPointsBlocks = 'PLAYER_PROP_POINTS_BLOCKS',
  PlayerPropPointsFirstQuarter = 'PLAYER_PROP_POINTS_FIRST_QUARTER',
  PlayerPropPointsFourthQuarter = 'PLAYER_PROP_POINTS_FOURTH_QUARTER',
  PlayerPropPointsRebounds = 'PLAYER_PROP_POINTS_REBOUNDS',
  PlayerPropPointsSecondQuarter = 'PLAYER_PROP_POINTS_SECOND_QUARTER',
  PlayerPropPointsThirdQuarter = 'PLAYER_PROP_POINTS_THIRD_QUARTER',
  PlayerPropPowerPlayPoints = 'PLAYER_PROP_POWER_PLAY_POINTS',
  PlayerPropRbi = 'PLAYER_PROP_RBI',
  PlayerPropRebounds = 'PLAYER_PROP_REBOUNDS',
  PlayerPropReboundsAssists = 'PLAYER_PROP_REBOUNDS_ASSISTS',
  PlayerPropReboundsFirstQuarter = 'PLAYER_PROP_REBOUNDS_FIRST_QUARTER',
  PlayerPropReboundsFourthQuarter = 'PLAYER_PROP_REBOUNDS_FOURTH_QUARTER',
  PlayerPropReboundsSecondQuarter = 'PLAYER_PROP_REBOUNDS_SECOND_QUARTER',
  PlayerPropReboundsThirdQuarter = 'PLAYER_PROP_REBOUNDS_THIRD_QUARTER',
  PlayerPropReceivingYards = 'PLAYER_PROP_RECEIVING_YARDS',
  PlayerPropRedCard = 'PLAYER_PROP_RED_CARD',
  PlayerPropRun = 'PLAYER_PROP_RUN',
  PlayerPropRunHitRbi = 'PLAYER_PROP_RUN_HIT_RBI',
  PlayerPropRushingAttempts = 'PLAYER_PROP_RUSHING_ATTEMPTS',
  PlayerPropRushingYards = 'PLAYER_PROP_RUSHING_YARDS',
  PlayerPropSacks = 'PLAYER_PROP_SACKS',
  PlayerPropScoreAndAssist = 'PLAYER_PROP_SCORE_AND_ASSIST',
  PlayerPropScoreOrAssist = 'PLAYER_PROP_SCORE_OR_ASSIST',
  PlayerPropShots = 'PLAYER_PROP_SHOTS',
  PlayerPropShotsEachHalf = 'PLAYER_PROP_SHOTS_EACH_HALF',
  PlayerPropShotsFirstHalf = 'PLAYER_PROP_SHOTS_FIRST_HALF',
  PlayerPropShotsOnGoal = 'PLAYER_PROP_SHOTS_ON_GOAL',
  PlayerPropShotsOnGoalEachHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_EACH_HALF',
  PlayerPropShotsOnGoalFirstHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_FIRST_HALF',
  PlayerPropShotsOnGoalSecondHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_SECOND_HALF',
  PlayerPropShotsSaved = 'PLAYER_PROP_SHOTS_SAVED',
  PlayerPropShotsSecondHalf = 'PLAYER_PROP_SHOTS_SECOND_HALF',
  PlayerPropShutout = 'PLAYER_PROP_SHUTOUT',
  PlayerPropSingle = 'PLAYER_PROP_SINGLE',
  PlayerPropSoloTackles = 'PLAYER_PROP_SOLO_TACKLES',
  PlayerPropSteals = 'PLAYER_PROP_STEALS',
  PlayerPropStealsBlocks = 'PLAYER_PROP_STEALS_BLOCKS',
  PlayerPropStolenBase = 'PLAYER_PROP_STOLEN_BASE',
  PlayerPropTacklesAssists = 'PLAYER_PROP_TACKLES_ASSISTS',
  PlayerPropTackleSoloAndAssist = 'PLAYER_PROP_TACKLE_SOLO_AND_ASSIST',
  PlayerPropThreePointer = 'PLAYER_PROP_THREE_POINTER',
  PlayerPropThrownEarnedRun = 'PLAYER_PROP_THROWN_EARNED_RUN',
  PlayerPropThrownHits = 'PLAYER_PROP_THROWN_HITS',
  PlayerPropThrownInterceptions = 'PLAYER_PROP_THROWN_INTERCEPTIONS',
  PlayerPropThrownStrikeouts = 'PLAYER_PROP_THROWN_STRIKEOUTS',
  PlayerPropThrownWalk = 'PLAYER_PROP_THROWN_WALK',
  PlayerPropTotalReceptions = 'PLAYER_PROP_TOTAL_RECEPTIONS',
  PlayerPropTotalScrimmageYards = 'PLAYER_PROP_TOTAL_SCRIMMAGE_YARDS',
  PlayerPropTriple = 'PLAYER_PROP_TRIPLE',
  PlayerPropTripleDouble = 'PLAYER_PROP_TRIPLE_DOUBLE',
  PlayerPropTurnovers = 'PLAYER_PROP_TURNOVERS',
  PlayerPropTurnoversSteals = 'PLAYER_PROP_TURNOVERS_STEALS',
  PlayerPropTurnoversStealsBlocks = 'PLAYER_PROP_TURNOVERS_STEALS_BLOCKS',
  PlayerPropYellowCard = 'PLAYER_PROP_YELLOW_CARD',
  RaceToPoints = 'RACE_TO_POINTS',
  RaceToPoints_3Way = 'RACE_TO_POINTS_3_WAY',
  RaceToPointsFirstHalf = 'RACE_TO_POINTS_FIRST_HALF',
  RaceToPointsFirstHalf_3Way = 'RACE_TO_POINTS_FIRST_HALF_3_WAY',
  RaceToPointsFirstQuarter = 'RACE_TO_POINTS_FIRST_QUARTER',
  RaceToPointsFirstQuarter_3Way = 'RACE_TO_POINTS_FIRST_QUARTER_3_WAY',
  RaceToPointsFourthQuarter = 'RACE_TO_POINTS_FOURTH_QUARTER',
  RaceToPointsFourthQuarter_3Way = 'RACE_TO_POINTS_FOURTH_QUARTER_3_WAY',
  RaceToPointsSecondHalf = 'RACE_TO_POINTS_SECOND_HALF',
  RaceToPointsSecondHalf_3Way = 'RACE_TO_POINTS_SECOND_HALF_3_WAY',
  RaceToPointsSecondQuarter = 'RACE_TO_POINTS_SECOND_QUARTER',
  RaceToPointsSecondQuarter_3Way = 'RACE_TO_POINTS_SECOND_QUARTER_3_WAY',
  RaceToPointsThirdQuarter = 'RACE_TO_POINTS_THIRD_QUARTER',
  RaceToPointsThirdQuarter_3Way = 'RACE_TO_POINTS_THIRD_QUARTER_3_WAY',
  Spread = 'SPREAD',
  Spread_3Way = 'SPREAD_3_WAY',
  SpreadCards = 'SPREAD_CARDS',
  SpreadCards_3Way = 'SPREAD_CARDS_3_WAY',
  SpreadCorners = 'SPREAD_CORNERS',
  SpreadEighthInning = 'SPREAD_EIGHTH_INNING',
  SpreadFifthInning = 'SPREAD_FIFTH_INNING',
  SpreadFirstHalf = 'SPREAD_FIRST_HALF',
  SpreadFirstHalf_3Way = 'SPREAD_FIRST_HALF_3_WAY',
  SpreadFirstInning = 'SPREAD_FIRST_INNING',
  SpreadFirstQuarter = 'SPREAD_FIRST_QUARTER',
  SpreadFirstQuarter_3Way = 'SPREAD_FIRST_QUARTER_3_WAY',
  SpreadFourthInning = 'SPREAD_FOURTH_INNING',
  SpreadFourthQuarter = 'SPREAD_FOURTH_QUARTER',
  SpreadFourthQuarter_3Way = 'SPREAD_FOURTH_QUARTER_3_WAY',
  SpreadNinthInning = 'SPREAD_NINTH_INNING',
  SpreadNoOt = 'SPREAD_NO_OT',
  SpreadNoOt_3Way = 'SPREAD_NO_OT_3_WAY',
  SpreadSecondHalf = 'SPREAD_SECOND_HALF',
  SpreadSecondHalfNoOt = 'SPREAD_SECOND_HALF_NO_OT',
  SpreadSecondHalfNoOt_3Way = 'SPREAD_SECOND_HALF_NO_OT_3_WAY',
  SpreadSecondInning = 'SPREAD_SECOND_INNING',
  SpreadSecondQuarter = 'SPREAD_SECOND_QUARTER',
  SpreadSecondQuarter_3Way = 'SPREAD_SECOND_QUARTER_3_WAY',
  SpreadSeventhInning = 'SPREAD_SEVENTH_INNING',
  SpreadSixthInning = 'SPREAD_SIXTH_INNING',
  SpreadTenthInning = 'SPREAD_TENTH_INNING',
  SpreadThirdInning = 'SPREAD_THIRD_INNING',
  SpreadThirdQuarter = 'SPREAD_THIRD_QUARTER',
  SpreadThirdQuarter_3Way = 'SPREAD_THIRD_QUARTER_3_WAY',
  TeamAwardedPenalty = 'TEAM_AWARDED_PENALTY',
  TeamMostCards = 'TEAM_MOST_CARDS',
  TeamMostCards_3Way = 'TEAM_MOST_CARDS_3_WAY',
  TeamMostCardsSpread = 'TEAM_MOST_CARDS_SPREAD',
  TeamMostCardsSpread_3Way = 'TEAM_MOST_CARDS_SPREAD_3_WAY',
  TeamMostCorners_3Way = 'TEAM_MOST_CORNERS_3_WAY',
  TeamMostCornersSpread_3Way = 'TEAM_MOST_CORNERS_SPREAD_3_WAY',
  TeamMostOffsides_3Way = 'TEAM_MOST_OFFSIDES_3_WAY',
  TeamScoreBothHalves = 'TEAM_SCORE_BOTH_HALVES',
  TeamScoreFirst = 'TEAM_SCORE_FIRST',
  TeamScoreFirst_3Way = 'TEAM_SCORE_FIRST_3_WAY',
  TeamScoreFirstFirstHalf_3Way = 'TEAM_SCORE_FIRST_FIRST_HALF_3_WAY',
  TeamScoreFirstSecondHalf = 'TEAM_SCORE_FIRST_SECOND_HALF',
  TeamScoreFirstSecondHalf_3Way = 'TEAM_SCORE_FIRST_SECOND_HALF_3_WAY',
  TeamScoreFromPenalty = 'TEAM_SCORE_FROM_PENALTY',
  TeamScoreLast = 'TEAM_SCORE_LAST',
  TeamScoreLast_3Way = 'TEAM_SCORE_LAST_3_WAY',
  TeamScoreLastFirstHalf_3Way = 'TEAM_SCORE_LAST_FIRST_HALF_3_WAY',
  TeamScoreLastSecondHalf_3Way = 'TEAM_SCORE_LAST_SECOND_HALF_3_WAY',
  TeamWinningAtHTorFt = 'TEAM_WINNING_AT_H_TOR_FT',
  TeamWinBothHalves = 'TEAM_WIN_BOTH_HALVES',
  TeamWinBothHalves_3Way = 'TEAM_WIN_BOTH_HALVES_3_WAY',
  TeamWinCleanSheet = 'TEAM_WIN_CLEAN_SHEET',
  TeamWinCleanSheetFirstHalf = 'TEAM_WIN_CLEAN_SHEET_FIRST_HALF',
  TeamWinCleanSheetSecondHalf = 'TEAM_WIN_CLEAN_SHEET_SECOND_HALF',
  TeamWinEitherHalves = 'TEAM_WIN_EITHER_HALVES',
  TeamWinEitherHalves_3Way = 'TEAM_WIN_EITHER_HALVES_3_WAY',
  TeamWinWithShutout = 'TEAM_WIN_WITH_SHUTOUT',
  TeamWinWithShutoutFirstHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_FIRST_HALF_NO_OT',
  TeamWinWithShutoutNoOt = 'TEAM_WIN_WITH_SHUTOUT_NO_OT',
  TeamWinWithShutoutSecondHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_SECOND_HALF_NO_OT',
  TotalDoublesTeam = 'TOTAL_DOUBLES_TEAM',
  TotalGameAssistsTeam = 'TOTAL_GAME_ASSISTS_TEAM',
  TotalGameBases = 'TOTAL_GAME_BASES',
  TotalGameBasesStolen = 'TOTAL_GAME_BASES_STOLEN',
  TotalGameBasesStolenTeam = 'TOTAL_GAME_BASES_STOLEN_TEAM',
  TotalGameBasesTeam = 'TOTAL_GAME_BASES_TEAM',
  TotalGameBlocksTeam = 'TOTAL_GAME_BLOCKS_TEAM',
  TotalGameCards = 'TOTAL_GAME_CARDS',
  TotalGameCardsFirstHalf = 'TOTAL_GAME_CARDS_FIRST_HALF',
  TotalGameCardsSecondHalfNoOt = 'TOTAL_GAME_CARDS_SECOND_HALF_NO_OT',
  TotalGameCardsTeam = 'TOTAL_GAME_CARDS_TEAM',
  TotalGameCorners = 'TOTAL_GAME_CORNERS',
  TotalGameCornersFirstHalf = 'TOTAL_GAME_CORNERS_FIRST_HALF',
  TotalGameCornersSecondHalf = 'TOTAL_GAME_CORNERS_SECOND_HALF',
  TotalGameCornersTeam = 'TOTAL_GAME_CORNERS_TEAM',
  TotalGameCornersTeamFirstHalf = 'TOTAL_GAME_CORNERS_TEAM_FIRST_HALF',
  TotalGameCornersTeamSecondHalf = 'TOTAL_GAME_CORNERS_TEAM_SECOND_HALF',
  TotalGameDouble = 'TOTAL_GAME_DOUBLE',
  TotalGameFieldGoalsMade = 'TOTAL_GAME_FIELD_GOALS_MADE',
  TotalGameFoulsConceded = 'TOTAL_GAME_FOULS_CONCEDED',
  TotalGameFoulsConcededTeam = 'TOTAL_GAME_FOULS_CONCEDED_TEAM',
  TotalGameHits = 'TOTAL_GAME_HITS',
  TotalGameHomeRuns = 'TOTAL_GAME_HOME_RUNS',
  TotalGameOffsides = 'TOTAL_GAME_OFFSIDES',
  TotalGameOffsidesFirstHalf = 'TOTAL_GAME_OFFSIDES_FIRST_HALF',
  TotalGameOffsidesSecondHalf = 'TOTAL_GAME_OFFSIDES_SECOND_HALF',
  TotalGameOffsidesSpread = 'TOTAL_GAME_OFFSIDES_SPREAD',
  TotalGameOffsidesTeam = 'TOTAL_GAME_OFFSIDES_TEAM',
  TotalGamePoints = 'TOTAL_GAME_POINTS',
  TotalGamePoints_3Way = 'TOTAL_GAME_POINTS_3_WAY',
  TotalGamePointsBandMulti = 'TOTAL_GAME_POINTS_BAND_MULTI',
  TotalGamePointsEighthInning = 'TOTAL_GAME_POINTS_EIGHTH_INNING',
  TotalGamePointsFifthInning = 'TOTAL_GAME_POINTS_FIFTH_INNING',
  TotalGamePointsFirstHalf = 'TOTAL_GAME_POINTS_FIRST_HALF',
  TotalGamePointsFirstInning = 'TOTAL_GAME_POINTS_FIRST_INNING',
  TotalGamePointsFirstQuarter = 'TOTAL_GAME_POINTS_FIRST_QUARTER',
  TotalGamePointsFourthInning = 'TOTAL_GAME_POINTS_FOURTH_INNING',
  TotalGamePointsFourthQuarter = 'TOTAL_GAME_POINTS_FOURTH_QUARTER',
  TotalGamePointsNinthInning = 'TOTAL_GAME_POINTS_NINTH_INNING',
  TotalGamePointsNoOt = 'TOTAL_GAME_POINTS_NO_OT',
  TotalGamePointsSecondHalf = 'TOTAL_GAME_POINTS_SECOND_HALF',
  TotalGamePointsSecondHalfNoOt = 'TOTAL_GAME_POINTS_SECOND_HALF_NO_OT',
  TotalGamePointsSecondInning = 'TOTAL_GAME_POINTS_SECOND_INNING',
  TotalGamePointsSecondQuarter = 'TOTAL_GAME_POINTS_SECOND_QUARTER',
  TotalGamePointsSeventhInning = 'TOTAL_GAME_POINTS_SEVENTH_INNING',
  TotalGamePointsSixthInning = 'TOTAL_GAME_POINTS_SIXTH_INNING',
  TotalGamePointsTeam = 'TOTAL_GAME_POINTS_TEAM',
  TotalGamePointsTeamEighthInning = 'TOTAL_GAME_POINTS_TEAM_EIGHTH_INNING',
  TotalGamePointsTeamFifthInning = 'TOTAL_GAME_POINTS_TEAM_FIFTH_INNING',
  TotalGamePointsTeamFirstHalf = 'TOTAL_GAME_POINTS_TEAM_FIRST_HALF',
  TotalGamePointsTeamFirstInning = 'TOTAL_GAME_POINTS_TEAM_FIRST_INNING',
  TotalGamePointsTeamFirstQuarter = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER',
  TotalGamePointsTeamFirstQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER_EXACT',
  TotalGamePointsTeamFourthInning = 'TOTAL_GAME_POINTS_TEAM_FOURTH_INNING',
  TotalGamePointsTeamFourthQuarter = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER',
  TotalGamePointsTeamFourthQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER_EXACT',
  TotalGamePointsTeamNinthInning = 'TOTAL_GAME_POINTS_TEAM_NINTH_INNING',
  TotalGamePointsTeamNoOt = 'TOTAL_GAME_POINTS_TEAM_NO_OT',
  TotalGamePointsTeamSecondHalf = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF',
  TotalGamePointsTeamSecondHalfNoOt = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF_NO_OT',
  TotalGamePointsTeamSecondInning = 'TOTAL_GAME_POINTS_TEAM_SECOND_INNING',
  TotalGamePointsTeamSecondQuarter = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER',
  TotalGamePointsTeamSecondQuarterExact = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER_EXACT',
  TotalGamePointsTeamSeventhInning = 'TOTAL_GAME_POINTS_TEAM_SEVENTH_INNING',
  TotalGamePointsTeamSixthInning = 'TOTAL_GAME_POINTS_TEAM_SIXTH_INNING',
  TotalGamePointsTeamTenthInning = 'TOTAL_GAME_POINTS_TEAM_TENTH_INNING',
  TotalGamePointsTeamThirdInning = 'TOTAL_GAME_POINTS_TEAM_THIRD_INNING',
  TotalGamePointsTeamThirdQuarter = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER',
  TotalGamePointsTeamThirdQuarterExact = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER_EXACT',
  TotalGamePointsTenthInning = 'TOTAL_GAME_POINTS_TENTH_INNING',
  TotalGamePointsThirdInning = 'TOTAL_GAME_POINTS_THIRD_INNING',
  TotalGamePointsThirdQuarter = 'TOTAL_GAME_POINTS_THIRD_QUARTER',
  TotalGamePowerPlayGoals = 'TOTAL_GAME_POWER_PLAY_GOALS',
  TotalGamePowerPlayGoalsTeam = 'TOTAL_GAME_POWER_PLAY_GOALS_TEAM',
  TotalGameReboundsTeam = 'TOTAL_GAME_REBOUNDS_TEAM',
  TotalGameSacks = 'TOTAL_GAME_SACKS',
  TotalGameShortHandedGoals = 'TOTAL_GAME_SHORT_HANDED_GOALS',
  TotalGameShots = 'TOTAL_GAME_SHOTS',
  TotalGameShotsOnGoal = 'TOTAL_GAME_SHOTS_ON_GOAL',
  TotalGameShotsOnGoalFirstHalf = 'TOTAL_GAME_SHOTS_ON_GOAL_FIRST_HALF',
  TotalGameShotsOnGoalSecondHalfNoOt = 'TOTAL_GAME_SHOTS_ON_GOAL_SECOND_HALF_NO_OT',
  TotalGameShotsOnGoalSpread = 'TOTAL_GAME_SHOTS_ON_GOAL_SPREAD',
  TotalGameShotsOnGoalTeam = 'TOTAL_GAME_SHOTS_ON_GOAL_TEAM',
  TotalGameShotsSavedTeam = 'TOTAL_GAME_SHOTS_SAVED_TEAM',
  TotalGameShotsTeam = 'TOTAL_GAME_SHOTS_TEAM',
  TotalGameSingle = 'TOTAL_GAME_SINGLE',
  TotalGameStealsTeam = 'TOTAL_GAME_STEALS_TEAM',
  TotalGameStrikeouts = 'TOTAL_GAME_STRIKEOUTS',
  TotalGameThreesTeam = 'TOTAL_GAME_THREES_TEAM',
  TotalGameTouchdowns = 'TOTAL_GAME_TOUCHDOWNS',
  TotalGameTouchdownsFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_FIRST_HALF',
  TotalGameTouchdownsFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_FIRST_QUARTER',
  TotalGameTouchdownsFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_FOURTH_QUARTER',
  TotalGameTouchdownsNoOt = 'TOTAL_GAME_TOUCHDOWNS_NO_OT',
  TotalGameTouchdownsSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_SECOND_HALF',
  TotalGameTouchdownsSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_SECOND_QUARTER',
  TotalGameTouchdownsTeam = 'TOTAL_GAME_TOUCHDOWNS_TEAM',
  TotalGameTouchdownsTeamFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_HALF',
  TotalGameTouchdownsTeamFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_QUARTER',
  TotalGameTouchdownsTeamFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FOURTH_QUARTER',
  TotalGameTouchdownsTeamSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF',
  TotalGameTouchdownsTeamSecondHalfNoOt = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF_NO_OT',
  TotalGameTouchdownsTeamSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_QUARTER',
  TotalGameTouchdownsTeamThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_THIRD_QUARTER',
  TotalGameTouchdownsThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_THIRD_QUARTER',
  TotalGameTriple = 'TOTAL_GAME_TRIPLE',
  TotalGameWalks = 'TOTAL_GAME_WALKS',
  TotalGameYellowCards = 'TOTAL_GAME_YELLOW_CARDS',
  TotalGameYellowCardsFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_FIRST_HALF',
  TotalGameYellowCardsSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_SECOND_HALF',
  TotalGameYellowCardsTeam = 'TOTAL_GAME_YELLOW_CARDS_TEAM',
  TotalGameYellowCardsTeamFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_FIRST_HALF',
  TotalGameYellowCardsTeamSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_SECOND_HALF',
  TotalHitTeam = 'TOTAL_HIT_TEAM',
  TotalSinglesTeam = 'TOTAL_SINGLES_TEAM',
  TotalTriplesTeam = 'TOTAL_TRIPLES_TEAM',
  ToMakePlayoffs = 'TO_MAKE_PLAYOFFS',
  WinningMarginBandsMulti = 'WINNING_MARGIN_BANDS_MULTI',
  WinMarginMulti = 'WIN_MARGIN_MULTI',
  WireToWireMulti = 'WIRE_TO_WIRE_MULTI'
}

export enum BetMarketTypeGroupEnum {
  Game = 'GAME',
  Moneyline = 'MONEYLINE',
  PlayerProp = 'PLAYER_PROP',
  RaceTo = 'RACE_TO',
  Spread = 'SPREAD',
  Team = 'TEAM',
  Totals = 'TOTALS',
  Unknown = 'UNKNOWN'
}

export enum BetMarketTypeGroupEnumTypeTwo {
  Game = 'GAME',
  Moneyline = 'MONEYLINE',
  PlayerProp = 'PLAYER_PROP',
  RaceTo = 'RACE_TO',
  Spread = 'SPREAD',
  Team = 'TEAM',
  Totals = 'TOTALS',
  Unknown = 'UNKNOWN'
}

export type BetMarketTypeGroupInfoType = {
  __typename?: 'BetMarketTypeGroupInfoType';
  order: Scalars['UInt']['output'];
  value?: Maybe<BetMarketTypeGroupEnumTypeTwo>;
};

export type BetSiteType = {
  __typename?: 'BetSiteType';
  abbreviation: Scalars['String']['output'];
  enumValue?: Maybe<BetMarketSiteEnumTypeTwo>;
  fullImage: Scalars['String']['output'];
  iconImage: Scalars['String']['output'];
  id: Scalars['Byte']['output'];
  isSisterSite: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  sisterSiteIds?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
};

export type ConstantsType = {
  __typename?: 'ConstantsType';
  betGroups?: Maybe<Array<Maybe<BetMarketTypeGroupInfoType>>>;
  betMarketInfo?: Maybe<Array<Maybe<BetMarketInfoType>>>;
  betMarketTypes?: Maybe<Array<Maybe<BetMarketTypeEnumTypeTwo>>>;
  betSites?: Maybe<Array<Maybe<BetSiteType>>>;
  leagues?: Maybe<Array<Maybe<LeagueEnum>>>;
  sports?: Maybe<Array<Maybe<SportEnum>>>;
};

export type EufaChampionsGameType = {
  __typename?: 'EUFAChampionsGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type EnglishPremierGameType = {
  __typename?: 'EnglishPremierGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type EuroLeagueBbGameType = {
  __typename?: 'EuroLeagueBBGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type ExpectedValueType = {
  __typename?: 'ExpectedValueType';
  americanOdds: Array<Scalars['Int']['output']>;
  americanOddsAverage: Scalars['Int']['output'];
  awayTeam?: Maybe<TeamType>;
  betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  betMarketSiteIds: Array<BetMarketSiteEnum>;
  betValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  foundDateTime?: Maybe<Scalars['Long']['output']>;
  game?: Maybe<IGameType>;
  gameLiveData?: Maybe<GameLiveDataType>;
  homeTeam?: Maybe<TeamType>;
  id: Scalars['ID']['output'];
  league: LeagueEnum;
  player?: Maybe<PlayerType>;
  rOI: Scalars['Decimal']['output'];
  teams?: Maybe<Array<Maybe<TeamType>>>;
  urlBets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  width: Scalars['UInt']['output'];
};

export type FreeBetType = {
  __typename?: 'FreeBetType';
  americanOdds: Array<Scalars['Int']['output']>;
  awayTeam?: Maybe<TeamType>;
  betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  betMarketSiteIds: Array<BetMarketSiteEnum>;
  betValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  conversionRate: Scalars['Decimal']['output'];
  foundDateTime?: Maybe<Scalars['Long']['output']>;
  game?: Maybe<IGameType>;
  gameLiveData?: Maybe<GameLiveDataType>;
  homeTeam?: Maybe<TeamType>;
  id: Scalars['ID']['output'];
  league: LeagueEnum;
  player?: Maybe<PlayerType>;
  teams?: Maybe<Array<Maybe<TeamType>>>;
  urlBets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FrenchLigue1GameType = {
  __typename?: 'FrenchLigue1GameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export enum FuturesDateEnumType {
  Next_24Hours = 'NEXT_24_HOURS',
  Next_48Hours = 'NEXT_48_HOURS',
  Next_72Hours = 'NEXT_72_HOURS'
}

export type GameLiveDataType = {
  __typename?: 'GameLiveDataType';
  additionalData: Scalars['String']['output'];
  awayTeamScore: Scalars['UInt']['output'];
  gameTimeSeconds?: Maybe<Scalars['UInt']['output']>;
  homeTeamPossession: Scalars['Boolean']['output'];
  homeTeamScore: Scalars['UInt']['output'];
  period: Scalars['String']['output'];
};

export type GermanBundesligaGameType = {
  __typename?: 'GermanBundesligaGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type IGameType = EufaChampionsGameType | EnglishPremierGameType | EuroLeagueBbGameType | FrenchLigue1GameType | GermanBundesligaGameType | ItalianSeriaAGameType | LaLlgaGameType | MlbGameType | NbaGameType | NcaabGameType | NcaafGameType | NflGameType | NhlGameType;

export type InputArbitrageSubscriptionRequestType = {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  afterDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  beforeDateTime?: InputMaybe<Scalars['Long']['input']>;
  betMarketTypeGroups?: InputMaybe<Array<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  betMarketTypes?: InputMaybe<Array<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  betSites?: InputMaybe<Array<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  futuresDate?: InputMaybe<FuturesDateEnumType>;
  leagues?: InputMaybe<Array<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  maxAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  maxROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  minAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  minROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  region?: InputMaybe<Scalars['String']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
};

export type InputBetCacheSubscriptionRequestType = {
  betMarketType: BetMarketTypeEnumTypeTwo;
  league: LeagueEnum;
};

export type InputExpectedValueSubscriptionRequestType = {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  afterDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  beforeDateTime?: InputMaybe<Scalars['Long']['input']>;
  betMarketTypeGroups?: InputMaybe<Array<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  betMarketTypes?: InputMaybe<Array<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  betSites?: InputMaybe<Array<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  futuresDate?: InputMaybe<FuturesDateEnumType>;
  leagues?: InputMaybe<Array<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  maxAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  maxROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  minAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  minROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  region?: InputMaybe<Scalars['String']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
};

export type InputFreeBetSubscriptionRequestType = {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  afterDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  beforeDateTime?: InputMaybe<Scalars['Long']['input']>;
  betMarketTypeGroups?: InputMaybe<Array<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  betMarketTypes?: InputMaybe<Array<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  betSites?: InputMaybe<Array<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  country?: InputMaybe<Scalars['String']['input']>;
  freeBetPrimaryBetSite: BetMarketSiteEnumTypeTwo;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  futuresDate?: InputMaybe<FuturesDateEnumType>;
  leagues?: InputMaybe<Array<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  maxAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  maxROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  minAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  minROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  region?: InputMaybe<Scalars['String']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
};

export type InputLowHoldSubscriptionRequestType = {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  afterDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  beforeDateTime?: InputMaybe<Scalars['Long']['input']>;
  betMarketTypeGroups?: InputMaybe<Array<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  betMarketTypes?: InputMaybe<Array<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  betSites?: InputMaybe<Array<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  futuresDate?: InputMaybe<FuturesDateEnumType>;
  leagues?: InputMaybe<Array<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  lowHoldPrimaryBetSite: BetMarketSiteEnumTypeTwo;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  maxAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  maxROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  minAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  minROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  region?: InputMaybe<Scalars['String']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
};

export type InputMiddleSubscriptionRequestType = {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  afterDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  beforeDateTime?: InputMaybe<Scalars['Long']['input']>;
  betMarketTypeGroups?: InputMaybe<Array<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  betMarketTypes?: InputMaybe<Array<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  betSites?: InputMaybe<Array<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The difference between the two values. For example, if you send 1, and the over is 122 and under is 122.5, this bet will now be shown since the distance is not greater than 1. */
  distance?: InputMaybe<Scalars['Decimal']['input']>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  futuresDate?: InputMaybe<FuturesDateEnumType>;
  leagues?: InputMaybe<Array<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  maxAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  maxROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  minAmericanOdds?: InputMaybe<Scalars['Int']['input']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  minROI?: InputMaybe<Scalars['Decimal']['input']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  region?: InputMaybe<Scalars['String']['input']>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
};

export type IpGeoLookupType = {
  __typename?: 'IpGeoLookupType';
  as?: Maybe<Scalars['String']['output']>;
  asName?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<Scalars['String']['output']>;
  continentCode?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  hosting?: Maybe<Scalars['Boolean']['output']>;
  isp?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
  mobile?: Maybe<Scalars['Boolean']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  org?: Maybe<Scalars['String']['output']>;
  proxy?: Maybe<Scalars['Boolean']['output']>;
  query: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
  regionName?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  timezone?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type ItalianSeriaAGameType = {
  __typename?: 'ItalianSeriaAGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type LaLlgaGameType = {
  __typename?: 'LaLlgaGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export enum LeagueEnum {
  EnglishPremier = 'ENGLISH_PREMIER',
  EufaChampions = 'EUFA_CHAMPIONS',
  EuroLeagueBb = 'EURO_LEAGUE_BB',
  FrenchLigue_1 = 'FRENCH_LIGUE_1',
  GermanBundesliga = 'GERMAN_BUNDESLIGA',
  ItalianSeriaA = 'ITALIAN_SERIA_A',
  LaLlga = 'LA_LLGA',
  Mlb = 'MLB',
  Nba = 'NBA',
  Ncaab = 'NCAAB',
  Ncaaf = 'NCAAF',
  NcaaBaseball = 'NCAA_BASEBALL',
  Nfl = 'NFL',
  Nhl = 'NHL'
}

export enum LiveGameStatusEnum {
  All = 'ALL',
  None = 'NONE',
  Timeout = 'TIMEOUT'
}

export type LowHoldType = {
  __typename?: 'LowHoldType';
  americanOdds: Array<Scalars['Int']['output']>;
  awayTeam?: Maybe<TeamType>;
  betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  betMarketSiteIds: Array<BetMarketSiteEnum>;
  betValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  foundDateTime?: Maybe<Scalars['Long']['output']>;
  game?: Maybe<IGameType>;
  gameLiveData?: Maybe<GameLiveDataType>;
  homeTeam?: Maybe<TeamType>;
  id: Scalars['ID']['output'];
  league: LeagueEnum;
  player?: Maybe<PlayerType>;
  rOI: Scalars['Decimal']['output'];
  teams?: Maybe<Array<Maybe<TeamType>>>;
  urlBets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MlbGameType = {
  __typename?: 'MLBGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type MiddleType = {
  __typename?: 'MiddleType';
  americanOdds: Array<Scalars['Int']['output']>;
  awayTeam?: Maybe<TeamType>;
  betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  betMarketSiteIds: Array<BetMarketSiteEnum>;
  betValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  foundDateTime?: Maybe<Scalars['Long']['output']>;
  game?: Maybe<IGameType>;
  gameLiveData?: Maybe<GameLiveDataType>;
  homeTeam?: Maybe<TeamType>;
  id: Scalars['ID']['output'];
  league: LeagueEnum;
  player?: Maybe<PlayerType>;
  rOI: Scalars['Decimal']['output'];
  teams?: Maybe<Array<Maybe<TeamType>>>;
  urlBets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  admin?: Maybe<AdminMutationType>;
  user?: Maybe<UserMutationType>;
};

export type NbaGameType = {
  __typename?: 'NBAGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type NcaabGameType = {
  __typename?: 'NCAABGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type NcaafGameType = {
  __typename?: 'NCAAFGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type NflGameType = {
  __typename?: 'NFLGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type NhlGameType = {
  __typename?: 'NHLGameType';
  awayTeam?: Maybe<TeamType>;
  awayTeamId: Scalars['UShort']['output'];
  homeTeam?: Maybe<TeamType>;
  homeTeamId: Scalars['UShort']['output'];
  id: Scalars['ID']['output'];
  startDateTime: Scalars['DateTime']['output'];
};

export type PickUserType = {
  __typename?: 'PickUserType';
  emailAddress: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type PlayerType = {
  __typename?: 'PlayerType';
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UInt']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  betMarket?: Maybe<Array<Maybe<BetMarketType>>>;
  constants?: Maybe<ConstantsType>;
  games?: Maybe<Array<Maybe<IGameType>>>;
  user?: Maybe<UserQueryType>;
};


export type QueryBetMarketArgs = {
  id: Scalars['Guid']['input'];
};


export type QueryGamesArgs = {
  ids: Array<InputMaybe<Scalars['Guid']['input']>>;
  league: LeagueEnum;
};

export type ServerStatusType = {
  __typename?: 'ServerStatusType';
  arbitrageCountByBetSite: Array<Scalars['Int']['output']>;
  arbitrageCountByLeague: Array<Scalars['Int']['output']>;
  expectedValueCountByBetSite: Array<Scalars['Int']['output']>;
  expectedValueCountByLeague: Array<Scalars['Int']['output']>;
  freeBetCountByBetSite: Array<Scalars['Int']['output']>;
  freeBetCountByLeague: Array<Scalars['Int']['output']>;
  gameCountByLeagueEnumIdx: Array<Scalars['Int']['output']>;
  lowHoldCountByBetSite: Array<Scalars['Int']['output']>;
  lowHoldCountByLeague: Array<Scalars['Int']['output']>;
  middleCountByBetSite: Array<Scalars['Int']['output']>;
  middleCountByLeague: Array<Scalars['Int']['output']>;
};

export enum SportEnum {
  Baseball = 'BASEBALL',
  Basketball = 'BASKETBALL',
  Football = 'FOOTBALL',
  IceHockey = 'ICE_HOCKEY',
  Soccer = 'SOCCER',
  Tennis = 'TENNIS'
}

export type StripeAddressType = {
  __typename?: 'StripeAddressType';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  line1: Scalars['String']['output'];
  line2: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

export type StripePaymentMethodBillingDetailsType = {
  __typename?: 'StripePaymentMethodBillingDetailsType';
  address?: Maybe<StripeAddressType>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type StripePaymentMethodCardType = {
  __typename?: 'StripePaymentMethodCardType';
  brand: Scalars['String']['output'];
  country: Scalars['String']['output'];
  description: Scalars['String']['output'];
  expMonth: Scalars['Long']['output'];
  expYear: Scalars['Long']['output'];
  fingerprint: Scalars['String']['output'];
  funding: Scalars['String']['output'];
  iin: Scalars['String']['output'];
  issuer: Scalars['String']['output'];
  last4: Scalars['String']['output'];
};

export type StripePaymentMethodType = {
  __typename?: 'StripePaymentMethodType';
  billingDetails?: Maybe<StripePaymentMethodBillingDetailsType>;
  card?: Maybe<StripePaymentMethodCardType>;
  created?: Maybe<Scalars['Long']['output']>;
  id: Scalars['String']['output'];
  object: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type StripePriceRecurringType = {
  __typename?: 'StripePriceRecurringType';
  aggregateUsage: Scalars['String']['output'];
  interval: Scalars['String']['output'];
  intervalCount: Scalars['Long']['output'];
  trialPeriodDays?: Maybe<Scalars['Long']['output']>;
  usageType?: Maybe<Scalars['String']['output']>;
};

export type StripePriceType = {
  __typename?: 'StripePriceType';
  active: Scalars['Boolean']['output'];
  billingScheme: Scalars['String']['output'];
  created?: Maybe<Scalars['Long']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  object: Scalars['String']['output'];
  recurring?: Maybe<StripePriceRecurringType>;
};

export type StripeSubscriptionItemType = {
  __typename?: 'StripeSubscriptionItemType';
  deleted?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  object: Scalars['String']['output'];
  price?: Maybe<StripePriceType>;
  quantity?: Maybe<Scalars['Long']['output']>;
  subscription?: Maybe<Scalars['String']['output']>;
};

export type StripeSubscriptionType = {
  __typename?: 'StripeSubscriptionType';
  cancelAtPeriodEnd: Scalars['Boolean']['output'];
  canceledAt?: Maybe<Scalars['Long']['output']>;
  created?: Maybe<Scalars['Long']['output']>;
  currentPeriodEnd?: Maybe<Scalars['Long']['output']>;
  currentPeriodStart?: Maybe<Scalars['Long']['output']>;
  data?: Maybe<Array<Maybe<StripeSubscriptionItemType>>>;
  daysUntilDue?: Maybe<Scalars['Long']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  object: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  arbitrages?: Maybe<Array<Maybe<ArbitrageType>>>;
  betCache?: Maybe<Array<Maybe<BetMarketType>>>;
  expectedvalues?: Maybe<Array<Maybe<ExpectedValueType>>>;
  freebets?: Maybe<Array<Maybe<FreeBetType>>>;
  lowholds?: Maybe<Array<Maybe<LowHoldType>>>;
  middles?: Maybe<Array<Maybe<MiddleType>>>;
  serverStatus?: Maybe<ServerStatusType>;
};


export type SubscriptionArbitragesArgs = {
  request?: InputMaybe<InputArbitrageSubscriptionRequestType>;
};


export type SubscriptionBetCacheArgs = {
  request?: InputMaybe<InputBetCacheSubscriptionRequestType>;
};


export type SubscriptionExpectedvaluesArgs = {
  request?: InputMaybe<InputExpectedValueSubscriptionRequestType>;
};


export type SubscriptionFreebetsArgs = {
  request?: InputMaybe<InputFreeBetSubscriptionRequestType>;
};


export type SubscriptionLowholdsArgs = {
  request?: InputMaybe<InputLowHoldSubscriptionRequestType>;
};


export type SubscriptionMiddlesArgs = {
  request?: InputMaybe<InputMiddleSubscriptionRequestType>;
};

export type TeamType = {
  __typename?: 'TeamType';
  abbreviations: Array<Maybe<Scalars['String']['output']>>;
  city: Scalars['String']['output'];
  id: Scalars['UShort']['output'];
  name: Scalars['String']['output'];
};

export type TokenResponseType = {
  __typename?: 'TokenResponseType';
  accessToken: Scalars['String']['output'];
};

export enum UpcomingGameStatusEnum {
  All = 'ALL',
  None = 'NONE'
}

export type UserMutationType = {
  __typename?: 'UserMutationType';
  emailVerification?: Maybe<VerifyResponseType>;
  signup?: Maybe<Scalars['Boolean']['output']>;
  /** Every call to the API requires a token of some sort except this one. This should be the first call to get a token. If you send in an UserId & RefreshToken param then you will be checked and could get back an error. However, if you send in the correct settings you will get a new token. */
  token?: Maybe<TokenResponseType>;
};


export type UserMutationTypeEmailVerificationArgs = {
  token: Scalars['String']['input'];
  userId: Scalars['Guid']['input'];
};


export type UserMutationTypeSignupArgs = {
  cfTurnstileToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  promoCode?: InputMaybe<Scalars['String']['input']>;
};


export type UserMutationTypeTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Guid']['input']>;
};

export type UserQueryType = {
  __typename?: 'UserQueryType';
  ipGeoLookup?: Maybe<IpGeoLookupType>;
  paymentHistories?: Maybe<Array<Maybe<StripePaymentMethodType>>>;
  paymentMethods?: Maybe<Array<Maybe<StripePaymentMethodType>>>;
  subscriptions?: Maybe<Array<Maybe<StripeSubscriptionType>>>;
  user?: Maybe<PickUserType>;
};

export type VerifyResponseType = {
  __typename?: 'VerifyResponseType';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type BetSitesQueryVariables = Exact<{ [key: string]: never; }>;


export type BetSitesQuery = { __typename?: 'Query', constants?: { __typename?: 'ConstantsType', betSites?: Array<{ __typename?: 'BetSiteType', abbreviation: string, enumValue?: BetMarketSiteEnumTypeTwo | null, fullImage: string, iconImage: string, id: any, isSisterSite: boolean, name: string, sisterSiteIds?: Array<any | null> | null } | null> | null } | null };

export type GetGamesQueryVariables = Exact<{
  ids: Array<InputMaybe<Scalars['Guid']['input']>> | InputMaybe<Scalars['Guid']['input']>;
  league: LeagueEnum;
}>;


export type GetGamesQuery = { __typename?: 'Query', games?: Array<{ __typename?: 'EUFAChampionsGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'EnglishPremierGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'EuroLeagueBBGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'FrenchLigue1GameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'GermanBundesligaGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'ItalianSeriaAGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'LaLlgaGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'MLBGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'NBAGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'NCAABGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'NCAAFGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'NFLGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | { __typename?: 'NHLGameType', id: string, awayTeamId: any, homeTeamId: any, awayTeam?: { __typename?: 'TeamType', name: string } | null, homeTeam?: { __typename?: 'TeamType', name: string } | null } | null> | null };

export type BetCacheSubscriptionVariables = Exact<{
  league: LeagueEnum;
  betMarketType: BetMarketTypeEnumTypeTwo;
}>;


export type BetCacheSubscription = { __typename?: 'Subscription', betCache?: Array<{ __typename?: 'BetMarketType', gameId: string, listings?: Array<{ __typename?: 'BetMarketListingType', americanOdds?: number | null, foundDateTime?: any | null, isPrimary: boolean, marketId?: string | null, selectionId?: string | null, siteId: BetMarketSiteEnum, site?: { __typename?: 'BetSiteType', abbreviation: string, enumValue?: BetMarketSiteEnumTypeTwo | null, fullImage: string, iconImage: string, id: any, isSisterSite: boolean, name: string, sisterSiteIds?: Array<any | null> | null } | null } | null> | null, conditions?: Array<{ __typename?: 'BetMarketConditionType', betValue?: any | null, betValueMax?: any | null, marketType: BetMarketTypeEnum, overUnder?: BetMarketOverOrUnderEnum | null, playerId?: any | null, teamId?: any | null } | null> | null } | null> | null };


export const BetSitesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BetSites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"constants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"betSites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"enumValue"}},{"kind":"Field","name":{"kind":"Name","value":"fullImage"}},{"kind":"Field","name":{"kind":"Name","value":"iconImage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isSisterSite"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sisterSiteIds"}}]}}]}}]}}]} as unknown as DocumentNode<BetSitesQuery, BetSitesQueryVariables>;
export const GetGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Guid"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"league"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LeagueEnum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"league"},"value":{"kind":"Variable","name":{"kind":"Name","value":"league"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NBAGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NFLGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NCAAFGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NCAABGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NHLGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EuroLeagueBBGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EUFAChampionsGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LaLlgaGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EnglishPremierGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FrenchLigue1GameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GermanBundesligaGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItalianSeriaAGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MLBGameType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"homeTeamId"}},{"kind":"Field","name":{"kind":"Name","value":"awayTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTeam"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGamesQuery, GetGamesQueryVariables>;
export const BetCacheDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"BetCache"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"league"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LeagueEnum"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"betMarketType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BetMarketTypeEnumTypeTwo"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"betCache"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"league"},"value":{"kind":"Variable","name":{"kind":"Name","value":"league"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"betMarketType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"betMarketType"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"listings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"americanOdds"}},{"kind":"Field","name":{"kind":"Name","value":"foundDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"isPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"marketId"}},{"kind":"Field","name":{"kind":"Name","value":"selectionId"}},{"kind":"Field","name":{"kind":"Name","value":"site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"enumValue"}},{"kind":"Field","name":{"kind":"Name","value":"fullImage"}},{"kind":"Field","name":{"kind":"Name","value":"iconImage"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isSisterSite"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sisterSiteIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"conditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"betValue"}},{"kind":"Field","name":{"kind":"Name","value":"betValueMax"}},{"kind":"Field","name":{"kind":"Name","value":"marketType"}},{"kind":"Field","name":{"kind":"Name","value":"overUnder"}},{"kind":"Field","name":{"kind":"Name","value":"playerId"}},{"kind":"Field","name":{"kind":"Name","value":"teamId"}}]}}]}}]}}]} as unknown as DocumentNode<BetCacheSubscription, BetCacheSubscriptionVariables>;