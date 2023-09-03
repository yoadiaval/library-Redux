import PropTypes from "prop-types";

function ContentModal({ value }) {
  return (
    <div className="  flex flex-col sm:flex-row h-auto place-items-center space-y-10 space-x-10">
      <figure className="w-[120px] sm:w-[250px] h-auto">
        <img
          className="drop-shadow-xl"
          src={value.cover}
          alt="cover del libro"
        />
      </figure>
      <div className="h-auto">
        <div className="flex truncate">
          <p className="font-bold md:text-2xl">{value.title}</p>
          <p className="place-self-center ml-[3px]">({value.year})</p>
        </div>
        <div className="text-black">
          <span className="font-bold md:text-xl">Genre: </span>{" "}
          <p>{value.genre}</p>
          <span className="font-bold md:text-xl">Synopsis:</span>{" "}
          <p>{value.synopsis}</p>
          <span className="font-bold md:text-xl">Author:</span>{" "}
          <p>{value.author.name}</p>
          <span className="font-bold md:text-xl">Total Pages:</span>{" "}
          <p>{value.pages}</p>
        </div>
      </div>
    </div>
  );
}

ContentModal.propTypes = { value: PropTypes.node.isRequired };
export default ContentModal;
