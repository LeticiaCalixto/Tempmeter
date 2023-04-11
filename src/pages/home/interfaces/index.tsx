export interface ITaxData {
  rake_gross: number
  rake_net: number
  agent_rakeshare: number
  player_rake: number
}

export interface ITaxChartData {
  date: Date
  rake_gross: number
  rake_net: number
}

export interface ITaxChartPerGameValueData {
  date: Date
  low_values: object
  medium_values: object
  high_values: object
}

export interface IBuyinTypeData {
  buyin_qty: IBuyinData
  buyin: IBuyinData
  ticket: IBuyinData
}

export interface IBuyinData {
  games: IBuyinGameData[]
  total: number | null
  average: number | null
}

export interface IBuyinGameData {
  name: string
  value: number
}

export interface ISeriesData {
  name: string
  data: Array<number>
}

export interface IGeneralInformationData {
  players_active: number
  profit_by_game_gross: number
  profit_by_game_net: number
  profit_by_player_gross: number
  profit_by_player_net: number
}

export interface ISessionData {
  hour: number
  qty: number
}