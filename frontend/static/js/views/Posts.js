import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        const NO_OF_POSTS = 10;

        var html = `
        <h1>Posts</h1>
        <p>You are viewing the first ${NO_OF_POSTS} posts!</p>
        `;

        for (let i = 1; i <= NO_OF_POSTS; i++) {
            var text = `
            <p>
            <a href="/posts/${i}" data-link>View post #${i}</a>
            </p>          
            `;
            html += text;
        }

        return html;
    }
}