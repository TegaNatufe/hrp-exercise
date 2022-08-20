import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Post #" + this.postId);
    }

    async getHtml() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.postId);
        let json = await response.json();

        let request = await fetch('https://jsonplaceholder.typicode.com/comments');
        let commentsJSON = await request.json();

        var commentsHTML = `
        <h2>Comments</h2>
        `;

        for (let i = 1; i <= 5; i++) {
            var index = i + (5 * (this.postId - 1));
            var comment = commentsJSON[index - 1];
            var singleCommentHTML = `
            <h5>Name: ${comment.name}, Email: ${comment.email}</h5>
            <p>${comment.body}.</p>          
            `;
            commentsHTML += singleCommentHTML;
        }
        
        return `
            <h1>Title: ${json.title}</h1>
            <h4>User ID: ${json.userId}</h4>
            <p>${json.body}.</p>
        ` + commentsHTML;
    }
}