import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome!</h1>
            <p>
                This is a one page application using Javascript and Node.js, made by Tega Natufe
            </p>
            <p>
                <a href="/posts" data-link>View the posts</a>
            </p>
        `;
    }
}