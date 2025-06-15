function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[29%] px-[7%] absolute w-screen aspect-video text-white bg-gradient-to-r from-black ">
      <div className="group">
        <h2 className="text-5xl font-bold">{title}</h2>
        <h6 className="text-lg w-1/3 mt-6 hidden group-hover:block">
          {overview}
        </h6>
      </div>
      <div className="mt-6">
        <button className="bg-white text-black p-3 px-10 text-xl opacity-50 rounded hover:opacity-80">
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button className="ml-3 bg-white text-black p-3 px-10 text-xl opacity-50 rounded hover:opacity-80">
          <i className="fa-solid fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
