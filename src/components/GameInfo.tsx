export interface IGameInfo {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_data: string
  profile_url: string
}

export default function GameInfo(info: IGameInfo) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="bd-placeholder-img card-img-top" src={info.thumbnail} alt={info.title} />
        <h3>{info.title}</h3>

        <div className="card-body">
          <p className="card-text">{info.short_description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">More Info</button>
            </div>
            <a href={info.game_url} className="text-body-secondary">Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
