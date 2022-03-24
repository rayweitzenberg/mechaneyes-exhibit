import "./Intro.scss";

let Intro = () => {
  return (
    <>
      <section className="intro intro--pc">
        <div className="intro__inner">
          <img className="logo-mechaneyes" src="/images/logo-mechaneyes.png" />
          <h1>Ray Weitzenberg</h1>
          <h3>Artist and technologist inducing delight online and off</h3>
          <p>
            With a profound appreciation for light, I've spent the last 24 years
            collecting and projecting it. I focus my attention equally on
            digital. It's when the two passions intersect that monkeys start to
            dance.
          </p>
          <p>
            Inside is a glimpse of what I see and what I create for others to
            see.
          </p>
          <p className="intro-how">
            Use the Nav or think in Google Maps terms <br />
            Click &middot; Tap &middot; Pinch &middot; Drag
          </p>
        </div>
      </section>
    </>
  );
};

export default Intro;
