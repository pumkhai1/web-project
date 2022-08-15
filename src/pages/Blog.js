import React from "react";
import "../styles/Blog.css";
import Post from "../components/Post";
import {useTypewriter} from "react-simple-typewriter";


const Blogs = () => {

	const {text} = useTypewriter({
		words: [ 'Welcome to My', 'Blogs', 'This is Where','I Post', 'My Diary','And Opinions'],
		loop: 0 // Infinit
	  });

const blogPosts = [
	{
	title: "Learning Any New Language",
	body: `I remember the first time I have to learn English. It was not a piece of cake and
			I did struggle a lot. I was only nine-year-old when I came to the States. I can say the same thing about learning programming languages for the first time, not a piece of cake. Learning technical skills take times like learning a new language. For my first programming language, I started out with Python. After Python, I progressed into java, C, MATLAB, and JavaScript. Since I wanted to step into software engineering profession, I realized that all those programming languages are like tools.`,
	author: "Pum Khai ",
	imgUrl:
		"https://www.50languages.com/template/img/105960980.jpg",
	},
	{
		title: "My Perspective On Software Engineering",
		body: ` I believed that every engineering displines have some sort of math and physic as their fundamental. For software engineer, I think discreet math and data structure & algorithm were the fundamental. I know that there are people out there that hate the term "software engineer" and claimed that software engineer is not a real engineer for lack of physical science as part of it fundamental. I like to make a point that data structure and algorithm make it the physical science equivalent for other engineering disciplines.`,
		author: "Pum Khai ",
		imgUrl:
			"https://geekflare.com/wp-content/uploads/2022/02/Software-Engineering-1-840x628.jpg",
	},
	{
		title: "Deploying Chatbot",
		body: `I just deployed a simple NLP chat bot based on feed forward neural network today 
		August 14, 2022. It was my first time building an chat bot from scratch. I also modulize all my methods and function for future usages.`,
		author: "Pum Khai",
		imgUrl: "https://t4.ftcdn.net/jpg/01/73/87/55/360_F_173875594_YKuT1PxX9LygQtsODgDa0IJ93tszGNNf.jpg"
	}
];

return (
	<div >
		<div>
			<br/>
			<br/>
			<br/>

		</div>
      	<div className="title">
        	<h1>{text}</h1>
      	</div>
      	<br />
      	<br />
		<br />
      	<br />
		<br />
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<div className="posts-container">
			{blogPosts.map((post, index) => (
			<Post key={index} index={index} post={post} />
			))}
		</div>
	</div>
);
};

export default Blogs;
