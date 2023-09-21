import './NewsSection.css';

const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="card">
        <h2>School Announcement</h2>
        <div className="news-list">
          <div className="news-item">
            <h3>New Semester Starts</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus placerat dignissim pretium, lorem mi laoreet orci, in vulputate nisi risus ac dolor. Duis a euismod sem, nec egestas odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget sodales arcu. Curabitur fringilla iaculis nisl, eu rhoncus ligula elementum nec. Nam vel rutrum lectus. Fusce eu placerat mauris. Ut eget risus commodo, suscipit sem a, fermentum diam. Pellentesque quis cursus magna, eu convallis neque.
            </p>
          </div>
          <div className="news-item">
            <h3>Lorem Ipsum</h3>
            <p>
              Aenean accumsan risus id augue tempor, ut sollicitudin enim interdum. Integer fringilla dolor nec tellus feugiat, vitae imperdiet sapien rutrum. Suspendisse potenti. Donec a augue ut est lobortis vulputate eu sit amet leo. Nam id hendrerit leo, eget pharetra neque. Quisque suscipit urna diam, nec sagittis lorem vulputate vitae. Nam dui ipsum, tempus eget diam ut, pharetra efficitur turpis. Quisque mattis arcu ac dolor finibus, in congue nisi feugiat.
            </p>
          </div>
        </div>
        {/* Add more news items */}
      </div>
    </div>
  );
};

export default NewsSection;