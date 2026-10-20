function Filter({
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter,
}) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={titleFilter}
        onChange={(event) => setTitleFilter(event.target.value)}
      />

      <select
        value={ratingFilter}
        onChange={(event) => setRatingFilter(event.target.value)}
      >
        <option value="0">Toutes les notes</option>
        <option value="5">5/10 et plus</option>
        <option value="7">7/10 et plus</option>
        <option value="8">8/10 et plus</option>
        <option value="9">9/10 et plus</option>
      </select>
    </div>
  );
}

export default Filter;
