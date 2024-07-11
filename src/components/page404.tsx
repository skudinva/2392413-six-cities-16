function Page404(): JSX.Element {
  return (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">404 Not Found</b>
        <p className="favorites__status-description">
          Try to enter the correct URL
        </p>
      </div>
    </section>
  );
}
export default Page404;
