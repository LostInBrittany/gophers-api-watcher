import { html, css, LitElement } from 'lit';

const apiUrl = "http://localhost:8080";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class GophersApiWatcher extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        max-width: 1280px;
        margin: 0 auto;
        color: var(--gophers-api-watcher-text-color, #000);
      }
      .title {
        font-family: sans-serif;
        color: #404040;
        max-width:100%;
      }
      .title img {
        max-width:100%;
      }
      .gophers-gallery {
        display: flex;
        flex-flow: row wrap;
        justify-content: begin;
        align-content: begin;
      }


    `;
  }

  static get properties() {
    return {
      api: {
        type: String,
      },
      gophers: {
        type: Array,
      }
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.api = this.api || apiUrl;
    this._getData();

  }

  render() {
    return html`
      <h1 class="title"><img src="/gophers-api-watcher.png" alt="Gopher API Watcher"></h1>
      <div class="gophers-gallery">
        ${ this.gophers ? 
          this.gophers.map(gopher => html`
            <gophers-api-watcher-gopher
              name=${gopher.name}
              url=${gopher.url}
            ></gophers-api-watcher-gopher>`) : ''
        }
      </div>
    `;
  }

  async _getData() {
    try {
      const response = await fetch(`${this.api}/gophers`);
      this.gophers = await response.json();
      await(timeout(5000));
      this._getData();
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }
}
