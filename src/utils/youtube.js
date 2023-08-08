const getVideoId = (videoUrl) => {
  const url = new URL(videoUrl);
  const params = url.searchParams;

  return params.get('v');
};

export { getVideoId };
