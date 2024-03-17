const Hero = () => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/0e4c/0cea/ab36aa15e5780fa853f6b7b697cbb5bc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ldyqGKgRXt3g22SDyp24Xswcsa7pTT5sthS3DUJxbZ6tp5B6YTg36kyGTAJXzMNzreNLwFmeFM3k1oZn-XBj5qqPgN7b5kr~s9qC17qarrBgSbLdyBHpxXMnjDvj86OzNBlluy~vwP-bJOd5A7-4~6Ztqa466rzY80JgGub~bm6w1WUC7B5sAqEo-gCA7~fklfhpFge~NH3nhxdOexY36RA3iOf398tfrt88HGE8iv0xeFnEATsCt5uBAZib3~UsEIxEXI8vQjxHPMW0aPFcyBi0LJQ3xxjTJkRWCi0iezs6UzJIQ887OLNCRePaWkN757IhsizBuyFMfw06kmyrNw__";

  return (
    <div className="relative h-[60vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-7xl font-bold mb-4 font-playfair py-4">
            Our events gallery
          </h1>
          <p className="text-lg lg:text-2xl">
            Events at DBTR are filled with joyous occasions, cultural
            gatherings, and learning opportunities that bring us all together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
