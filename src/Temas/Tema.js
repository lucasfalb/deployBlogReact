function Tema() {
  function Tema01() {
    return (
      <>
        <div className="bg tema01">
          <div className="bg"></div>
          <div className="buildings"></div>
          <div className="far-buildings"></div>
          <div className="skill-foreground"></div>
        </div>
      </>
    );
  }
  function Tema02() {
    return (
      <>
        <div className="bg tema02">
          <div className="foreground"></div>
          <div className="far-buildings"></div>
          <div className="back-buildings"></div>
        </div>
      </>
    );
  }
  function Tema03() {
    return (
      <>
        <div className="bg tema03">
          <div className="bg"></div>
          <div className="foreground-trees"></div>
          <div className="montain-far"></div>
          <div className="montains"></div>
          <div className="trees"></div>
        </div>
      </>
    );
  }
  // randomizar o tema
  function temaRandom(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  // passando a quantidade de temas para que seja escolhido um aleatóriamente
  let tema = temaRandom(1, 3);
  switch (tema) {
    case 1:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#19281f');
      return Tema01();
    // caso seja o tema 02
    case 2:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#052c46');
      return Tema02();
    // caso seja o tema 03
    case 3:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
        document.querySelector('meta[name="theme-color"]').setAttribute("content", '#ab6a8c');
      return Tema03();
    default:
      break;
  }
}
export default Tema;
