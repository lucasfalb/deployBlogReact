import FeedContentPost from "../FeedContentPost/FeedContentPost";
import "./Style.css";
export default function FeedContent({isLogged}) {
  return (
    <>
        {isLogged ? <h2>techShare, user</h2> : <></>}
        <section className="FeedContent">
          <FeedContentPost />
          <FeedContentPost />
          <FeedContentPost />
          <FeedContentPost />
          <FeedContentPost />
          <FeedContentPost />
        </section>
    </>
  );
}
