import PropTypes from 'prop-types';

Index.propTypes = {
  videoId: PropTypes.string.isRequired
};
export default function Index({ videoId }) {
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}></iframe>
  );
}
