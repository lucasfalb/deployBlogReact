import FeedContentPost from "../FeedContentPost/FeedContentPost";
import "./Style.css";
export default function FeedContent({isLogged,userData}) {
  return (
    <>
        {isLogged ? <h2>Olá, {userData.name}!</h2> : <></>}
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
