const AboutPage = () => {
  return (
    <div className="max-w-4xl p-8 mx-auto">
      <article className="prose prose-xl">
        <h1>Kalkulator Inflacji</h1>
        <h2>By Type of Web</h2>

        <p>
          Ceny towarów i usług konsumpcyjnych w marcu 2022 r. w porównaniu
          z analogicznym miesiącem ub. roku wzrosły o 11,0% (przy wzroście cen
          usług o – 11,6% i towarów – o 9,1%).
        </p>

        <p>
          To jednak przy założeniu konkretnych wag przypisywanych przez Główny
          Urząd Statystyczny przy tworzeniu „koszyka”. Są one jednak różne dla
          każdej osoby i zależą od tego na co i ile wydajemy pieniędzy.
        </p>

        <p>
          Niniejsza symulacja pozwala oszacować indywidualną inflację na
          podstawie podanych wydatków w każdej z kategorii, które bierze pod
          uwagę GUS.
        </p>
      </article>
    </div>
  );
};

export default AboutPage;
