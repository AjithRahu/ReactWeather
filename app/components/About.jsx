var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        Hi, My name is Ajith and this is a weather application built on React.
        I built this app to get comfortable with using React as this is my first React project.
      </p>
      <p className="text-center">
        Here are some of the tools i used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map api to search for weather data by City name
          </li>
        </ul>
      </p>
      <h1 className="text-center githubpage"><a className="text-center" href="https://github.com/AjithRahu" target="_blank">My Github Page</a></h1>
    </div>
  )
};

module.exports = About;
