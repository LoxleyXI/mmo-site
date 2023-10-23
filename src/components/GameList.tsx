import { useState, useEffect }  from "react";
import GameInfo, { IGameInfo } from "./GameInfo";

export default function GameList() {
  const [gameList, setGameList] = useState<IGameInfo[]>([]);
  const [gamePage, setGamePage] = useState<IGameInfo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const firstPage = currentPage * itemsPerPage;
    const lastPage  = firstPage + itemsPerPage;

    setGamePage(gameList.slice(firstPage, lastPage))
  }, [currentPage, gameList]);

  useEffect(() => {
    getGameList("browser");
  }, []);

  async function getGameList(platform: string) {
    fetch(`http://localhost:3000/api/mmo/${platform}`)
      .then((response: Response) => response.json() as Promise<IGameInfo[]>)
      .then((gameInfo: IGameInfo[]) => {
        setGameList(gameInfo);
        setTotalPages(Math.ceil(gameInfo.length / itemsPerPage));
      });
  }

  function prevPage(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evt.preventDefault();

    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evt.preventDefault();

    if (currentPage < (totalPages - 1)) {
      setCurrentPage(currentPage + 1);
    }
  }

  function setPage(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageNumber: number) {
    evt.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <>
    <div className="container py-2">
      <ul className="pagination justify-content-center">
        <li className={ currentPage > 0 ? "page-item" : "page-item disabled" }>
          <a className="page-link" href="#" onClick={ prevPage }>Previous</a>
        </li>
          {[...Array(totalPages)].map((e, i ) =>
            i == currentPage
            ? <li className="page-item active"><span className="page-link">{i + 1}</span></li>
            : <li className="page-item"><a className="page-link" href="#" onClick={ (evt) => setPage(evt, i) }>{i + 1}</a></li>
          )}
        <li className={ currentPage < (totalPages - 1) ? "page-item" : "page-item disabled" }>
          <a className="page-link" href="#" onClick={ nextPage }>Next</a>
        </li>
      </ul>
    </div>
    <div className="album bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {gamePage.map((entry: IGameInfo) =>
            <GameInfo key={entry.id} {...entry} />
          )}
        </div>
      </div>
    </div>
    </>
  );
}
