import React from "react";
import "../styles/Blog.css";
import Post from "../components/Post";
import {useTypewriter} from "react-simple-typewriter";


const Blogs = () => {

	const {text} = useTypewriter({
		words: [ 'Welcome to My Blogs', 'This is Where I Post', 'My Diary','And Opinions'],
		loop: 0 // Infinit
	  });

const blogPosts = [
	{
	title: "Learning Any New Language",
	body: `I remember the first time I have to learn English. It was not a piece of cake and
			I did struggle a lot. I was only nine-year-old when I came to the States. I can say the same thing about learning programming languages for the first time, not a piece of cake. Learning technical skills take times like learning a new language. For my first programming language, I started out with Python. After Python, I progressed into java, C, MATLAB, and JavaScript. Since I wanted to step into software engineering profession, I realized that all those programming languages are like tools.`,
	author: "Pum Khai ",
	imgUrl:
		"data:image/jpeg;base64,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43rrrv8ALh6eCIiL6pURERERERERERERERERERERERF5lZqaW+oI+opc06cjDcXG1/ZxH8wBA/8AtS6aqxmfTDn4ls0TmtaXBzwbsEEG20N7r23U0TwLB4rPx0DnmN7BZadulqzohRQrQREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q==",
	},
	{
		title: "My Perspective On Software Engineering",
		body: ` I believed that every engineering displines have some sort of math and physic as their fundamental. For software engineer, I think discreet math and data structure & algorithm were the fundamental. I know that there are people out there that hate the term "software engineer" and claimed that software engineer is not a real engineer for lack of physical science as part of it fundamental. I like to make a point that data structure and algorithm make it the physical science equivalent for other engineering disciplines.`,
		author: "Pum Khai ",
		imgUrl:
			"https://geekflare.com/wp-content/uploads/2022/02/Software-Engineering-1-840x628.jpg",
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
		<div className="posts-container">
			{blogPosts.map((post, index) => (
			<Post key={index} index={index} post={post} />
			))}
		</div>
	</div>
);
};

export default Blogs;
