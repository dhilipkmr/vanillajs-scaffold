import DomCreator from './DomCreator.js'

class Login extends DomCreator {
	constructor(cb) {
		super();
		this.$submitBtn = this.getElementById('btn-submit-username');
		this.$usernameField = this.getElementById('username');
		this.handleSubmitCallback = cb;
		this.addListener();
	}

	addListener = () => {
		this.$submitBtn.addEventListener('click', (e) => {
			this.handleSubmitCallback(this.$usernameField.value.trim());
		});

		this.$usernameField.addEventListener('keyup', (e) => {
			if (e.keyCode === 13) {
				this.handleSubmitCallback(this.$usernameField.value.trim());
			}
		});
	}
}

export default Login;