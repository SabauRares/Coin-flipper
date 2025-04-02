class CoinFlip extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = 'styles.css';

        this.shadowRoot.innerHTML = `
            <div class="coin-container">
                <div class="coin">Click to Flip</div>
            </div>
        `;

        this.shadowRoot.appendChild(style);

        this.coin = this.shadowRoot.querySelector('.coin');
        this.coin.addEventListener('click', () => this.flip());
    }

    flip() {
        this.coin.style.animation = 'flip 1s ease-in-out';

        setTimeout(() => {
            const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
            this.coin.textContent = result;
            this.coin.style.animation = ''; // Reset animation
        }, 1000);
    }
}

customElements.define('coin-flip', CoinFlip);
