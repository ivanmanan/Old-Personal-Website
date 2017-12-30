import React, { Component } from "react";
import Project from "./Components/Project.jsx";

// This file passes down all the info to the other templating
// Every new project: Make sure to rearrange start/end indices
class App extends Component {
  constructor() {
	  super();
	  this.state = {
	    projects: [ ]
	  }
  }
  componentWillMount() {
	  this.setState({projects: [
	    {
		    title: "Bio",
		    photo: "/images/ivan.jpg",
		    link: "#",
		    overview: "Student at UCLA and an aspiring full-stack engineer.",
		    info: "Traveling enthusiast. Favorite place: Fingal's Cave.",
		    index: "start"
	    },
      {
		    title: "Family Watch",
		    photo: "/images/family-watch.png",
		    link: "https://www.youtube.com/watch?v=kG9u_v0YBbw",
		    overview: "Suspect your children skipping school? Now you can track their location!",
		    info: "When logged in, the application tracks GPS and displays location history of other users.",
		    index: "1"
      },
	    {
		    title: "FrackMan",
		    photo: "/images/FrackMan.png",
		    link: "https://github.com/ivanmanan/FrackMan",
		    overview: "Video game programmed in C++.",
		    info: "Score as many points as possible by collecting oil barrels while avoiding protesters.",
		    index: "2"
	    },
	    {
		    title: "Doctor Crux",
		    photo: "/images/Crux.png",
		    link: "https://github.com/ivanmanan/Old-Doctor-Crux",
		    overview: "Self-diagnosis web application.",
		    info: "List your symptoms, and Doctor Crux will suggest diagnoses and treatments.",
		    index: "3"
	    },
      {
		    title: "Travel Share",
		    photo: "/images/travelshare.png",
		    link: "#",
		    overview: "Project currently in construction.",
		    info: "Document your travels and share with others.",
		    index: "4"
	    },
      {
        title: "UAS",
		    photo: "/images/construction.jpeg",
		    link: "#",
		    overview: "Project currently in construction. Repository has been privated.",
		    info: "Will be directing the ground station team for the June 2018 AUVSI SUAS competition.",
		    index: "end"
      }
	  ]});
  }
  render() {
	  return (
	    <div className="App">
		    <Project projects={this.state.projects} />
	    </div>
	  );
  }
}
export default App;
